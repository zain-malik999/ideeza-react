import React, { useState } from "react";
import { TechnicianHome, DashboardTable, OfferProject } from "orgasms";
import { Label } from "atoms";
import { GoDoWork, Pagination } from "molecules";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardData } from "./store/action";
import { useEffect } from "react";
import { withReducer } from "service";
import Reducer from "./store/reducer";
function Home(props) {
  const [popup, SetPopup] = useState(false);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState(null);
  const [articles, setArticles] = useState(null);
  const [score, setScore] = useState(null);
  const [task, setTasks] = useState(null);
  const [box, setBox] = useState([]);
  const toggleOpen = () => SetPopup(!popup);
  const dispatch = useDispatch();
  const handleDashboardData = () => dispatch(getDashboardData());
  const dashboardData = useSelector(
    ({ ServiceProvider }) => ServiceProvider?.data
  );
  const loading = useSelector(({ ServiceProvider }) => ServiceProvider?.loader);
  const Message = useSelector(
    ({ ServiceProvider }) => ServiceProvider?.messages
  );
  const Articles = useSelector(
    ({ ServiceProvider }) => ServiceProvider?.articles
  );
  const Tasks = useSelector(
    ({ ServiceProvider }) => ServiceProvider?.open_tasks
  );
  const Score = useSelector(({ ServiceProvider }) => ServiceProvider?.my_score);
  useEffect(() => {
    console.log(loading);
    setLoader(loading);
  }, [loading]);
  useEffect(() => {
    setData(dashboardData);
  }, [dashboardData]);
  useEffect(() => {
    handleDashboardData();
  }, []);
  useEffect(() => {
    setMessage(Message);
  }, [Message]);
  useEffect(() => {
    setArticles(Articles);
  }, [Articles]);
  useEffect(() => {
    setTasks(Tasks);
  }, [Tasks]);
  useEffect(() => {
    setScore(Score);
  }, [Score]);
  return (
    <div className="lg:-mx-2">
      {/* <Button value="Popup" onClick={toggleOpen} /> */}
      <TechnicianHome
        morningTitleClass="Good morning, Chan!"
        cardValueI="Messages"
        cardValueII={message}
        cardValue1="Articles"
        cardValue2={articles}
        cardValue3="Open Tasks"
        cardValue4={task}
        cardValue5="My Score"
        cardValue6={score}
      />
      <Label
        value="My feed"
        classes={{ root: `text-ideeza-100 font-sans font-bold text-lg py-3` }}
      />
      <div className="grid lg:grid-cols-7 items-start gap-3">
        <div className="lg:col-span-5 rounded-lg shadow-lg bg-white">
          <div className="max-h-70vh overflow-auto w-full">
            <DashboardTable loading={loader} data={data} />
          </div>
          <Pagination mainClass="py-7" />
        </div>
        <div className="lg:col-span-2 space-y-2 md:space-y-0 lg:space-y-2 md:space-x-2 lg:space-x-0 md:grid grid-cols-2 lg:grid-cols-1">
          <div className="shadow-full h-64 rounded bg-white">calender</div>
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
                  mainClass="flex justify-between bg-white p-2 my-2 hover:text-white hover:bg-purple-400 transition delay-150 duration-300 ease-in-out"
                />
              );
            })}
          </div>
        </div>
      </div>

      <OfferProject open={popup} toggleOpen={toggleOpen} />
      {/* <ProposelProject open={popup} toggleOpen={toggleOpen} /> */}
    </div>
  );
}
export default withReducer("ServiceProvider", Reducer)(React.memo(Home));
