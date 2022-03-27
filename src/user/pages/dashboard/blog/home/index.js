import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogTableHeader, BlogTable } from "orgasms";
import { Pagination } from "molecules";
import { BsPlus } from "react-icons/bs";
import { TableContainer } from "@material-ui/core";
import { Label } from "atoms";
import { deleteBlog, onBlogGet } from "./store/action";
import { useHistory } from "react-router";
import { resetPage } from "../store/action";
function HomeBlog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [auth, setAuth] = useState(false);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [Allblogdata, setblogdata] = useState([]);
  const [pager, setPager] = useState(null);
  const state = useSelector((state) => state?.Auth?.authenticated);
  const blogdata = useSelector(({ Blog }) => Blog?.blogdata?.results);
  const loading = useSelector(({ Blog }) => Blog?.loader);
  const Blog = useSelector(({ Blog }) => Blog);
  const getAllblogData = (payload) => dispatch(onBlogGet(payload));
  const handleSearch = (e) => setSearch(e?.target?.value);
  const deleteBlogPost = (e) => dispatch(deleteBlog(e));
  const reset = () => dispatch(resetPage());
  const push = (e) => history.push("/user/dashboard/blog/add-article");
  useEffect(() => {
    getAllblogData({ search });
  }, [search]);
  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) getAllblogData();
  }, [auth]);
  useEffect(() => {
    if (blogdata) {
      setblogdata(blogdata);
    }
  }, [blogdata]);
  useEffect(() => {
    setLoader(loading);
  }, [loading]);
  useEffect(() => {
    if (Blog) {
      setPager({
        count: Blog?.count,
        page: Blog?.params?.page,
      });
    }
  }, [Blog]);
  useEffect(() => {
    return () => reset();
  }, []);
  return (
    <div className="lg:w-4/5 pt-4 mx-auto">
      <Label
        value="Manage Articles"
        classes={{
          root: "text-current font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow">
        <BlogTableHeader
          btnValue="Add New"
          iconEnd={<BsPlus />}
          labelClass="hidden"
          containerClass=""
          onClick={push}
          containerClass="p-4 md:p-0 md:pr-3"
          handleSearch={handleSearch}
        />
        <TableContainer>
          <BlogTable
            onDelete={deleteBlogPost}
            loading={loader}
            data={Allblogdata}
          />
        </TableContainer>
        <Pagination
          handlePage={(e) => getAllblogData({ page: e })}
          pager={pager}
          mainClass="py-6"
        />
      </div>
    </div>
  );
}

export default HomeBlog;
