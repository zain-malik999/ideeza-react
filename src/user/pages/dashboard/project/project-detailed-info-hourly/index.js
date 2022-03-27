import React, { useState } from "react";
import { Label } from "atoms";
import { ProjectDetailedTabs } from "molecules";
import {
  TimePaymentHourly,
  CommonHeader,
  FeedbackMilestones,
  MilestoneTermsSettings,
} from "orgasms";
function ProjectDetailedInfo(props) {
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  return (
    <div>
      <Label
        value="Buisness plan - before raising money: "
        classes={{
          root:
            "text-3xl tracking-tighter font-sans font-bold text-ideeza-100 pb-4",
        }}
      />
      <div className="shadow-full rounded-lg space-y-4">
        <CommonHeader type="hourly" />
        <ProjectDetailedTabs
          index={index}
          handleChange={handleChange}
          tabsClasses=""
          tabClasses="bg-transparent rounded-t-xl text-md font-sans tracking-tight news-tabs focus:text-white focus:bg-current focus:font-semibold transition-all duration-500 ease-in-out transform-none text-gray-300 w-36"
          tabsData={[
            {
              name: "Time & Payments",
              textColor: "primary",
              component: <TimePaymentHourly />,
            },
            {
              name: "Messages & Files",
              component: <div></div>,
            },
            {
              name: "Work Diary",
              component: <div></div>,
            },
            {
              name: "Terms & Setting",
              component: <MilestoneTermsSettings />,
            },
            {
              name: "Feedback",
              component: <FeedbackMilestones />,
            },
          ]}
        />
      </div>
    </div>
  );
}
export default ProjectDetailedInfo;
