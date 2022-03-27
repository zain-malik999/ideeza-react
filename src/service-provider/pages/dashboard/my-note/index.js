import React, { useState } from "react";
import { MyNoteSection, DailyNotes, MyNotesPopup } from "orgasms";
import { Date } from "atoms";
import { LabelButton, MyNotesTabs } from "molecules";
function MyNote() {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  const [index, setIndex] = useState(1);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  const [date, setDate] = useState(new Date());
  const handleDate = (e) => setDate(e);
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-1 items-start justify-between w-full">
        <MyNotesTabs
          mainClass="md:col-span-3 order-last md:order-first"
          index={index}
          handleChange={handleChange}
          tabsClasses=""
          tabClasses="bg-transparent text-sm font-sans tracking-tight news-tabs focus:text-current transition-all duration-500 ease-in-out transform-none text-gray-300 w-20"
          tabsData={[
            {
              name: "Daily",
              component: (
                <div>
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
                  <DailyNotes onClick={toggleOpen} />
                </div>
              ),
            },
            {
              name: "Weekly",
              component: (
                <>
                  <MyNoteSection />
                </>
              ),
            },
          ]}
        />
        <div className="w-full overflow-x-auto mx-auto md:ml-5 lg:ml-6 md:pt-16 pb-5 md:pb-2">
          <Date
            value={date}
            change={handleDate}
            style="rounded-lg shadow-lg w-full overflow-hidden"
          />
        </div>
      </div>
      <MyNotesPopup open={popup} toggleOpen={toggleOpen} />
    </>
  );
}
export default MyNote;
