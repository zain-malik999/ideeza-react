import React, { useEffect, useState } from "react";
import { Label, Select } from "atoms";
import { Pagination } from "molecules";
import { CareerTable, FreelancerTable, BlogTableHeader } from "orgasms";

function Team() {
  return (
    <div className="pt-4">
      <Label
        value="Team"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg">
        <BlogTableHeader
          btnValue="Add new Team"
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
          classes={{
            root:
              "text-gray-300 tracking-tight font-sans font-bold p-3 bg-gray-375 text-lg",
          }}
        />
        <FreelancerTable />
        <Pagination mainClass="py-6" />
      </div>
    </div>
  );
}

export default Team;
