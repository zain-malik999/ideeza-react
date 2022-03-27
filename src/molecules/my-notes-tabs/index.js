import React from "react";
import { Tab, Tabs, TabPanel, Label } from "atoms";
function MyNotesTabs(props) {
  const {
    tabsData,
    tabsClasses,
    handleChange,
    tabClasses,
    index,
    mainClass,
  } = props;
  return (
    <div className={`w-full ${mainClass}`}>
      <div className="flex justify-between w-full items-center border-b border-gray-750">
        <div className="">
          <Label
            value="My Notes"
            classes={{ root: "text-xl text-ideeza-100 font-semibold" }}
          />
        </div>
        <Tabs
          value={index}
          onChange={handleChange}
          classes={{ root: `${tabsClasses}` }}
          aria-label="simple tabs example"
        >
          {tabsData.map((value, key) => {
            return (
              <Tab
                classes={{ root: `${tabClasses} outline-none` }}
                label={value.name}
                index={key}
              />
            );
          })}
        </Tabs>
      </div>
      {tabsData.map((value, key) => {
        return (
          <TabPanel value={index} index={key}>
            {value.component}
          </TabPanel>
        );
      })}
    </div>
  );
}
MyNotesTabs.defaultProps = {
  tabsClasses: "w-full",
  tabClasses: "border transform-none",
  textColor: "text-primary",
};
export default MyNotesTabs;
