import React, { useState, useEffect } from "react";
import { Project_Small_Carousel, SeeAllProject } from "orgasms";
import { CgArrowLeftO } from "react-icons/cg";
import { LabelFields } from "molecules";
import { useDispatch, useSelector } from "react-redux";
import { withReducer } from "service";
import { onAllProjectsGet } from "./store/action";
import { useHistory } from "react-router-dom";
import Reducer from "./store/reducer";
import Loader from "skeltons/user/MyProjects/project";
function SeeAllProjects() {
  const history = useHistory().push;
  const [auth, setAuth] = useState(false);
  const [allProjects, setAllProjects] = useState([]);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.Auth?.authenticated);
  const projectdata = useSelector(({ AllProjects }) => AllProjects?.project);
  const loading = useSelector(({ AllProjects }) => AllProjects?.loading);
  const getAllProjectsData = () => dispatch(onAllProjectsGet());
  useEffect(() => {
    setAuth(state);
  }, [state]);

  useEffect(() => {
    if (auth) getAllProjectsData();
  }, [auth]);
  useEffect(() => {
    if (projectdata) {
      setAllProjects(projectdata);
    }
  }, [projectdata]);
  useEffect(() => {
    setLoader(loading);
  }, [loading]);
  return (
    <div className="w-full">
      <LabelFields
        btnValue="Go back"
        buttonclasses="bg-current text-white px-4 py-2 text-sm"
        iconStart={<CgArrowLeftO className="mr-1 text-md" />}
        mainClass="pb-2 border-b-2 border-current grid md:grid-cols-3"
        value="Must viewed project"
        reverseClass="flex flex-row-reverse items-center justify-between col-span-2 md:pl-10 xl:pl-18"
        labelClasses="text-xl tracking-tight font-semibold md:mb-0 mb-2 font-sans text-ideeza-100"
        selectdivclass="flex items-center md:w-48"
        classessort={{ root: "font-sans font-semibold md:w-18 w-32" }}
        className="bg-white text-xs text-gray-600"
        selectOptions={[{ value: "Most viewed", name: "Most viewed" }]}
        valuesort="Sort by"
      />
      <div className="py-4 grid grid-cols-1 w-full">
        <SeeAllProject projects={allProjects?.splice(0, 3)} />
      </div>
      <div className="grid gap-4 mt-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 ">
        {loader
          ? new Array(12).fill("").map((v, k) => <Loader key={k} />)
          : allProjects?.map((v, k) => {
              return k > 2 && k < 8 ? (
                <>
                  <Project_Small_Carousel
                    iconContanerClass="bg-white border border-ideeza-100 flex items-center justify-center text-lg rounded-full w-7 h-7"
                    imageSettingIcon="w-4 h-4"
                    notification={v?.notification_count}
                    view={v?.view}
                    numberingValue={k + 1}
                    like={v?.likes}
                    imagesIdeezaIcon="w-4 h-3"
                    mainIconClass="flex items-center"
                    lableIconClass={{
                      root: "font-extrabold mr-1 text-sm pl-1 text-white",
                    }}
                    carouselHeight="h-48"
                    titleClass="text-lg"
                    nameClass="text-md text-current tracking-tight"
                    noClass="text-2xl pt-1 pl-1"
                    avatarClass="w-8 h-8 border border-gray-225"
                    authorName={`${v?.user?.first_name} ${v?.user?.last_name}`}
                    projectName={v?.title}
                    image={
                      v?.cover_photo ? v?.cover_photo : "/assets/images/car.png"
                    }
                    project={v}
                    authorImage={
                      v?.profile_photo
                        ? v?.profile_photo
                        : "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1218407987?b=1&k=6&m=1218407987&s=612x612&w=0&h=qcSUpMACVcryz4b_wHTRW7ZSxpG3VtkJRn-bPibCT1Q="
                    }
                  />
                </>
              ) : null;
            })}
      </div>
      <div className="grid gap-2 lg:grid-cols-5 xl:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-10">
        {loader
          ? new Array(10).fill("").map((v, k) => <Loader key={k} />)
          : allProjects?.map((v, k) => {
              return k > 7 ? (
                <>
                  <Project_Small_Carousel
                    iconContanerClass="bg-white border border-ideeza-100 flex items-center justify-center text-lg rounded-full w-5 h-5"
                    imageSettingIcon="w-3 h-3"
                    notification={v?.notification_count}
                    view={v?.view}
                    numberingValue={k + 1}
                    imagesIdeezaIcon="w-3 h-3"
                    mainIconClass="flex items-center"
                    lableIconClass={{
                      root: "font-extrabold mr-1 text-xs pl-1 text-white",
                    }}
                    top={"55%"}
                    carouselHeight="h-28"
                    titleClass="text-sm py-1"
                    nameClass="text-sm"
                    noClass="text-lg"
                    avatarClass="w-7 h-7"
                    authorName={`${v?.user?.first_name} ${v?.user?.last_name}`}
                    projectName={v?.title}
                    image={
                      v?.cover_photo ? v?.cover_photo : "/assets/images/car.png"
                    }
                    project={v}
                    authorImage={
                      v?.profile_photo
                        ? v?.profile_photo
                        : "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1218407987?b=1&k=6&m=1218407987&s=612x612&w=0&h=qcSUpMACVcryz4b_wHTRW7ZSxpG3VtkJRn-bPibCT1Q="
                    }
                  />
                </>
              ) : null;
            })}
      </div>
    </div>
  );
}
SeeAllProjects.defaultProps = {
  allProjects: new Array(30).fill(""),
};
export default withReducer("AllProjects", Reducer)(React.memo(SeeAllProjects));
