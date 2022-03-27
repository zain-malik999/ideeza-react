import React from "react";
import { Label, Button } from "atoms";
import { NotesDetail } from "..";

function WeeklyCard(props) {
  const { onClick } = props;
  return (
    <>
      <div
        className="bg-white rounded-md shadow-lg mt-3"
        style={{ minWidth: "300px" }}
      >
        <Label
          value="Thursday, 02nd. March"
          classes={{
            root:
              "text-sm border-b border-gray-750 p-4 pt-5 pb-3 text-gray-300",
          }}
        />
        <div className="overflow-y-auto h-50vh mt-6 px-2 m-2 space-y-4">
          <NotesDetail
            labelheading="text-base"
            mainClass="p-3"
            label3="hidden"
            label4="hidden"
            avatarClass="w-7 h-7"
            bottomClass="pt-5"
            label1Value="09:00AM - 10:30PM"
            label2Value="Finish electronics part"
            chackboxClass="hidden"
          />
          <NotesDetail
            labelheading="text-base"
            mainClass="p-3"
            label3="hidden"
            label4="hidden"
            avatarClass="w-7 h-7"
            bottomClass="pt-5"
            label1Value="09:00AM - 10:30PM"
            label2Value="Finish electronics part"
            chackboxClass="hidden"
          />
          <NotesDetail
            labelheading="text-base"
            mainClass="p-3"
            label3="hidden"
            label4="hidden"
            avatarClass="w-7 h-7"
            bottomClass="pt-1"
            label1Value="09:00AM - 10:30PM"
            label2Value="Finish electronics part"
            checkboxValue="Do a research on design"
            checkboxValue1="Check if all deliveries are made"
          />
        </div>
        <div className="flex flex-col items-center space-y-7 mt-3 pb-3 px-4">
          <Button
            value="Watch Movies"
            iconEnd="+"
            classes={{
              root:
                "flex justify-between rounded-full px-14 w-full py-1 capitalize text-black-350 tracking-tight border-gray-300 border border-solid",
            }}
          />
          <Button
            value="+Add New Note"
            onClick={onClick}
            classes={{
              root:
                "px-3 py-1 leading-7 capitalize bg-ideeza-100 text-white tracking-tight",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default WeeklyCard;
