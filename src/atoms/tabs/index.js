import React from "react";
import { Tabs as TabsItem } from "@material-ui/core";
import Proptype from "prop-types";
function Tabs(props) {
  return (
    <div>
      <TabsItem {...props}>{props.children}</TabsItem>
    </div>
  );
}
Tabs.prototype = {
  onChange: Proptype.func,
  classes: Proptype.object,
  textColor: Proptype.oneOf(["inherir", "secondary", "primary"]),
  variant: Proptype.oneOf(["fullWidth", "scrollable", "standard"]),
  value: Proptype.any,
  centered: Proptype.bool,
};
export default Tabs;
