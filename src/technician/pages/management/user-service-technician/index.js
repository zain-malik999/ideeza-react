import React, { useEffect, useState } from "react";
import { Label } from "atoms";
import { Pagination } from "molecules";
import {
  UserServiceTechnicianTable,
  UserServiceTechnicianTableHeader,
} from "orgasms";

function UserServiceTechnician() {
  return (
    <div className="pt-4">
      <Label
        value="User & Service Provider & Tecnician"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg space-y-3">
        <UserServiceTechnicianTableHeader />
        <UserServiceTechnicianTable />
        <Pagination mainClass="py-6" />
      </div>
    </div>
  );
}

export default UserServiceTechnician;
