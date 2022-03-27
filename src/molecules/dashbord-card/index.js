import React from "react";
import { Label } from "atoms";
import Proptype from "prop-types";
function DashboardCard(props) {
  const { className, value, text, iconSet } = props;
  return (
    <>
      <div
        className={`font-sans pt-1 pb-2 border border-transparent rounded-sm flex justify-around transition-all duration-500 ease-in-out hover:shadow-md hover:border-ideeza-100 hover:bg-white ${className}`}
      >
        <div className={`pt-2 md:pr-2`}>{iconSet}</div>
        <div className="">
          <Label
            className="md:text-4xl text-2xl font-normal mb-0"
            value={value}
          />
          <Label
            className="text-sm tracking-tight text-blue-100 font-medium pt-1 mb-0"
            value={text}
          />
        </div>
      </div>
    </>
  );
}

DashboardCard.defaultProps = {
  color: "#FB00C7",
  size: "25",
};
DashboardCard.prototype = {
  color: Proptype.string,
  size: Proptype.string,
};

export default DashboardCard;
