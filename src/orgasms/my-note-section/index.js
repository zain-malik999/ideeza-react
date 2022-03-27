import React, { useState } from "react";
import { LabelButton } from "molecules";
import { WeeklyNotes, MyNotesPopup } from "..";
function MyNoteSection({ note, date }) {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  return (
    <>
      {note?.length === 0 ? (
        <>
          <div className="flex flex-col w-full h-50vh overflow-auto justify-center items-center p-4">
            <LabelButton
              mainClass="flex-col"
              value="Your notes are clear. Should you add new more?"
              btnValue="+ Add A new note"
              labelClass="text-base text-center font-sans text-gray-300 font-normal"
              btnClass="bg-ideeza-100 p-2 my-6 text-white px-4"
              onClick={toggleOpen}
            />
          </div>
        </>
      ) : (
        <div className="w-full overflow-hidden">
          <div
            className="flex space-x-6 items-start overflow-x-auto pb-4"
            style={{ maxWidth: "1130px" }}
          >
            <WeeklyNotes onClick={toggleOpen} />
            <WeeklyNotes onClick={toggleOpen} />
          </div>
        </div>
      )}
      <MyNotesPopup open={popup} toggleOpen={toggleOpen} />
    </>
  );
}

export default MyNoteSection;
