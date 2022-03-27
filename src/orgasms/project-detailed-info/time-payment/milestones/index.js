import React from "react";
import {
  RemainingMilestones,
  HeaderMilestones,
  AdditionalPayment,
  CompletedMilestones,
} from "../../..";
export default function TimePaymentMilestone(props) {
  return (
    <div className="bg-white md:p-8 p-4">
      <HeaderMilestones />
      <RemainingMilestones />
      <CompletedMilestones />
      <AdditionalPayment />
    </div>
  );
}
