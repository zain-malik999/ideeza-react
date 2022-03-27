import React from "react";
import { OrdersTableHeader, OrdersTable } from "orgasms";
import { Pagination } from "molecules";
import { TableContainer } from "@material-ui/core";
import { withReducer } from "service";
import { Label } from "atoms";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "./store/action";
import Reducer from "./store/reducer";
import { useState } from "react";

function Transaction() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [pager, setPager] = useState({});
  const [page, setPage] = useState(1);
  const totalData = useSelector(
    ({ ServiceProviderOrder }) => ServiceProviderOrder?.count
  );
  const table = useSelector(
    ({ ServiceProviderOrder }) => ServiceProviderOrder?.data
  );
  const loader = useSelector(
    ({ ServiceProviderOrder }) => ServiceProviderOrder?.loader
  );
  const handleSearch = (e) => setSearch(e.target.value);
  const handlePage = (e) => {
    setPage(e);
    return dispatch(getOrders({ page: e, search }));
  };
  useEffect(() => {
    setData(table);
  }, [table]);
  useEffect(() => {
    setLoading(loader);
  }, [loader]);
  useEffect(() => {
    setPage(1);
    dispatch(getOrders({ search }));
  }, [search]);
  useEffect(() => {
    setPager({
      ...pager,
      count: Math.ceil(totalData / 1),
    });
  }, [totalData]);
  useEffect(() => {
    setPager({
      ...pager,
      page,
    });
  }, [page]);
  return (
    <>
      <Label
        value="Orders"
        classes={{ root: `text-current font-sans font-bold text-lg md:pt-2` }}
      />
      <div className="bg-white rounded-md shadow-lg mt-4">
        <OrdersTableHeader
          handleSearch={handleSearch}
          btnValue="Download Invoices"
          iconClass="text-gray-500"
        />
        <TableContainer>
          <OrdersTable loading={loading} data={data} />
        </TableContainer>
        <Pagination pager={pager} handlePage={handlePage} mainClass="py-7" />
      </div>
    </>
  );
}

export default withReducer(
  "ServiceProviderOrder",
  Reducer
)(React.memo(Transaction));
