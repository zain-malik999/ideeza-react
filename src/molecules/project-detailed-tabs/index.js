import React from "react";
import { Tab, Tabs, TabPanel, Popover } from "atoms";
import { Icon_Label } from "..";
import { IconButton } from "@material-ui/core";
import { MdMoreHoriz } from "react-icons/md";
import { GiPin } from "react-icons/gi";
import { TiGroup } from "react-icons/ti";
import { RiUser3Fill } from "react-icons/ri";
function ProjectDetailedTabs(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const id = open ? "simple-popover" : undefined;
  const open = Boolean(anchorEl);
  const { tabsData, tabsClasses, handleChange, tabClasses, index } = props;

  return (
    <div className={`w-full`}>
      <div className="flex justify-between w-full items-center border-b border-gray-750">
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
        <div className="w-full">
          <IconButton
            className="outline-none p-2"
            onClick={handleClick}
            id={id}
          >
            <MdMoreHoriz className="text-3xl font-sans cursor-pointer text-gray-600" />
          </IconButton>
          <Popover
            open={open}
            handleClick={handleClick}
            onClose={handleClose}
            id={id}
            anchorEl={anchorEl}
          >
            <div className="py-2 w-64">
              <Icon_Label
                mainClass="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                tooltipProps={{ open: false }}
                labelValue="View original job posting"
                iconContanerClass="text-lg w-6"
                lableClass={{
                  root: `text-gray-989 tracking-tighter text-sm font-sans ml-1`,
                }}
                iconComponent={
                  <GiPin className="text-gray-300 text-2xl pt-1" />
                }
              />
              <Icon_Label
                mainClass="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                tooltipProps={{ open: false }}
                labelValue="View original proposals"
                iconContanerClass="text-lg w-6"
                lableClass={{
                  root: `text-gray-989 tracking-tighter text-sm font-sans ml-1`,
                }}
                iconComponent={
                  <TiGroup className="text-gray-300 text-2xl pt-1" />
                }
              />
              <Icon_Label
                mainClass="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                tooltipProps={{ open: false }}
                labelValue="Thomas Hellies profile"
                iconContanerClass="text-lg w-6"
                lableClass={{
                  root: `text-gray-989 tracking-tighter text-sm font-sans ml-1`,
                }}
                iconComponent={
                  <RiUser3Fill className="text-gray-300 text-xl" />
                }
              />
              <Icon_Label
                mainClass="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-start"
                tooltipProps={{ open: false }}
                labelValue="Request a refund"
                iconContanerClass="text-lg w-6"
                lableClass={{
                  root: `text-gray-989 flex flex-col tracking-tighter text-sm font-sans ml-1`,
                }}
                iconComponent={
                  <img src="/assets/images/refund.svg" className="w-4" />
                }
              />
              <Icon_Label
                mainClass="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-start"
                tooltipProps={{ open: false }}
                labelValue="Rehire Thomas Hellies"
                iconContanerClass="text-lg w-6"
                lableClass={{
                  root: `text-gray-989 flex flex-col tracking-tighter text-sm font-sans ml-1`,
                }}
                iconComponent={
                  <img
                    src="/assets/images/cyber-security.svg"
                    className="w-4"
                  />
                }
              />
              <Icon_Label
                mainClass="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-start"
                tooltipProps={{ open: false }}
                labelValue="Request Public Feedback"
                iconContanerClass="text-lg w-6"
                lableClass={{
                  root: `text-gray-989 flex flex-col tracking-tighter text-sm font-sans ml-1`,
                }}
                iconComponent={
                  <img src="/assets/images/request.svg" className="w-5" />
                }
              />
            </div>
          </Popover>
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
ProjectDetailedTabs.defaultProps = {
  tabsClasses: "w-full",
  tabClasses: "border transform-none",
  textColor: "text-primary",
};
export default ProjectDetailedTabs;
