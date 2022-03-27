import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BlogTableHeader, BlogTable } from "orgasms";
import { Pagination } from "molecules";
import { BsPlus } from "react-icons/bs";
import { TableContainer } from "@material-ui/core";
import { Label } from "atoms";

function HomeBlog() {
  return (
    <div className="lg:w-4/5 pt-4 mx-auto">
      <Label
        value="Manage Articles"
        classes={{
          root: "text-current font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow">
        <BlogTableHeader
          btnValue="Add New"
          iconEnd={<BsPlus />}
          labelClass="hidden"
          containerClass=""
        />
        <TableContainer>
          <BlogTable />
        </TableContainer>
        <Pagination mainClass="py-6" />
      </div>
    </div>
  );
}

export default HomeBlog;
