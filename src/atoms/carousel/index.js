import React from "react";
import Proptype from "prop-types";
// import Carousel from "react-material-ui-carousel";
function CarouselItem(props) {
  return <div>{/* <Carousel {...props}>{props.children}</Carousel> */}</div>;
}
CarouselItem.defaultProps = {
  className: "",
  animation: "slide",
  index: 0,
};
CarouselItem.prototype = {
  className: Proptype.string,
  autoPlay: Proptype.bool,
  stopAutoPlayOnHover: Proptype.bool,
  interval: Proptype.number,
  indicators: Proptype.bool,
  animation: Proptype.oneOf[("fade", "slide")],
  timeout: Proptype.number,
  swipe: Proptype.bool,
  navButtonsAlwaysVisible: Proptype.bool,
  navButtonsAlwaysInvisible: Proptype.bool,
  next: Proptype.func,
  prev: Proptype.func,
  onChange: Proptype.func,
  indicatorContainerProps: Proptype.object,
  activeIndicatorProps: Proptype.object,
  index: Proptype.number,
  fullHeightHover: Proptype.bool,
};
export default CarouselItem;
