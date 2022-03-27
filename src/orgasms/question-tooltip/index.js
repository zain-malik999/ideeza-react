import React from "react";
import { Label, Input } from "atoms";

function QuestionTooltip(props) {
  const { value } = props;
  return (
    <div className="p-4">
      <div className="flex space-x-6 ">
        <Label {...props} value={value} classes={{ root: `text-lg` }} />
        <img src="/assets/images/Group 2914.png" alt="question" />
      </div>
      <Input rows="5" multiline="true" className={{ root: `mt-3` }} />
    </div>
  );
}

export default QuestionTooltip;
