import React, { useEffect, useRef, useState } from "react";
import {
  togglePopup,
  saveCover,
  getCoverSidebar,
  restPage,
} from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { AddSuccess, SaveModal } from "orgasms";
import { Button } from "atoms";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { CoverScene } from "engine";
function Electronic() {
  const { register, errors, control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const Cover = useRef();
  const route = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [option, setOption] = useState([]);
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState(false);
  const [param, setParam] = useState(null);
  const popup = useSelector(({ Pro }) => Pro?.popup);
  const loader = useSelector(({ Pro }) => Pro?.loader);
  const category = useSelector(({ Pro }) => Pro?.category);
  const mesh = useSelector(({ Pro }) => Pro?.importMesh);
  const handlePopup = () => dispatch(togglePopup());
  const handlerSubmit = async (data) => {
    let init = await Cover.current.save();
    let payload = {
      data: init,
      ...data,
    };
    if (param) {
      payload.user_product = param;
    }
    return Promise.all([dispatch(saveCover(payload))]).then(() => {
      return history.push(`${route.url}/success/${param ? param : ""}`);
    });
  };
  useEffect(() => {
    setOpen(popup);
  }, [popup]);
  useEffect(() => {
    setIndicator(loader);
  }, [loader]);
  useEffect(() => {
    if (category) {
      setOption(category);
    }
  }, [category]);
  useEffect(() => {
    const { pathname } = location;
    if (pathname) {
      let path = pathname.split("/");
      if (path.length === 4) {
        let id = path[path.length - 1];
        id = parseInt(id);
        setParam(id);
      }
    }
  }, [location?.pathname]);
  useEffect(() => {
    dispatch(getCoverSidebar());
  }, [category]);
  useEffect(() => {
    return () => dispatch(restPage());
  }, []);
  useEffect(() => {
    if (mesh) {
      Cover.current.import({ url: mesh?.data });
    }
  }, [mesh]);
  return (
    <>
      <SaveModal
        register={register}
        errors={errors}
        control={control}
        handleSubmit={handleSubmit}
        options={option}
        loader={indicator}
        open={open}
        close={handlePopup}
        handlerSubmit={handlerSubmit}
        title="Cover"
      />
      <div className="w-full mt-10">
        <Switch>
          <Route
            exact
            path={[`${route.url}/`, `${route.url}/:id`]}
            render={() => <CoverScene ref={Cover} />}
          />
          <Route
            exact
            path={[`${route.url}/success`, `${route.url}/success/:id`]}
            render={() => <AddSuccess value="cover" />}
          />
          <Route path="*" render={() => <Redirect to={`${route.url}/`} />} />
        </Switch>
        <div className="w-full flex pt-4 items-center justify-end">
          <Button
            onClick={handlePopup}
            value="Save"
            variant="contained"
            size="medium"
            color="primary"
            classes={{ root: "bg-ideeza-100 w-32" }}
          />
        </div>
      </div>
    </>
  );
}
export default Electronic;
