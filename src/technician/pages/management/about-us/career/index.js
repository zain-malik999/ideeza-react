import React, { useEffect, useState } from "react";
import { Label, Select } from "atoms";
import { Pagination } from "molecules";
import {
  CareerTable,
  FreelancerTable,
  BlogTableHeader,
  AddCareerPopup,
  AboutUsJobPopup,
} from "orgasms";

function Career() {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  const [jobPopup, SetJobPopup] = useState(false);
  const toggleJobOpen = () => SetJobPopup(!jobPopup);
  return (
    <div className="pt-4">
      <Label
        value="Career"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg">
        <BlogTableHeader
          onClick={toggleOpen}
          btnValue="Add new Career"
          labelClass="hidden"
          containerClass="flex items-center justify-between px-4"
          prop={
            <Select
              placeholder="All"
              containerClass="md:w-20 w-full bg-gray-150 text-gray-900 text-sm border border-gray-160"
              inputClass="text-md tracking-tight p-2"
              options={[
                { value: "no_applied", name: "No one applied" },
                { value: "1_applied", name: "At least 1 applied" },
                { value: "status", name: "Pending status" },
              ]}
            />
          }
        />
        <CareerTable />
        <Label
          value="Applied Freelancers"
          onClick={toggleJobOpen}
          classes={{
            root:
              "text-gray-300 tracking-tight font-sans font-bold p-3 bg-gray-375 text-lg",
          }}
        />
        <FreelancerTable />
        <Pagination mainClass="py-6" />
      </div>
      <AddCareerPopup open={popup} toggleOpen={toggleOpen} />
      <AboutUsJobPopup open={jobPopup} toggleOpen={toggleJobOpen} />
    </div>
  );
}

export default Career;
