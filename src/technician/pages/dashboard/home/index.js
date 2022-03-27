import React, { useState, useEffect } from "react";
import { TechnicianHome, T_DashboardTable } from "orgasms";
import { Label, Dropdown } from "atoms";
import { withReducer } from "service";
import { GoDoWork, Pagination } from "molecules";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { onTaskGet } from "./store/action";
import Reducer from "./store/reducer";
function Home(props) {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Alltaskdata, settaskdata] = useState([]);
  const state = useSelector((state) => state?.Auth?.authenticated);
  const Alldata = useSelector(({ TechnicianTask }) => TechnicianTask?.taskdata);
  const loader = useSelector(({ TechnicianTask }) => TechnicianTask?.loader);
  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) dispatch(onTaskGet());
  }, [auth]);
  useEffect(() => {
    setLoading(loader);
  }, [loader]);
  useEffect(() => {
    if (Alldata) {
      settaskdata(Alldata);
    }
  }, [Alldata]);
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  const {} = props;
  const data = [
    {
      dataLabel: "Finish Electronics Part",
      status: "COMPLETED",
    },
    {
      dataLabel: "Dont Forget to Lorem Ipsum",
      status: "10:30 AM - 13:30 PM",
    },
    {
      dataLabel: "John Doe have a problem",
      status: "13:30 PM - 14:00 PM",
    },
    {
      dataLabel: "Opened discussion about code",
      status: "16:00 PM - 17:00 PM",
    },
    {
      dataLabel: "Cover problem on hold",
      status: "COMPLETED",
    },
  ];
  return (
    <div className="lg:-mx-0.5">
      <TechnicianHome
        morningTitleClass="Good morning, Chan!"
        cardValueI="Messages"
        cardValueII="56"
        cardValue1="Articles"
        cardValue2="56"
        cardValue3="Open Tasks"
        cardValue4="56"
        cardValue5="My Score"
        cardValue6="56"
      />
      <Label
        value="Task Management"
        classes={{ root: `text-ideeza-100 font-sans font-bold text-lg py-3` }}
      />
      <div className="grid lg:grid-cols-7 gap-3">
        <div className="lg:col-span-5 rounded-md shadow-lg bg-white">
          <div className="flex items-center justify-between px-4 pt-2">
            <Label
              value="2 task complete out of 10"
              className="text-gray-900 font-semibold"
            />
            <Dropdown
              className="p-1"
              icons={
                <HiOutlineDotsHorizontal className={`text-3xl text-gray-600`} />
              }
              itemsClasses={{
                root:
                  "font-sans text-sm px-4 w-36 py-1 tracking-tight font-sans hover:text-current text-gray-300",
              }}
              options={[
                {
                  name: `View`,
                  value: "View",
                },
                {
                  name: `Pause`,
                  value: "Pause",
                },
                {
                  name: `Approve`,
                  value: "Approve",
                },
                {
                  name: `Delete`,
                  value: "Delete",
                },
              ]}
            />
          </div>
          <T_DashboardTable loading={loading} data={Alltaskdata} />
          <Pagination mainClass="py-7" />
        </div>
        <div className="lg:col-span-2 space-y-2 md:space-y-0 lg:space-y-2 md:space-x-2 lg:space-x-0 md:grid grid-cols-2 lg:grid-cols-1">
          <div className="shadow-full h-52 rounded bg-white">calender</div>
          <div className="shadow-full bg-white rounded-t pb-3">
            <Label
              value="3rd march"
              classes={{
                root: `text-white font-bold font-sans bg-current rounded text-center text-base w-full py-2 mb-2`,
              }}
            />
            <hr />
            {data.map((v, k) => {
              return (
                <GoDoWork
                  label1={v.dataLabel}
                  label2={v.status}
                  mainClass="flex justify-between bg-white p-2 my-2 hover:text-white text-gray-900 hover:bg-purple-400 transition delay-150 duration-300 ease-in-out"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default withReducer("TechnicianTask", Reducer)(React.memo(Home));
