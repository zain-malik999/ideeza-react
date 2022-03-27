import React from "react";
import { MenuItem as Item } from "@material-ui/core";
import { Label } from "../index";
import Proptype from "prop-types";
function MenuItem(props) {
  const { icon, value, route, click } = props;
  return (
    <Item
      onClick={click}
      className={`${
        route
          ? "text-white bg-current"
          : "text-gray-600 menu-item hover:text-white hover:bg-current"
      }  py-3 rounded-md my-0.5`}
    >
      <img src={icon} className={`w-5 ${route ? "bright" : ""}`} />
      <Label
        classes={{
          root: `${
            route ? "text-white" : "text-gray-300"
          }  text-sm ml-3 menu-label tracking-tight font-sans`,
        }}
        value={value}
      />
    </Item>
  );
}
MenuItem.prototype = {
  icon: Proptype.element,
  value: Proptype.string,
  click: Proptype.func,
};
MenuItem.defaultProps = {
  click: () => {},
};
export default MenuItem;
