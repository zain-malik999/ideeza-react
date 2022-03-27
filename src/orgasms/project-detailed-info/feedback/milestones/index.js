import React from "react";
import { Label, Button } from "atoms";
function FeedbackMilestones(props) {
  return (
    <div className="bg-white pt-16">
      <div className="flex flex-col items-center">
        <img src="/assets/images/feedback.png" className="mb-14" />
        <Label
          classes={{ root: "text-lg tracking-tight font-sans font-semibold " }}
          value="This contract is not yet eligible for feedback"
        />
        <Label
          classes={{ root: "text-sm tracking-tight font-sans mt-3" }}
          value="You will be able to leave feedback after the contract has been active for 30 days."
        />
      </div>
      <div className="flex justify-end mt-14 p-5">
        <Button
          value="Give Feedback"
          classes={{
            root:
              "bg-gray-1000 text-gray-900 text-sm font-sans capitalize px-6 py-2 text-md tracking-tight",
          }}
        />
      </div>
    </div>
  );
}
export default FeedbackMilestones;
