import React, { useEffect, useState } from "react";
import { withReducer } from "service";
import { useDispatch, useSelector } from "react-redux";
import { ReviewTable, NotifSenderPopup } from "orgasms";
import { Pagination } from "molecules";
import { TableContainer } from "@material-ui/core";
import { Label } from "atoms";
import { onProjectTrackingReview } from "./store/action";
import Reducer from "./store/reducer";
function Review() {
  const [auth, setAuth] = useState(false);
  const [popup, SetPopup] = useState(false);
  const [allReviewData, setallReviewData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pager, setPager] = useState({});
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.Auth?.authenticated);
  const ReviewData = useSelector(({ AllReviews }) => AllReviews);
  const loading = useSelector(({ AllReviews }) => AllReviews?.loader);

  const getAllReviewdata = (paylaod = { page: 1 }) =>
    dispatch(onProjectTrackingReview(paylaod));
  const totaldata = useSelector(({ AllReviews }) => AllReviews?.count);
  const toggleOpen = () => SetPopup(!popup);

  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) getAllReviewdata();
  }, [auth]);
  useEffect(() => {
    if (ReviewData) {
      setallReviewData(ReviewData?.data);
    }
  }, [ReviewData]);
  useEffect(() => {
    setLoader(loading);
  }, [loading]);
  const handlePage = (e) => {
    setPage(e);
    return getAllReviewdata({ page: e });
  };

  useEffect(() => {
    setPager({
      ...pager,
      count: Math.ceil(totaldata / 10),
    });
  }, [totaldata]);
  useEffect(() => {
    setPager({
      ...pager,
      page,
    });
  }, [page]);

  return (
    <div className="pt-4">
      <Label
        onClick={toggleOpen}
        value="Project Tracking"
        classes={{
          root: "text-current font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow">
        <TableContainer>
          <ReviewTable />
        </TableContainer>
        <Pagination mainClass="py-6" />
      </div>
      <NotifSenderPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default withReducer("AllReviews", Reducer)(React.memo(Review));
