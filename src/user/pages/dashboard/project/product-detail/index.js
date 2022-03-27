import React, { useState, useEffect } from "react";
import {
  ProductDetail as ProductDetailOrg,
  ProjectDrawer,
  CreateProjectPopup,
  ShareNewsFeedPopup,
  ProductHeader,
} from "orgasms";
import Reducer from "./Store/reducer";
import { withReducer } from "service";
import { FaChevronLeft } from "react-icons/fa";
import {
  onGetProductDeatil,
  onBuyProduct,
  postComment,
  updateProduct,
  shareNewsFeed,
  getElectronicProduct,
  getCoverProduct,
} from "./Store/action";
import { handleMySelfProject } from "../../../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ViewerScene } from "engine";

function ProductDetail({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [engine, setEngine] = useState({});
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [mySelf, setMySelf] = useState(false);
  const [mySelfLoading, setMySelfLoader] = useState(false);
  const [share, setShare] = useState(false);
  const [data, setData] = useState(null);
  const [activeView, setActiveView] = useState("general");
  const mySelfModel = useSelector(({ User }) => User?.project?.self?.model);
  const mySelfLoader = useSelector(({ User }) => User?.project?.self?.loading);
  const electronic = useSelector(
    ({ ProjectDetail }) => ProjectDetail?.electronic
  );
  const cover = useSelector(({ ProjectDetail }) => ProjectDetail?.cover);
  const state = useSelector(
    ({ ProjectDetail }) => ProjectDetail?.projectDetail
  );
  const handleActvieView = (e) => setActiveView(e);
  const toggleShare = (e) => {
    setData(e);
    return setShare(!share);
  };
  const toggleMySelftProject = (e) => {
    setData(e);
    return dispatch(handleMySelfProject());
  };
  const clickHandler = async () => {
    dispatch(onBuyProduct(state?.id));
  };

  const toggeShow = () => {
    if (show) {
      setTimeout(() => {
        setToggle(false);
      }, 500);
    }
    setToggle(true);
    return setShow(!show);
  };
  const postProductComment = (payload) => dispatch(postComment(payload));
  const handler = (e) => {
    return dispatch(
      updateProduct(
        {
          ...e,
        },
        e?.id
      )
    );
  };
  const titleHandler = (e) => {
    toggleMySelftProject();
    return handler(e);
  };
  const togglePublicPrivate = (e) => {
    return dispatch(
      updateProduct(
        {
          ...e,
        },
        e?.id
      )
    );
  };
  const shareToNewsFeed = (payload) => {
    return Promise.all([
      dispatch(shareNewsFeed({ ...payload, user_product: data?.id })),
    ]).then(() => setShare(false));
  };
  const pushToCustomize = (e) =>
    history.push(`/user/pro/electronic/schematic/${e}`);
  useEffect(() => {
    dispatch(onGetProductDeatil(match.params.productid));
  }, []);
  useEffect(() => {
    setMySelfLoader(mySelfLoader);
  }, [mySelfLoader]);
  useEffect(() => {
    setMySelf(mySelfModel);
  }, [mySelfModel]);
  useEffect(() => {
    if (activeView) {
      if (activeView === "electronic") {
        dispatch(getElectronicProduct(match.params.productid));
      } else if (activeView === "cover") {
        dispatch(getCoverProduct(match?.params?.productid));
      }
    }
  }, [activeView]);
  useEffect(() => {
    if (electronic) {
      if (electronic?.component_data) {
        setEngine(electronic?.component_data);
      }
    }
  }, [electronic]);

  useEffect(() => {
    if (cover) {
      if (cover?.data) {
        setEngine({ url: cover?.data });
      }
    }
  }, [cover]);

  return (
    <div className="relative pb-5">
      <div className="bg-white shadow-lg py-4 rounded-md px-4">
        <ShareNewsFeedPopup
          toggleOpen={toggleShare}
          shareToNewsFeed={shareToNewsFeed}
          open={share}
        />
        <ProductHeader
          ProjectName={state?.title}
          inputClass="hidden"
          onEdit={toggleMySelftProject}
          state={state}
          edit={mySelf}
          pushToCustomize={pushToCustomize}
          handleActvieView={handleActvieView}
          view={activeView}
          togglePublicPrivate={togglePublicPrivate}
          update={titleHandler}
        />
        <div className="xl:w-3/5 lg:w-11/12 w-full border border-gray-225 mx-auto max-h-80vh overflow-hidden">
          <ViewerScene init={engine} height={400} isBarShows={false} />
        </div>
        <ProductDetailOrg
          postProductComment={postProductComment}
          saveBtn="hidden"
          state={state}
          clickHandler={clickHandler}
          onEdit={handler}
          share={toggleShare}
        />
        <div className="flex items-center h-screen absolute top-0 right-0">
          <div
            className="bg-gray-300 px-2 py-4 rounded-l-2xl shadow cursor-pointer"
            onClick={toggeShow}
          >
            <FaChevronLeft color="white" fontSize="17" />
          </div>
        </div>
        <div className="absolute overflow-hidden right-0 top-0 -mr-5">
          {toggle ? (
            <ProjectDrawer toggle={show} onClick={toggeShow} detail={state} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default React.memo(withReducer("ProjectDetail", Reducer)(ProductDetail));
