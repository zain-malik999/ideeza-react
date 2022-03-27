import React from "react";
import { MenuItem } from "atoms";
import { MenuList as Menu } from "@material-ui/core";
import Proptype from "prop-types";
function MenuList(props) {
  const { list, location } = props;
  return (
    <Menu className="mx-4 pt-5">
      {list?.map((v, k) => {
        return (
          <MenuItem
            key={k * 10}
            value={v?.name}
            icon={v?.icon}
            click={v.click}
            route={v?.route?.includes(location?.pathname)}
          />
        );
      })}
    </Menu>
  );
}
MenuList.prototype = {
  list: Proptype.array,
};
MenuList.defaultProps = {
  list: [1, 2, 3, 4, 5],
};
export default MenuList;
