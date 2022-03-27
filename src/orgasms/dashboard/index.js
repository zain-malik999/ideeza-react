import React, { useState, useEffect } from "react";
import {
  Project_Small_Carousel,
  Dashboard2,
  DashboardPopup,
  DashboardActivity,
} from "..";
import { Last_Inovation, DashboardImgCard, LabelFields } from "molecules";
import { Label } from "atoms";
import Inovation from "skeltons/user/Dashboard/inovation";
import Projects from "skeltons/user/MyProjects/project";
import moment from "moment";
function Dashboard({
  open,
  mySelf,
  handler,
  loader,
  toggleOpen,
  toggleMySelftProject,
  state,
  user,
  push,
  loading,
}) {
  const [projects, setProject] = useState(0);
  const [contacts, setContacts] = useState(0);
  const [score, setScore] = useState(0);
  const [activity, setActivity] = useState([]);
  const [blog, setBlog] = useState([]);
  const [topProject, setTopProject] = useState([]);

  useEffect(() => {
    if (state) {
      setProject(state?.projects);
      setContacts(state?.contacts);
      setScore(state?.score);
      setActivity(state?.activities);
      setBlog(state?.latestArticles);
      setTopProject(state?.topProjects);
    }
  }, [state]);
  return (
    <>
      <DashboardPopup
        open={open}
        mySelf={mySelf}
        handler={handler}
        loader={loader}
        toggleOpen={toggleOpen}
        toggleMySelftProject={toggleMySelftProject}
        state={state}
        history={push}
      />
      <div className="space-y-4 mt-2">
        <Label
          value={`Good Morning, ${user?.first_name} ${user?.last_name}`}
          classes={{
            root: "text-current text-2xl mb-0 tracking-normal font-sans",
          }}
        />
        <div className="grid lg:grid-cols-2 md:gap-6 gap-4">
          <DashboardImgCard onClick={toggleOpen} />
          <div className="">
            <Dashboard2 contact={contacts} score={score} projects={projects} />
            <DashboardActivity activity={activity} />
          </div>
        </div>
        <div className="md:grid lg:grid-cols-2 md:gap-6 gap-4 pt-4">
          <div>
            <div className="pr-14 mb-4 pt-2.5">
              <LabelFields
                mainClass="pb-1 border-b border-current"
                value="World's last innovation"
                labelseeall="See all"
                selectdivclass="hidden"
                buttonclasses="hidden"
              />
            </div>
            <div className="gap-4 max-h-50vh pr-12 overflow-y-auto grid md:grid-cols-2">
              {loading ? (
                <Loader />
              ) : (
                blog?.map((v, k) => {
                  return (
                    <>
                      <Last_Inovation
                        key={k}
                        imageSrc={
                          v?.image
                            ? `http://api.ideeza.com/${v?.image}`
                            : "https://www.lumosmarketing.io/wp-content/uploads/2019/04/placeholder-image.jpg"
                        }
                        userName={`${v?.user?.first_name} ${v?.user?.last_name}`}
                        postDate={moment(v?.created_at).format("DD MMM, YYYY")}
                        postTitle={v?.title}
                        postDescription={v?.description}
                        comments={v?.comments}
                        buttonValue={"Read More"}
                      />
                    </>
                  );
                })
              )}
            </div>
          </div>
          <div className="pt-5 md:pt-0">
            <div className="pr-14 mb-4">
              <LabelFields
                mainClass="pb-1 border-b border-current"
                value="Top projects"
                labelseeall="See all"
                selectdivclass="flex items-center md:w-48"
                classessort={{ root: "font-sans font-semibold md:w-18 w-20" }}
                className="bg-white text-xs text-gray-600"
                selectOptions={[{ value: "Most viewed", name: "Most viewed" }]}
                buttonclasses="hidden"
                valuesort="Sort by"
              />
            </div>
            <div className="gap-4 max-h-50vh pr-12 overflow-y-auto grid md:grid-cols-2">
              {loading ? (
                <Loader isProject={true} />
              ) : (
                topProject?.map((v, k) => {
                  return (
                    <>
                      <Project_Small_Carousel
                        iconContanerClass="bg-white border border-ideeza-100 flex items-center justify-center text-lg rounded-full w-7 h-7"
                        numbering="hidden"
                        imageSettingIcon="w-4 h-4"
                        imagesIdeezaIcon="w-4 h-3"
                        mainIconClass="flex items-center"
                        lableIconClass={{
                          root: "font-extrabold mr-1 text-sm pl-1 text-white",
                        }}
                        src="/assets/images/car.png"
                        carouselHeight="h-42"
                        titleClass="text-lg"
                        nameClass="text-md "
                        avatarClass="w-8 h-8"
                        image={
                          v?.image
                            ? `http://api.ideeza.com/${v?.image}`
                            : "https://www.lumosmarketing.io/wp-content/uploads/2019/04/placeholder-image.jpg"
                        }
                        like={v?.likes}
                        projectName={v?.title}
                        authorName={`${v?.user?.first_name} ${v?.user?.last_name}`}
                        authorImage={v?.user?.profile_photo}
                        view={v?.view}
                        notification={v?.notification_count}
                      />
                    </>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Loader({ isProject = false }) {
  return new Array(10)
    .fill("")
    .map((v, k) => (isProject ? <Projects key={k} /> : <Inovation key={k} />));
}
export default Dashboard;
