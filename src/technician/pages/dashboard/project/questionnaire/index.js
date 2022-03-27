import React from "react";
import { SendQuestionnare } from "orgasms";
import { Button, Label } from "atoms";
import { FaArrowCircleLeft } from "react-icons/fa";
export default function Questionnaire(props) {
  return (
    <div className="bg-white md:p-6 p-4">
      <div className="flex justify-between">
        <Button
          value="Go back"
          classes={{
            root:
              "bg-ideeza-100 text-md text-white transform-none font-medium tracking-tight font-sans px-5 py-2 rounded",
          }}
          iconStart={<FaArrowCircleLeft className="text-lg" />}
        />
        <Button
          value="Massege lawyer"
          classes={{
            root: `border border-solid border-gray-500 py-2 text-sm tracking-tight font-sans rounded capitalize px-4`,
          }}
        />
      </div>
      <Label
        value="Questionnaire"
        classes={{ root: "text-xl text-current pt-3 pb-6" }}
      />
      {/* <QuestionnaireOrg /> */}
      <SendQuestionnare />
      <div className="flex justify-end space-x-2 pt-6">
        <Button
          value="Cancel"
          classes={{
            root: `border border-solid border-gray-500 py-2 text-sm tracking-tight font-sans rounded w-24 capitalize px-4`,
          }}
        />
        <Button
          value="Send"
          classes={{
            root:
              "bg-ideeza-100 text-md text-white transform-none font-medium tracking-tight font-sans px-5 py-2 rounded w-24",
          }}
        />
      </div>
    </div>
  );
}
