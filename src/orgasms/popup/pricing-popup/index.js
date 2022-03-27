import React from "react";
import { Modal, Label } from "atoms";
import { Pricing } from "../..";

function PricingPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="lg"
        close={toggleOpen}
        header={
          <div className="pt-12">
            <Label
              value="Pricing"
              classes={{
                root: `text-ideeza-100 text-center tracking-tight font-sans text-2xl font-bold`,
              }}
            />
            <Label
              value="Choose the pricing option"
              classes={{
                root: `text-center text-gray-300 tracking-tight font-sans text-base mt-3`,
              }}
            />
          </div>
        }
        content={
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 gap-y-16 lg:gap-x-8 xl:gap-x-28 xl:px-10 lg:px-6 pb-20">
            <Pricing
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
            <Pricing
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
            <Pricing
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
        }
        actions={<></>}
        open={open}
      />
    </div>
  );
}
export default PricingPopup;
