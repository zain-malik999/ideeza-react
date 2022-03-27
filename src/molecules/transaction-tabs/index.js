import React from "react";
import { Tab, Tabs, TabPanel } from "atoms";
import { TwoLabels } from "..";
function TransactionTabs(props) {
  const { tabsData, tabsClasses, handleChange, tabClasses, index } = props;

  return (
    <div className={`w-full`}>
      <div className="md:flex justify-between w-full items-center">
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
        <div className="flex flex-col items-end">
          <TwoLabels
            mainClass="flex items-center space-x-4"
            value="Your balance:"
            value2="$50"
            labelClass="text-gray-300 text-lg tracking-tight font-sans"
            labelClass2="text-gray-300 text-lg tracking-tight font-sans"
          />
          <TwoLabels
            mainClass="flex items-center space-x-5 pt-1"
            value="Fixed price deposits (Not included in balance):"
            value2="$23"
            labelClass="text-gray-300 text-sm tracking-tight font-sans"
            labelClass2="text-current text-sm tracking-tight font-sans"
          />
          <TwoLabels
            mainClass="flex items-center space-x-2 pt-2"
            value="Paid Out:"
            value2="150$"
            labelClass="text-gray-600 text-md tracking-tight font-sans"
            labelClass2="text-gray-300 text-md tracking-tight font-sans"
          />
        </div>
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
TransactionTabs.defaultProps = {
  tabsClasses: "w-full",
  tabClasses: "border transform-none",
  textColor: "text-primary",
};
export default TransactionTabs;
