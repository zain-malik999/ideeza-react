import React from "react";
import { Button as ButtonAtom, CircularProgress } from "@material-ui/core";
import Proptype from "prop-types";
function Button(props) {
  const { value, iconStart, iconEnd, loading } = props;
  return (
    <ButtonAtom startIcon={iconStart} endIcon={iconEnd} {...props}>
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <CircularProgress color="inherit" size={22} />
        </div>
      ) : (
        value
      )}
    </ButtonAtom>
  );
}
Button.defaultProps = {
  color: "default",
  disabled: false,
  size: "medium",
  variant: "contained",
  classes: {},
  loading: false,
};
Button.prototype = {
  color: Proptype.oneOf(["default", "inherit", "primary"]),
  disabled: Proptype.bool,
  href: Proptype.string,
  size: Proptype.oneOf(["large", "medium", "small"]),
  variant: Proptype.oneOf(["contained", "outlined", "text"]),
  classes: Proptype.object,
  value: Proptype.string,
  iconStart: Proptype.node,
  iconEnd: Proptype.node,
  loading: Proptype.bool,
};
export default Button;
