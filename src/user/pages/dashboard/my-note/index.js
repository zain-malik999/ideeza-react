import React, { useState, useEffect } from "react";
import { MyNoteSection, DailyNotes, MyNotesPopup } from "orgasms";
import { LabelButton, MyNotesTabs } from "molecules";
import { onGetNotes, onSaveNotes, getProject, getUsers } from "./store/action";
import { withReducer } from "service";
import { useDispatch, useSelector } from "react-redux";
import { Date } from "atoms";
import Reducer from "./store/reducer";
import moment from "moment";
function MyNote() {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const [notes, setNotes] = useState([]);
  const [popup, SetPopup] = useState(false);
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState([]);
  const notesData = useSelector(({ MyNotes }) => MyNotes?.note);
  const state = useSelector((state) => state?.Auth.authenticated);
  const project = useSelector(({ MyNotes }) => MyNotes?.project);
  const users = useSelector(({ MyNotes }) => MyNotes?.user);
  const getNotesAllData = (payload) => dispatch(onGetNotes(payload));
  const handleDate = (e) => setDate(e);
  const toggleOpen = () => SetPopup(!popup);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  const handleSaved = (e) =>
    Promise.all([dispatch(onSaveNotes(e))]).then((res) => toggleOpen());
  useEffect(() => {
    setProjects(project);
  }, [project]);
  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) {
      dispatch(getProject());
      getNotesAllData({
        start_date: date ? date : "",
      });
      dispatch(getUsers());
    }
  }, [auth]);
  useEffect(() => {
    setNotes(notesData);
  }, [notesData]);
  useEffect(() => {
    getNotesAllData({
      start_date: moment(date).format("YYYY-MM-DD"),
    });
  }, [date]);
  useEffect(() => {
    if (users) {
      setUser(users);
    }
  }, [users]);
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
                <>
                  {notes?.length === 0 ? (
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
                    <DailyNotes
                      date={moment(date).format("ddd, MMM YYYY")}
                      onClick={toggleOpen}
                    />
                  )}
                </>
              ),
            },
            {
              name: "Weekly",
              component: (
                <>
                  <MyNoteSection notes={notes} />
                </>
              ),
            },
          ]}
        />
        <div className="w-full overflow-x-auto md:ml-5 lg:ml-6 md:pt-16 pb-5 md:pb-2">
          <Date
            value={date}
            change={handleDate}
            style="rounded-lg shadow-lg w-full overflow-hidden"
          />
        </div>
      </div>
      {open ? (
        <MyNotesPopup
          open={popup}
          handler={handleSaved}
          project={projects}
          toggleOpen={toggleOpen}
          users={user}
        />
      ) : null}
    </>
  );
}
export default withReducer("MyNotes", Reducer)(React.memo(MyNote));
