import React from "react";
import { Label } from "atoms";
import { Header, Pricing as PricingCard } from "orgasms";
function Pricing() {
  return (
    <div>
      <div className="bg-header">
        <Header />
      </div>
      <div className="py-16">
        <img
          src="/assets/images/pricing_robort.png"
          className="mx-auto mb-6"
          alt=""
        />
        <Label
          value="Pricing"
          classes={{
            root: `text-gray-300 text-center font-sans text-2xl`,
          }}
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 gap-y-16 lg:gap-x-8 xl:gap-x-2 xl:px-10 lg:px-6 pb-20">
        <PricingCard
          value1Class="xl:text-xl text-lg tracking-wide text-gray-300"
          src="/assets/images/pricing2.png"
          mainClass="bg-white shadow-xl"
          heading="hidden"
          value1="EXPLORER"
          value2="FOR ANYONE"
          value3="Electronics"
          value4="Code"
          value5="Cover"
          value6="Social"
          value7="10 active projects"
          value8="In platform purchases"
          consult="Consult support"
          value9="Public"
          value10="Free"
          //   value11="$399 X 12 = $4788"
          lastBtnClass="hidden"
          btnGroupClass="flex-col-reverse pb-9"
          addContainer="hidden"
          listContainer="space-y-2 mx-4"
        />
        <PricingCard
          listContainer="bg-white grid grid-cols-2 gap-x-4 gap-y-1 xl:pl-3 mx-6 rounded"
          value1Class="xl:text-xl text-lg tracking-wide text-gray-300"
          src="/assets/images/project-management.png"
          value="Most Popular"
          value1="CREATOR"
          value2="Maker"
          value3="Electronics"
          value4="Code"
          value5="Cover"
          value6="Social"
          value7="1 active project"
          value8="In platform purchases"
          value9="Private"
          value10="$799"
          value11="$69 X 12 = $828"
          consultClass="hidden"
        />
        <PricingCard
          listContainer="bg-white grid grid-cols-2 gap-x-4 gap-y-1 xl:pl-3 mx-6 rounded"
          value1Class="xl:text-xl text-lg tracking-wide text-gray-300"
          src="/assets/images/pricing2.png"
          mainClass="bg-purple-500 bg-opacity-10"
          heading="hidden"
          value1="INNOVATOR"
          value2="SERIAL ENTERPRENUAR"
          value3="Electronics"
          value4="Code"
          value5="Cover"
          value6="Social"
          value7="10 active projects"
          value8="In platform purchases"
          consult="Consult support"
          value9="Private"
          value10="$799"
          value11="$399 X 12 = $4788"
          btnGroupClass="flex-col-reverse"
          lastBtnClass="rounded-t-2xl"
        />
        <PricingCard
          listContainer="bg-white grid grid-cols-2 gap-x-4 gap-y-1 xl:pl-3 mx-6 rounded"
          value1Class="xl:text-xl text-lg tracking-wide text-gray-300"
          src="/assets/images/pricing3.png"
          mainClass="bg-yellow-500"
          heading="hidden"
          value1="TEAM"
          value2="SME ACCOUNT"
          value3="Electronics"
          value4="Code"
          value5="Cover"
          value6="Social"
          value7="10 active projects per account (additional teammate $99/month)"
          value8="In platform purchases"
          consult="Consult support"
          value9="Private"
          value10="$799"
          value11="$799 X 12 = $11988"
          value7Class="flex items-start"
          value7IconClass="mt-1"
        />
      </div>
    </div>
  );
}

export default Pricing;
