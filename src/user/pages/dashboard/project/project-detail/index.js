import React, { useEffect, useState } from "react";
import {
  ProjectDetail as ProjectDetailOrg,
  ProjectDescription,
  ProjectProducts,
} from "orgasms";
import { onGetProduct } from "./store/action";
import Reducer from "./store/reducer";
import { withReducer } from "service";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ProjectDetail({ match }) {
  const history = useHistory();
  const state = useSelector(({ Project }) => Project?.userProject);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetProduct(match.params.projectid));
  }, []);
  useEffect(() => {
    setData(state);
  }, [state]);
  const ClickHandler = async (id) => {
    history.push(`/user/dashboard/project/product-detail/${id}`);
  };
  return (
    <div className="md:p-6 p-4 bg-white rounded-lg">
      <ProjectDetailOrg detail={data} />
      <div className="grid lg:grid-cols-2 gap-6 mt-10 grid-col-1">
        <ProjectDescription detail={data} />
        <ProjectProducts detail={data} changeid={ClickHandler} />
      </div>
    </div>
  );
}
export default withReducer("Project", Reducer)(ProjectDetail);
