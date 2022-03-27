import React from "react";
import { Typography } from "@material-ui/core";
import Proptype from "prop-types";

function LabelAtom(props) {
  const { value } = props;
  return (
    <Typography {...props}>
      {props.styleName || ""}
      {value}
    </Typography>
  );
}

LabelAtom.defaultProps = {
  color: "textPrimary",
  align: "left",
  display: "block",
  paragraph: false,
  variant: "inherit",
  classes: {},
  onClick: () => {},
};
LabelAtom.prototype = {
  onClick: Proptype.func,
  align: Proptype.oneOf(["inherit", "left", "center", "right", "justify"]),
  color: Proptype.oneOf([
    "initial",
    "inherit",
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary",
    "error",
  ]),
  variant: Proptype.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
    "srOnly",
    "inherit",
  ]),
  display: Proptype.oneOf(["initial", "block", "inline"]),
  paragraph: Proptype.bool,
  classes: Proptype.object,
};
export default LabelAtom;
