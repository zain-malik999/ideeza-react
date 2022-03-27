import React, { useState, useEffect } from "react";
import { Button, Popover } from "atoms";
import { Icon_Label, TabsMolecule } from "molecules";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  ProjectCoverage as ProjectCover,
  ProjectsDescription,
  ProjectAttachment,
  ProjectTimeline,
  ProjectTable,
  Open3dPopup,
  ProjectCongratulationsPopup,
  AddTaskPopup,
  CompleteTaskPopup,
} from "orgasms";
import { useRouteMatch } from "react-router-dom";
import { getProjectDetail } from "./store/action";
import { withReducer } from "service";
import Reducer from "./store/reducer";
function ProjectCoverage() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [projectId, setId] = useState(null);
  const [project, setProject] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  const [popup2, SetPopup2] = useState(false);
  const toggleOpen2 = () => SetPopup2(!popup2);
  const [popup3, SetPopup3] = useState(false);
  const toggleOpen3 = () => SetPopup3(!popup3);
  const [popup4, SetPopup4] = useState(false);
  const toggleOpen4 = () => SetPopup4(!popup4);
  const route = useRouteMatch();
  const projectDetail = useSelector(
    ({ ProjectCoverage }) => ProjectCoverage?.project
  );
  useEffect(() => {
    if (route) {
      setId(route?.params?.projectid);
    }
  }, [route]);
  useEffect(() => {
    if (projectId) {
      dispatch(getProjectDetail(projectId));
    }
  }, [projectId]);
  useEffect(() => {
    if (projectDetail) {
      setProject(projectDetail);
    }
  }, [projectDetail]);
  return (
    <div className="md:-mr-4">
      <ProjectCover
        btnValue="Open 3D"
        project={project}
        open3D={toggleOpen}
        btn={
          <Button
            onClick={toggleOpen4}
            value="Complete project"
            classes={{
              root: `bg-ideeza-100 text-white border border-solid border-current py-2 text-md tracking-tight font-sans rounded capitalize px-2`,
            }}
          />
        }
        dropdown={
          <>
            <IconButton
              onClick={handleClick}
              id={id}
              className="outline-none p-0 px-1"
            >
              <HiOutlineDotsVertical className="text-3xl font-sans cursor-pointer text-current" />
            </IconButton>
            <Popover
              open={open}
              handleClick={handleClick}
              onClose={handleClose}
              id={id}
              anchorEl={anchorEl}
            >
              <div className="py-3 pl-1 w-56">
                <Icon_Label
                  mainClass="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                  tooltipProps={{ open: false }}
                  labelValue="Manage Dispute"
                  iconContanerClass="text-lg w-6 mr-2"
                  lableClass={{
                    root: `text-gray-300 font-sans text-md`,
                  }}
                  iconComponent={
                    <img src="/assets/images/dispute.png" alt="" srcset="" />
                  }
                />
                <Icon_Label
                  mainClass="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                  tooltipProps={{ open: false }}
                  labelValue="Contact this Client"
                  iconContanerClass="text-lg w-6 mr-2"
                  lableClass={{
                    root: `text-gray-300 font-sans text-md`,
                  }}
                  iconComponent={
                    <img src="/assets/images/contract.png" alt="" srcset="" />
                  }
                />
                <Icon_Label
                  mainClass="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                  tooltipProps={{ open: false }}
                  labelValue="Project Settings"
                  iconContanerClass="text-lg w-6 mr-2"
                  lableClass={{
                    root: `text-gray-300 font-sans text-md`,
                  }}
                  iconComponent={
                    <img src="/assets/images/setting.png" alt="" srcset="" />
                  }
                />
              </div>
            </Popover>
          </>
        }
      />
      <div className="max-h-screen overflow-y-auto pr-4">
        <img
          src={
            project?.cover_image
              ? project?.cover_image
              : "/assets/images/Layer5.png"
          }
          className="w-full rounded-xl max-h-60vh"
          alt=""
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-12 gap-y-8 pt-5 mb-5">
          <ProjectsDescription project={project} />
          <ProjectAttachment />
        </div>
        <TabsMolecule
          index={index}
          handleChange={handleChange}
          tabsClasses="md:w-1/5 w-3/5 ml-auto rounded-lg border border-current mb-3"
          tabClasses="bg-white rounded-lg text-md font-sans tracking-tight news-tabs focus:text-white focus:bg-current focus:font-semibold transition-all duration-500 ease-in-out transform-none text-gray-300 w-42"
          tabsData={[
            {
              name: "Timeline",
              component: (
                <ProjectTable data={project?.tasks ? project?.tasks : []} />
              ),
            },
            {
              name: "List",
              component: <ProjectTimeline />,
            },
          ]}
        />
        <Button
          value="Add New Task +"
          onClick={toggleOpen3}
          classes={{
            root: `bg-purple-400 text-white py-2 text-md tracking-tight font-sans rounded capitalize px-3 mt-6`,
          }}
        />
      </div>
      <Open3dPopup open={popup} toggleOpen={toggleOpen} />
      <ProjectCongratulationsPopup open={popup2} toggleOpen={toggleOpen2} />
      <AddTaskPopup open={popup3} toggleOpen={toggleOpen3} />
      <CompleteTaskPopup open={popup4} toggleOpen={toggleOpen4} />
    </div>
  );
}
export default withReducer(
  "ProjectCoverage",
  Reducer
)(React.memo(ProjectCoverage));
