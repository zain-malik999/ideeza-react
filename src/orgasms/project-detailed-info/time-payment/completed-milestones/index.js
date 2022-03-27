import React, { useState } from "react";
import { Label } from "atoms";
import { FaChevronDown } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
function CompletedMilestones(props) {
  const [show, setShow] = useState(true);
  const toggeShow = () => {
    setShow(!show);
  };
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <Label
          value="Completd Milestones ( 1 )"
          classes={{
            root:
              "text-lg font-sans tracking-tighter font-semibold text-current",
          }}
        />
        {show === true ? (
          <RiArrowUpSLine
            className="text-3xl text-ideeza-100 ml-3"
            onClick={toggeShow}
          />
        ) : (
          <FaChevronDown
            className="text-xl text-ideeza-100"
            onClick={toggeShow}
          />
        )}
      </div>
      {show === true ? (
        <div className="flex space-x-8 border-b border-gray-100 pb-6 pt-3">
          <Label
            value="1"
            classes={{ root: "text-md font-sans text-gray-300 font-semibold" }}
          />
          <div>
            <Label
              value="12 next pages"
              classes={{
                root: "text-md text-gray-300 font-semibold tracking-tight",
              }}
            />
            <Label
              value="$90.00 (Not founded)"
              classes={{ root: "text-sm tracking-tight text-gray-900 pt-4" }}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default CompletedMilestones;
