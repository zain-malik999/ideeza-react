import React, { useState } from "react";
import { Label } from "atoms";
import { TabsMolecule, Icon_Label } from "molecules";
import { AiOutlineUser, AiOutlineStar, AiOutlineBars } from "react-icons/ai";
import { FcSupport } from "react-icons/fc";
import { IoIosRocket } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BsBook, BsFillPeopleFill } from "react-icons/bs";
import {
  TabAbout,
  Agent,
  TabReviews,
  TabServices,
  TabActivities,
  TabArtical,
  TabMachineProcess,
} from "..";

function MyProfileRightSide(props) {
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  const { tabBar, tabContent, tabBody } = props;
  return (
    <>
      <div className="bg-right">
        <div className="h-64 p-8 px-10">
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue="NEW YORK, NY"
            iconContanerClass="text-lg"
            lableClass={{
              root:
                "text-white text-base uppercase tracking-tight ml-1 font-sans",
            }}
            iconComponent={<IoLocationOutline className="text-white" />}
          />
          <Label
            value="PCBix LLC"
            className="text-white text-4xl pt-1 pb-2 font-meri"
          />
          <Label
            value="Product design"
            className="text-white underline text-base"
          />
        </div>
      </div>
      <TabsMolecule
        index={index}
        handleChange={handleChange}
        tabsClasses="border-b-2"
        tabClasses="w-full bg-white text-xl font-sans tracking-tight news-tabs focus:text-current transition-all duration-500 ease-in-out hover:border-b-4 border-current transform-none text-gray-350 "
        tabsData={[
          {
            name: (
              <Icon_Label
                tooltipProps={{ open: false }}
                labelValue="About"
                iconContanerClass="text-lg"
                mainClass={tabBar}
                lableClass={{
                  root: `${tabContent}`,
                }}
                iconComponent={<AiOutlineUser />}
              />
            ),
            component: (
              <div className={`xl:pl-8 pt-8 ${tabBody}`}>
                <TabAbout />
              </div>
            ),
          },
          {
            name: (
              <Icon_Label
                tooltipProps={{ open: false }}
                labelValue="Machine, Process & Material"
                iconContanerClass="text-lg"
                mainClass={tabBar}
                lableClass={{
                  root: `${tabContent}`,
                }}
                iconComponent={<IoIosRocket />}
              />
            ),
            component: (
              <div className={`xl:pl-8 pt-10 ${tabBody}`}>
                <TabMachineProcess />
              </div>
            ),
          },
          {
            name: (
              <Icon_Label
                tooltipProps={{ open: false }}
                labelValue="Services & certification & Additional info"
                iconContanerClass="text-lg"
                mainClass={tabBar}
                lableClass={{
                  root: `${tabContent}`,
                }}
                iconComponent={<FcSupport />}
              />
            ),
            component: (
              <div className={`xl:pl-8 pt-10 ${tabBody}`}>
                <TabServices />
              </div>
            ),
          },
          {
            name: (
              <Icon_Label
                tooltipProps={{ open: false }}
                labelValue="Activities"
                iconContanerClass="text-lg"
                mainClass={tabBar}
                lableClass={{
                  root: `${tabContent}`,
                }}
                iconComponent={<AiOutlineBars />}
              />
            ),
            component: (
              <div className={`xl:pl-8 pt-8 ${tabBody}`}>
                <TabActivities />
              </div>
            ),
          },
          {
            name: (
              <Icon_Label
                tooltipProps={{ open: false }}
                labelValue="Agents"
                iconContanerClass="text-lg"
                mainClass={tabBar}
                lableClass={{
                  root: `${tabContent}`,
                }}
                iconComponent={<BsFillPeopleFill />}
              />
            ),
            component: (
              <div className={`xl:pl-8 pt-8 ${tabBody}`}>
                <Agent />
              </div>
            ),
          },
          {
            name: (
              <Icon_Label
                tooltipProps={{ open: false }}
                labelValue="Reviews"
                iconContanerClass="text-lg"
                mainClass={tabBar}
                lableClass={{
                  root: `${tabContent}`,
                }}
                iconComponent={<AiOutlineStar />}
              />
            ),
            component: (
              <div className={`xl:pl-8 pt-8 ${tabBody}`}>
                <TabReviews />
              </div>
            ),
          },
          {
            name: (
              <Icon_Label
                tooltipProps={{ open: false }}
                labelValue="Articles"
                iconContanerClass="text-lg"
                mainClass={tabBar}
                lableClass={{
                  root: `${tabContent}`,
                }}
                iconComponent={<BsBook />}
              />
            ),
            component: (
              <div className={`xl:pl-8 pt-8 ${tabBody}`}>
                <TabArtical />
              </div>
            ),
          },
        ]}
      />
      <div className="flex items-center flex-col md:w-8/12 w-11/12 mx-auto pb-8">
        <img src="/assets/images/private.svg" className="w-full" alt="" />
        <Label
          value="This Profile under private mode"
          className="md:text-4xl text-3xl font-bold text-center md:px-10 py-4 text-gray-300 font-meri"
        />
      </div>
    </>
  );
}
MyProfileRightSide.defaultProps = {
  tabBar: "flex items-center text-gray-300",
  tabContent: "pl-1 text-xs text-gray-300",
  tabBody: "p-5 w-full",
};
export default MyProfileRightSide;
