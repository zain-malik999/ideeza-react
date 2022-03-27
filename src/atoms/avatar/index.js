import React from "react";
import Proptype from "prop-types";
import { Avatar } from "@material-ui/core";
function AvatarAtom(props) {
  return (
    <Avatar {...props} alt={props.alt} src={props.src}>
      {props.value}
    </Avatar>
  );
}

AvatarAtom.defaultProps = {
  variant: "circle",
  classes: () => {},
};
AvatarAtom.propType = {
  variant: Proptype.oneOf(["circle", "circular", "rounded", "square"]),
  src: Proptype.string,
  sizes: Proptype.string,
  alt: Proptype.string,
};
export default AvatarAtom;
