import React from "react";
import { Badge } from "@material-ui/core";
function Badges(props) {
  const {
    color,
    overlap,
    badgeContent,
    variant,
    className,
    src,
    imgClass,
    alt,
    vertical,
    horizontal,
    text,
  } = props;
  return (
    <div>
      <Badge
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        color={color}
        overlap={overlap}
        badgeContent={badgeContent}
        variant={variant}
        className={className}
      >
        <img src={src} className={imgClass} alt={alt} />
        {text}
      </Badge>
    </div>
  );
}
Badges.defaultProps = {
  color: "primary",
  overlap: "",
  badgeContent: "",
  variant: "dot",
  className: "",
  imgClass: "w-16 h-16",
  src: "/assets/images/bg.png",
};
export default Badges;
