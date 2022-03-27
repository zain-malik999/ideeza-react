import React from "react";
import { Label, Button } from "atoms";
import { CheckboxFields } from "molecules";
function WorkDescriptionBody(props) {
  const {
    mainClass,
    value1,
    class1,
    value2,
    value3,
    btnValue1,
    btnValue2,
    btnValue3,
    btnValue4,
    btnClass1,
    checkboxValue,
    checkboxClass,
  } = props;
  return (
    <div className={mainClass}>
      <div className="md:w-4/5 w-full mx-auto">
        <div className="shadow-full rounded-xl md:p-6 md:pr-4 p-4">
          <Label
            value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellendus excepturi? Blanditiis maxime quos impedit, a cupiditate mollitia quo quod harum aliquid, ea magni assumenda aspernatur illo id nesciunt velit!"
            classes={{ root: `${class1}` }}
          />
          <Label
            value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellendus excepturi? Blanditiis maxime quos impedit, a cupiditate mollitia quo quod harum aliquid, ea magni assumenda aspernatur illo id nesciunt velit!"
            classes={{ root: `${class1} pt-4` }}
          />
          <Label
            value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellendus excepturi? Blanditiis maxime quos impedit, a cupiditate mollitia quo quod harum aliquid, ea magni assumenda aspernatur illo id nesciunt velit!"
            classes={{ root: `${class1} pt-8` }}
          />
        </div>
        <div className="flex mt-5 space-x-4">
          <Button
            value="Attach File"
            className={`bg-purple-400 ${btnClass1}`}
          />
          <Button value="Up to 25 mb" className={`bg-current ${btnClass1}`} />
        </div>
        <CheckboxFields
          value={
            <>
              Yes, I understand and agree to the
              <span className="text-current font-semibold">
                {" "}
                ideeza Terms of Service
              </span>
              , including{" "}
              <span className="text-current font-semibold">
                User Agreement
              </span>{" "}
              and{" "}
              <span className="text-current font-semibold">
                privacy Policy.
              </span>
            </>
          }
          mainClass="flex items-start mt-28"
          labelClass="text-gray-890 tracking-tight font-sans text-md pt-1 lg:pr-20"
        />
        <div className="flex space-x-4 mt-12">
          <Button
            value="Hire Artem Lumeio"
            className={`bg-purple-400 px-6 ${btnClass1}`}
          />
          <Button
            value="Cancel"
            className={`${btnClass1} bg-white text-gray-300 border px-6 border-solid border-gray-770 rounded`}
          />
        </div>
      </div>
    </div>
  );
}
WorkDescriptionBody.defaultProps = {
  mainClass: "flex items-center justify-center flex-col p-3 md:py-10 py-7",
  class1: "text-gray-825 text-md tracking-tight font-sans",
  btnClass1:
    "px-4 py-2 md:text-md text-sm tracking-tight font-sans text-white transform-none",
  checkboxClass: "text-gray-890 font-sans text-sm",
};
export default WorkDescriptionBody;
