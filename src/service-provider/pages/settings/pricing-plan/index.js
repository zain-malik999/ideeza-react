import React from "react";
import { Label, Button } from "atoms";
import { ServicePricingPlan } from "orgasms";
function PricingPlan(props) {
  return (
    <div className="xl:w-10/12 mx-auto">
      <div className="flex items-center justify-center space-x-2">
        <Button
          value="Settings"
          classes={{
            root: `text-white bg-ideeza-100 w-26 py-1 font-light tracking-tight font-sans text-sm transform-none`,
          }}
        />
        <Button
          value="Menu"
          classes={{
            root: `text-gray-300 bg-white border border-solid border-gray-750 w-26 py-1 font-light tracking-tight font-sans text-sm transform-none`,
          }}
        />
      </div>
      <Label
        value="Upgrade Your Pricing Plan"
        className="text-current md:text-2xl text-xl tracking-tight mt-4 lg:-mt-5 font-sans font-semibold border-b border-gray-750 pb-1"
      />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-5">
        <ServicePricingPlan
          src="/assets/images/rocket.png"
          ImgClass="w-9"
          value="ESSENTIAL"
          price="29"
          btnValue="Currently Activated"
          value1="3 Different Products"
          value2="1 Agent"
          value3="100MB File Upload"
          value4="1 Month Free Trial"
        />
        <ServicePricingPlan
          src="/assets/images/premium.png"
          value="PREMIUM"
          price="59"
          btnValue="Subscribe"
          btnClass="bg-current text-white"
          value1="15 Different Products"
          value2="5 Agent"
          value3="Unlimited File Upload"
          value4="1 Month Free Trial"
        />
        <ServicePricingPlan
          src="/assets/images/enterprise.png"
          value="ENTERPRISE"
          price="199"
          btnValue="Subscribe"
          btnClass="bg-purple-500 text-white"
          value1="Unlimited Products"
          value2="20 Agents"
          value3="Enterprise Direct Support"
          value4="View Competitor Prices"
        />
      </div>
    </div>
  );
}
export default PricingPlan;
