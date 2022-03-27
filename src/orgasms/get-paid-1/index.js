import React from "react";
import { Label } from "atoms";
import { GrFormClose } from "react-icons/gr";

function GetPaid1() {
  return (
    <div className="p-4 px-5 space-x-5 bg-white rounded shadow-md flex items-start">
      <img src="/assets/images/Group 4338.png" alt="close" className="w-9" />
      <div className="flex items-center">
        <Label
          classes={{ root: "text-sm font-sans text-gray-300" }}
          value={
            <>
              In order to withdraw earnings, please complete a{" "}
              <span className="text-ideeza-100 font-semibold">
                W8BEN Foreign status verification.{" "}
              </span>
              If you are a U.S. tax payer living outside of U.S, please complete
              a <span className="text-ideeza-100 font-semibold">W9 form. </span>
            </>
          }
        />
        <GrFormClose className="md:text-6xl text-8xl text-gray-300" />
      </div>
    </div>
  );
}
export default GetPaid1;
