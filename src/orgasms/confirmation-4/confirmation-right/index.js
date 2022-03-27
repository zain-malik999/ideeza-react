import React from "react";
import { TwoLabels } from "molecules";
function ConfirmationRight(props) {
  const { mainClass } = props;
  return (
    <div className={mainClass}>
      <div className="max-h-screen overflow-y-auto space-y-10">
        <TwoLabels
          mainClass="flex flex-col space-y-2"
          value="How do hourly contracts work?"
          value2="Before work begings, agree on certain hourly rate weekly limit (if appropriate with freelancer. The Work Diary captures snapshots of your freelancer's screnn every 10 minutes, helping to verify that work has been completed as invoiced."
          labelClass="text-black-100 text-base tracking-tight font-sans font-bold leading-5"
          labelClass2="text-gray-825 text-md tracking-tight font-sans leading-8 pr-7"
        />
        <img
          src="/assets/images/hire-right-img.png"
          className="w-full pr-7 my-14"
        />
        <TwoLabels
          mainClass="flex flex-col space-y-2"
          value="How do I pay?"
          value2="We automatically charge your billing method each each Monday for any hours your freelancer logged and invoiced during the prior week, subject to a 3% payment"
          labelClass="text-black-100 text-base tracking-tight font-sans font-bold leading-5"
          labelClass2="text-gray-825 text-md tracking-tight font-sans leading-8 pr-7"
        />
        <TwoLabels
          mainClass="flex flex-col space-y-2"
          value="What if there is a problem?"
          value2="You're protected by Ideeza Payment Protection, which assures on all eligible contracts that you pay only for work you've approved. If an issue ever should arise, our payment protection and dispute resolution programs will help fix the solution."
          labelClass="text-black-100 text-base tracking-tight font-sans font-bold leading-5"
          labelClass2="text-gray-825 text-md tracking-tight font-sans leading-8 pr-7"
        />
        <TwoLabels
          mainClass="flex flex-col space-y-2"
          value="How does Ideeza make money?"
          value2="Freelancer pay Ideeza a variable service fee, taken as a percentage of their earnings"
          labelClass="text-black-100 text-base tracking-tight font-sans font-bold leading-5"
          labelClass2="text-gray-825 text-md tracking-tight font-sans leading-8 pr-7"
        />
      </div>
    </div>
  );
}
ConfirmationRight.defaultProps = {
  class1: "text-sm font-sans font-semibold text-black-100",
  class2: "font-thin font-sans text-skm text-gray-825 pt-2 pr-5",
  // imgclass: "pt-20 pb-14 pr-8 pl-2",
  value1: "Artem Lumiov",
  value2: "Related Job Listing",
  value3: "are you Vue.js exper??",
  value4: " Contract Tilte",
  value5: "are you Vue,Js exper?",
};
export default ConfirmationRight;
