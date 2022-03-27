import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withReducer } from "service";
import { onProductionTrack } from "./store/action";
import { ProductionTable } from "orgasms";
import { Pagination } from "molecules";
import { TableContainer } from "@material-ui/core";
import { Label } from "atoms";
import Reducer from "./store/reducer";

function Production() {
  const [auth, setAuth] = useState(false);
  const [allProductionData, setallProductionData] = useState([]);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const [pager, setPager] = useState({});
  const [page, setPage] = useState(1);
  const state = useSelector((state) => state?.Auth?.authenticated);
  const ProductionData = useSelector(({ AllProduction }) => AllProduction);
  const loading = useSelector(({ AllProduction }) => AllProduction?.loader);
  const getAllProductiondata = (paylaod = { page: 1 }) =>
    dispatch(onProductionTrack(paylaod));
  const totalData = useSelector(({ AllProduction }) => AllProduction?.count);
  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) getAllProductiondata();
  }, [auth]);
  useEffect(() => {
    if (ProductionData) {
      setallProductionData(ProductionData?.data);
    }
  }, [ProductionData]);
  useEffect(() => {
    setLoader(loading);
  }, [loading]);
  const handlePage = (e) => {
    setPage(e);
    return getAllProductiondata({ page: e });
  };

  useEffect(() => {
    setPager({
      ...pager,
      count: Math.ceil(totalData / 10),
    });
  }, [totalData]);
  useEffect(() => {
    setPager({
      ...pager,
      page,
    });
  }, [page]);
  return (
    <div className="pt-4">
      <Label
        value="Project Tracking"
        classes={{
          root: "text-current font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow">
        <TableContainer className="overflow-x-auto max-w-95vh">
          <ProductionTable loading={loading} data={allProductionData} />
        </TableContainer>
        <Pagination pager={pager} handlePage={handlePage} mainClass="py-6" />
      </div>
    </div>
  );
}
export default withReducer("AllProduction", Reducer)(React.memo(Production));
