import React, { useState, useEffect } from "react";
import { ProductDetail as ProductDetailOrg, ProjectDrawer } from "orgasms";
import Reducer from "./Store/reducer";
import { withReducer } from "service";
import { FaChevronLeft } from "react-icons/fa";
import { onGetProductDeatil, onBuyProduct } from "./Store/action";
import { useDispatch, useSelector } from "react-redux";
function ProductDetail({ match }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(
    ({ ProjectDetail }) => ProjectDetail?.projectDetail
  );
  const toggeShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    dispatch(onGetProductDeatil(match.params.productid));
  }, []);
  const clickHandler = async () => {
    dispatch(onBuyProduct(state?.id));
  };

  return (
    <div className="relative">
      <ProductDetailOrg
        inputClass="hidden"
        saveBtn="hidden"
        state={state}
        clickHandler={clickHandler}
      />
      <div className="flex items-center h-screen absolute top-0 right-0">
        <div
          className="bg-gray-300 px-2 py-4 rounded-l-2xl shadow cursor-pointer"
          onClick={toggeShow}
        >
          <FaChevronLeft color="white" fontSize="17" />
        </div>
      </div>
      <div className="absolute right-0 top-0 -mr-5">
        {show === true ? <ProjectDrawer onClick={toggeShow} /> : <></>}
      </div>
    </div>
  );
}
export default withReducer("ProjectDetail", Reducer)(ProductDetail);
