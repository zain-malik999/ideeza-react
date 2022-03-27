import React from "react";
import { Label } from "atoms";
function Success(props) {
  return (
    <div className="w-full flex items-center flex-col justify-center bg-white add-success">
      <img src="/assets/images/success-add.png" alt="" />
      <Label
        classes={{ root: "font-sans mt-5 font-semibold " }}
        variant="h4"
        value={`Congratulation!`}
      />{" "}
      <Label
        classes={{ root: "font-sans mt-1" }}
        variant="h5"
        value={`You ${props?.value} is added`}
      />
    </div>
  );
}
export default Success;
