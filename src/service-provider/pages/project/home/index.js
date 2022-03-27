import React, { useEffect, useState } from "react";
import { BlogTableHeader, ProjectHomeTable } from "orgasms";
import { useDispatch, useSelector } from "react-redux";
import { onAllProjectsGet } from "../store/action";
import { Pagination } from "molecules";
import { BsPlus } from "react-icons/bs";
import { TableContainer } from "@material-ui/core";
import { Label, Select } from "atoms";
import { withReducer } from "service";
import Reducer from "../store/reducer";
import { useHistory, useRouteMatch } from "react-router-dom";

function ProjectHome() {
  const dispatch = useDispatch();
  const route = useRouteMatch();

  const [pager, setPager] = useState(null);
  const [auth, setAuth] = useState(false);
  const [tableDate, SetTableData] = useState([]);
  const history = useHistory();
  const projectdata = useSelector(
    ({ Projects }) => Projects?.serviceProjects?.results
  );
  const Count = useSelector(({ Projects }) => Projects);
  const state = useSelector((state) => state?.Auth?.authenticated);

  const getAllProjectData = (payload) => dispatch(onAllProjectsGet(payload));
  const getProjectHandler = (id) => {
    history.push(`${route.url}/project-coverage/${id}`);
  };
  useEffect(() => {
    if (Count) {
      setPager({
        count: Count?.count,
        page: Count?.params?.page,
      });
    }
  }, [Count]);
  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) getAllProjectData();
  }, [auth]);

  useEffect(() => {
    if (projectdata) SetTableData(projectdata);
  }, [projectdata]);

  return (
    <div className="pt-4 w-full">
      <Label
        value="Projects"
        classes={{
          root:
            "text-current font-sans font-bold pb-3 text-lg lg:text-xl tracking-tight",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow">
        <BlogTableHeader
          btnValue="Add New"
          iconEnd={<BsPlus />}
          labelClass="hidden"
          iconClass="md:-mr-4"
          containerClass="md:flex items-center justify-between px-4 space-y-3 md:space-y-0 pb-3"
          prop={
            <>
              <Select
                placeholder="All"
                containerClass="h-10 md:w-20 w-full bg-gray-150 rounded-none text-ideeza-100"
                inputClass="text-base tracking-tight p-1 px-2"
                options={[{ value: "All", name: "All" }]}
              />
            </>
          }
        />
        <TableContainer>
          <ProjectHomeTable
            data={tableDate}
            getProjectHandler={getProjectHandler}
          />
        </TableContainer>
        <Pagination
          handlePage={(e) => getAllProjectData({ page: e })}
          pager={pager}
          mainClass="py-6"
        />
      </div>
    </div>
  );
}

export default withReducer("Projects", Reducer)(ProjectHome);
