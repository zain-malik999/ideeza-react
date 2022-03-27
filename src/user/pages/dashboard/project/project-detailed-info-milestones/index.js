import React, { useState } from "react";
import { Label } from "atoms";
import { ProjectDetailedTabs } from "molecules";
import {
  TimePaymentMilestone,
  CommonHeader,
  FeedbackMilestones,
  MilestoneTermsSettings,
} from "orgasms";
function ProjectDetailedMilestones(props) {
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Label
        value="Translation Service - English to Hebrew: "
        classes={{
          root:
            "text-3xl tracking-tighter font-sans font-bold text-ideeza-100 pb-4",
        }}
      />
      <div className="shadow-full rounded-lg space-y-4">
        <CommonHeader type="milestone" />
        <ProjectDetailedTabs
          index={index}
          handleChange={handleChange}
          tabsClasses=""
          tabClasses="bg-transparent rounded-t-xl text-md font-sans tracking-tight news-tabs focus:text-white focus:bg-current focus:font-semibold transition-all duration-500 ease-in-out transform-none text-gray-300 w-42"
          tabsData={[
            {
              name: "Milestones & Payments",
              textColor: "primary",
              component: <TimePaymentMilestone />,
            },
            {
              name: "Messages & Files",
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
export default ProjectDetailedMilestones;
