import React from "react";
import { Label, Button } from "atoms";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Confirmation({
  src,
  value,
  btnValue,
  iconEnd,
  btnClass,
  lableClass,
  lableClass2,
}) {
  return (
    <div className="bg-white shadow rounded-md p-7 py-20 flex flex-col items-center">
      <img src={src} className="w-24 mb-4" alt="" />
      <Label value="Congratulations!" className={lableClass} />
      <Label value={value} className={lableClass2} />
      <Button
        value={btnValue}
        iconEnd={iconEnd}
        classes={{
          root: `${btnClass}`,
        }}
      />
    </div>
  );
}
Confirmation.defaultProps = {
  src: "/assets/images/confirmation.png",
  value: "Your order is accepted.",
  lableClass: "text-2xl text-center font-bold text-current font-sans",
  lableClass2: "text-2xl text-center font-bold text-gray-300 font-sans",
  btnValue: "Track Order",
  iconEnd: <IoArrowForwardCircleOutline className="text-lg" />,
  btnClass:
    "text-white bg-current mt-8 mx-auto border border-solid border-current tracking-tight font-sans capitalize p-2 px-4 text-md",
};
export default Confirmation;
