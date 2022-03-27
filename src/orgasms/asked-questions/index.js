import React from "react";
import { Label } from "atoms";
import { Questions } from "molecules";
export default function AskedQuestions(props) {
  const { imgDiv, labelClass } = props;
  return (
    <div className="pt-10">
      <Label
        value="Frequently Asked Questions"
        classes={{
          root: `text-xl font-sans border-b border-gray-750 pb-2 mb-3 ${labelClass}`,
        }}
      />
      <div className="grid md:grid-cols-3 grid-col-1 gap-12 lg:gap-x-14 bg-white border border-transparent rounded-md shadow-md pt-4 px-3 pb-6">
        <Questions
          mainClass="xl:pr-14 pr-5"
          heading="Shipping"
          firstQuestion="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio?"
          secondQuestion="Quisque volutpat mattis eros. Nullam malesuada erat ut turpis?"
          thirdQuestion="Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede?"
        />
        <Questions
          mainClass="xl:pr-14 pr-5"
          heading="Privacy & availablity"
          firstQuestion="How do I set a price of my product?"
          secondQuestion="How do I make my products available for others?"
          thirdQuestion="How I can cancel payment?"
        />

        <Questions
          mainClass="xl:pr-14 pr-5"
          heading="Top Questions"
          firstQuestion="How do I cancel production"
          secondQuestion="How do I earn from ideeza products?"
          thirdQuestion="Why isn't review appearing on my profile?"
        />
        <Questions
          mainClass="xl:pr-14 pr-5"
          // mainClass="pt-6"
          heading="Popular Questions"
          firstQuestion="How do taxes work for sellers?"
          secondQuestion="How do I add electronics to my product?"
          thirdQuestion="When will I get my product?"
        />

        <Questions
          mainClass="xl:pr-14 pr-5"
          heading="Your payout status"
          firstQuestion="When will I get payout?"
          secondQuestion="Where do I find my payout information?"
          thirdQuestion="How do I connect Paypal to recieve payout?"
        />
        <Questions
          mainClass="xl:pr-14 pr-5"
          heading="Electronics "
          firstQuestion="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio?"
          secondQuestion="Quisque volutpat mattis eros. Nullam malesuada erat ut turpis?"
          thirdQuestion="Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede?"
        />
      </div>
    </div>
  );
}
AskedQuestions.defaultProps = {
  labelClass: "text-current font-extrabold tracking-tight",
};
