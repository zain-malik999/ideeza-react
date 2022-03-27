import React from "react";
import { Label } from "atoms";
import { Admin, AddNewContributor } from "orgasms";
import { Divider } from "@material-ui/core";

function Contributors() {
  return (
    <div className="space-y-4 md:w-10/12 lg:w-7/12 xl:w-7/12 w-full">
      <Label
        value="Contributors"
        classes={{
          root:
            "text-ideeza-100 text-xl font-semibold font-sans border-b border-gray-750 pb-2",
        }}
      />
      <div className="p-6 md:px-8 bg-white rounded-lg shadow-md">
        <AddNewContributor />
        <Divider className={"md:-ml-8 -ml-6 mb-5 mt-1 mr-3"} />
        <Label
          value="Existing Contributor"
          classes={{
            root:
              "text-gray-600 text-lg tracking-tight font-semibold font-sans pb-2",
          }}
        />
        <div className="space-y-5">
          <Admin
            heading="Admin"
            bodyValue="Can manage all aspects of the Page. They can: send messages and publish as the Page, respond to and delete comments on the Page, create new products, see which admin created a post or comment, view insights, edit Ideeza account details from the Page and assign Page roles."
            contName="Jon Cochran"
            contAbout="Admin"
            iconsideValue="Car"
          />
          <Admin
            heading="Editor"
            bodyValue="Can send messages and publish as the Page, respond to and delete comments on the Page, see which admin created a post or comment, view insights, respond to and delete comments from the Page and edit details of page."
            contName="Hana Lalardo"
            contAbout="Editor"
            iconsideValue="Car"
          />
        </div>
      </div>
    </div>
  );
}

export default Contributors;
