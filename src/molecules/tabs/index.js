import React from "react";
import { Tab, Tabs, TabPanel } from "atoms";
import { AppBar } from "@material-ui/core";
function TabsMolecule(props) {
  const {
    tabsData,
    tabsClasses,
    handleChange,
    tabClasses,
    index,
    icon,
    selected,
    indicatorColor,
  } = props;

  return (
    <div className={`w-full`}>
      <AppBar
        className="bg-transparent"
        position="static"
        color="transparent"
        elevation={0}
      >
        <Tabs
          // for underline of tabs indicatorColor="white"
          variant="fullWidth"
          value={index}
          indicatorColor={indicatorColor}
          onChange={handleChange}
          classes={{ root: `${tabsClasses}` }}
          aria-label="simple tabs example"
        >
          {tabsData.map((value, key) => {
            return (
              <Tab
                classes={{
                  root: `${tabClasses} outline-none w-full`,
                  selected: `${selected} text-current border-ideeza-100 border-solid`,
                }}
                label={value.name}
                {...a11yProps(key)}
                icon={icon}
              ></Tab>
            );
          })}
        </Tabs>
      </AppBar>
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
TabsMolecule.defaultProps = {
  tabsClasses: "w-full",
  tabClasses: "border transform-none whitespace-nowrap tracking-tight py-3",
  textColor: "text-primary",
  indicatorColor: "white",
  selected: "border-b-2",
};
export default React.memo(TabsMolecule);
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
