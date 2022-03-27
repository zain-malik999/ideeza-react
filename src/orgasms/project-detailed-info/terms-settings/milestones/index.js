import React from "react";
import { Label } from "atoms";
import { Icon_Label, TwoLabels } from "molecules";
function MilestoneTermsSettings() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-4 p-4 py-6 bg-white">
      <div className="col-span-2 pl-6 lg:pr-0 pr-6">
        <Label
          value="Contact info"
          classes={{
            root: "text-lg tracking-tight text-ideeza-100 font-sans font-bold",
          }}
        />
        <TwoLabels
          mainClass="grid grid-cols-2 mt-4"
          value="Start Date"
          value2="October 27,2020"
          labelClass="text-sm tracking-tight text-gray-300 font-sans"
          labelClass2="text-sm tracking-tight text-gray-300 font-sans"
        />
        <Label
          value="View history of contract changes"
          classes={{
            root: "text-sm tracking-tight mt-3 text-ideeza-100 font-sans",
          }}
        />
        <div className="border-t border-gray-650 mt-6 pt-7 space-y-5">
          <TwoLabels
            mainClass="grid grid-cols-2"
            value="Hired By"
            value2="Jone Hay"
            labelClass="text-sm tracking-tight text-gray-300 font-sans"
            labelClass2="text-sm tracking-tight text-gray-300 font-sans"
          />
          <TwoLabels
            mainClass="grid grid-cols-2"
            value="Contract Persons"
            value2="Jone Hey"
            labelClass="text-sm tracking-tight text-gray-300 font-sans"
            labelClass2="text-sm tracking-tight text-ideeza-100 font-sans"
          />
          <TwoLabels
            mainClass="grid grid-cols-2"
            value="Additional Terms"
            value2="Escrew instructions"
            labelClass="text-sm tracking-tight text-gray-300 font-sans"
            labelClass2="text-sm tracking-tight text-ideeza-100 font-sans"
          />
          <TwoLabels
            mainClass="grid grid-cols-2"
            value="Contact ID"
            value2="25788893"
            labelClass="text-sm tracking-tight text-gray-300 font-sans"
            labelClass2="text-sm tracking-tight text-gray-300 font-sans"
          />
        </div>
      </div>
      <div className="col-span-1 bg-gray-375 px-10 py-5 rounded-lg h-60vh">
        <div className="md:px-8 px-0">
          <Label
            value="Description of Work"
            classes={{
              root:
                "text-lg tracking-tight text-ideeza-100 font-sans font-bold",
            }}
          />
          <Label
            value="Hi"
            classes={{
              root: "text-md tracking-tight text-gray-300 font-sans mt-6",
            }}
          />
          <Label
            value="You need to translate our paten and all it's documents.."
            classes={{
              root: "text-md tracking-tight text-gray-300 font-sans ",
            }}
          />
          <Label
            value="File1__pdf"
            classes={{
              root: "text-md tracking-tight text-ideeza-100 font-sans mt-6",
            }}
          />
          <Label
            value="File1__pdf"
            classes={{
              root: "text-md tracking-tight text-ideeza-100 font-sans ",
            }}
          />
        </div>
        <div className="border-t border-gray-650 mt-6 pt-6 md:px-6 px-0">
          <Icon_Label
            tooltipProps={{ open: false }}
            iconComponent={
              <img src="/assets/images/documents-case.png" className="w-4" />
            }
            lableClass={{
              root: "pl-2 text-md tracking-tight text-ideeza-100 font-sans",
            }}
            labelValue="View original job posting"
          />
          <Icon_Label
            tooltipProps={{ open: false }}
            iconComponent={
              <img src="/assets/images/documents-case.png" className="w-4" />
            }
            lableClass={{
              root: "pl-2 text-md tracking-tight text-ideeza-100 font-sans",
            }}
            labelValue="Vew origianl proposal"
          />
        </div>
      </div>
    </div>
  );
}
export default MilestoneTermsSettings;
