import React from "react";
import { Label, Button } from "atoms";
import { NotesDetail } from "..";

function DailyNotes(props) {
  const { onClick, date } = props;
  return (
    <>
      <div className="bg-white mt-4 p-5 w-full lg:pl-24 lg:pr-12">
        <Label
          value={date}
          classes={{
            root:
              "text-sm border-b border-gray-750 pb-3 text-gray-300 lg:mr-14 mr-5",
          }}
        />
        <div className="overflow-y-auto h-90vh lg:mt-8 mt-6 lg:pr-12 pr-4 space-y-8">
          <NotesDetail
            label1Value="09:00AM - 10:30PM"
            label2Value="Finish electronics part"
            label3Value={
              <>
                Associated to the{" "}
                <span className="text-ideeza-100 underline">New Car</span>{" "}
                Project
              </>
            }
            checkboxValue="Do a research on design"
            checkboxValue1="Check if all deliveries are made"
            descValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"
          />
          <NotesDetail
            label1Value="09:00AM - 10:30PM"
            label2Value="Finish electronics part"
            label3Value={
              <>
                Associated to the{" "}
                <span className="text-ideeza-100 underline">New Car</span>{" "}
                Project
              </>
            }
            checkboxValue="Do a research on design"
            checkboxValue1="Check if all deliveries are made"
            descValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"
          />
          <NotesDetail
            label1Value="09:00AM - 10:30PM"
            label2Value="Finish electronics part"
            label3Value={
              <>
                Associated to the{" "}
                <span className="text-ideeza-100 underline">New Car</span>{" "}
                Project
              </>
            }
            checkboxValue="Do a research on design"
            checkboxValue1="Check if all deliveries are made"
            descValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"
          />
        </div>
        <div className="flex flex-col items-center space-y-10 mt-5">
          <Button
            value="Watch Movies"
            classes={{
              root:
                "rounded-full px-18 py-1 capitalize text-black-350 tracking-tight border-gray-300 border border-solid",
            }}
          />
          <Button
            value="+Add New Note"
            onClick={onClick}
            classes={{
              root:
                "px-3 py-2 capitalize bg-ideeza-100 text-white tracking-tight",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default DailyNotes;
