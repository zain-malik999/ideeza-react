import React from "react";
import { Button } from "atoms";

function QuestionnaireTooltip() {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex">
          <Button
            value="Go back"
            classes={{
              root: `text-white bg-ideeza-100 capitalize p-2 pl-5 pr-5`,
            }}
          ></Button>
        </div>
        <Button
          value="Massege lawyer"
          classes={{
            root: `border border-solid border-gray-500 p-2 capitalize pl-5 pr-5`,
          }}
        />
      </div>
    </div>
  );
}
export default QuestionnaireTooltip;
