import React from "react";
import { Tab, Tabs, TabPanel, Label } from "atoms";
function AgreementTabs(props) {
  const {
    tabsData,
    tabsClasses,
    handleChange,
    tabClasses,
    index,
    mainClass,
  } = props;
  return (
    <div className={`w-full grid md:grid-cols-8 pt-14`}>
      <div className="lg:col-span-2 md:col-span-3 bg-gray-100 p-4 py-5 rounded-lg">
        <Tabs
          value={index}
          onChange={handleChange}
          classes={{
            root: `${tabsClasses} flex flex-col h-full agrement_tabs`,
          }}
          aria-label="simple tabs example"
        >
          {tabsData.map((value, key) => {
            return (
              <Tab
                classes={{
                  root: `w-full outline-none transform-none font-sans text-lg tracking-tight`,
                }}
                label={value.name}
                index={key}
              />
            );
          })}
        </Tabs>
      </div>
      {tabsData.map((value, key) => {
        return (
          <TabPanel
            className="w-full lg:col-span-6 md:col-span-5 md:p-3 py-5 md:px-5 max-h-70vh overflow-y-auto pr-3"
            value={index}
            index={key}
          >
            {value.component}
          </TabPanel>
        );
      })}
    </div>
  );
}
AgreementTabs.defaultProps = {
  tabsClasses: "w-full",
  tabClasses: "border transform-none",
  textColor: "text-primary",
};
export default AgreementTabs;
