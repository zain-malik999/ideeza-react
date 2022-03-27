import React, { useState, useEffect } from "react";
import { AppBar, IconButton, Toolbar, CssBaseline } from "@material-ui/core";
import clsx from "clsx";
import { IoIosMenu, IoMdNotificationsOutline } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStyles } from "./style";
import { Avatar, Label, Dropdown } from "atoms";
import { MdKeyboardArrowDown } from "react-icons/md";
function Header({ open, toggle, user }) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(
          classes.appBar,
          {
            [classes.appBarShift]: open,
          },
          "shadow-none"
        )}
      >
        <Toolbar className="bg-white header-bg flex justify-between">
          <div className="flex items-center justify-between md:w-48 w-32">
            <img
              src={`/assets/images/logo/logo.png`}
              alt=""
              className={clsx(
                classes.menuButton,
                {
                  [classes.hide]: open,
                },
                "md:h-10 md:w-20 h-8 w-16"
              )}
            />
            <IconButton
              onClick={toggle}
              className={clsx(
                {
                  "hidden ": open,
                },
                "p-0 focus:outline-none"
              )}
            >
              <IoIosMenu className="border text-gray-135 rounded-full md:p-2 p-1 text-3xl" />
            </IconButton>
          </div>
          <div className="flex items-center justify-end">
            <IconButton className="p-1 text-white focus:outline-none">
              <BsQuestionCircle className="" size="20" />
            </IconButton>
            <IconButton className="p-1 text-white focus:outline-none">
              <AiOutlineShoppingCart className="" size="20" />
            </IconButton>
            <IconButton className="p-1 text-white focus:outline-none mr-1">
              <IoMdNotificationsOutline className="" size="20" />
            </IconButton>
            {user ? (
              <>
                <Avatar
                  className="capitalize w-7 h-7 text-sm"
                  value={user?.first_name[0]}
                  src={user?.profile_image}
                />
                <Label
                  classes={{
                    root:
                      "capitalize text-white text-sm tracking-tight whitespace-nowrap w-16 truncate md:w-auto font-sans ml-1",
                  }}
                  value={`${user?.first_name} ${user?.last_name}`}
                />
                <Dropdown
                  className="p-1"
                  icons={
                    <MdKeyboardArrowDown className={`text-lg text-gray-500`} />
                  }
                  itemsClasses={{
                    root:
                      "font-sans text-sm px-4 w-36 py-1 tracking-tight font-sans hover:text-current text-gray-300",
                  }}
                  options={[
                    {
                      name: `Profile`,
                      value: "Profile",
                    },
                    {
                      name: `Log out`,
                      value: "Log out",
                    },
                  ]}
                />
              </>
            ) : null}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default React.memo(Header);
