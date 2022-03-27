import React from "react";
import { IconButton, Drawer as Drawers } from "@material-ui/core";
import { Menu } from "molecules";
import { IoIosMenu } from "react-icons/io";
import { useStyles } from "./style";
function Drawer({ location, list, isSidebar, children, open, toggle }) {
  const classes = useStyles();
  return (
    <div>
      <Drawers
        variant="persistent"
        anchor="left"
        open={open}
        className={`${classes.drawer} border-none`}
        classes={{
          paper: classes.drawerPaper,
          paperAnchorDockedLeft: "border-none border-0",
        }}
      >
        <div
          className={
            (classes.drawerHeader,
            "flex items-center bg-white justify-between px-5 py-3")
          }
        >
          <img
            src="/assets/images/logo/logo.png"
            alt=""
            className="md:h-10 md:w-20 h-8 w-16"
          />
          <IconButton onClick={toggle} className="p-0 focus:outline-none">
            <IoIosMenu className="border rounded-full md:p-2 p-1 text-3xl" />
          </IconButton>
        </div>
        <div className="w-100">
          {isSidebar === true ? (
            children
          ) : (
            <Menu location={location} list={list} />
          )}
        </div>
      </Drawers>
    </div>
  );
}
export default Drawer;
