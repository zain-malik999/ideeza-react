import React, { useEffect, useState } from "react";
import { Label } from "atoms";
import { Pagination } from "molecules";
import { BlogsTable, BlogsTableHeader } from "orgasms";
import { useDispatch, useSelector } from "react-redux";
import { onBlogsManagamentGet } from "./store/action";
import { withReducer } from "service";
import Reducer from "./store/reducer";
function Blogs() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [Allblogdata, setblogdata] = useState([]);
  const [pager, setPager] = useState({});
  const [page, setPage] = useState(1);
  const Alldata = useSelector(({ BlogsReducer }) => BlogsReducer?.data);
  const loader = useSelector(({ BlogsReducer }) => BlogsReducer?.loader);
  const totalData = useSelector(({ BlogsReducer }) => BlogsReducer?.count);
  const handleSearch = (e) => setSearch(e.target.value);
  const handlePage = (e) => {
    setPage(e);
    return dispatch(onBlogsManagamentGet({ page: e, search }));
  };
  useEffect(() => {
    setPage(1);
    dispatch(onBlogsManagamentGet({ search }));
  }, [search]);
  useEffect(() => {
    setLoading(loader);
  }, [loader]);
  useEffect(() => {
    if (Alldata) {
      setblogdata(Alldata);
    }
  }, [Alldata]);
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
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  return (
    <div className="pt-4">
      <Label
        value="Blogs"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg space-y-3">
        <BlogsTableHeader
          handleSearch={handleSearch}
          btnValue="Add New"
          // iconEnd={<BsPlus />}
          labelClass="hidden"
          containerClass=""
        />
        <BlogsTable data={Allblogdata} column={[{}]} loading={loading} />
        <Pagination pager={pager} handlePage={handlePage} mainClass="py-6" />
      </div>
    </div>
  );
}

export default withReducer("BlogsReducer", Reducer)(React.memo(Blogs));
