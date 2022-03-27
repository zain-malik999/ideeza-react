import React, { useState, useEffect } from "react";
import { Label } from "atoms";
import { Pagination } from "molecules";
import { ManagementTableHeader, TaskTable, AddNewTaskPopup } from "orgasms";
import { useDispatch, useSelector } from "react-redux";
import { onServiceProviderTask } from "./store/action";
import Reducer from "./store/reducer";
import { withReducer } from "service";

function Task() {
  const [popup, SetPopup] = useState(false);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const state = useSelector((state) => state?.Auth?.authenticated);

  const getTaskData = () => dispatch(onServiceProviderTask());
  const [allTaskData, setallTaskData] = useState([]);
  const TaskData = useSelector(({ TaskAllData }) => TaskAllData);
  const loader = useSelector(({ TaskAllData }) => TaskAllData?.loader);
  const toggleOpen = () => SetPopup(!popup);
  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) getTaskData();
  }, [auth]);
  useEffect(() => {
    if (TaskData) {
      setallTaskData(TaskData?.data);
    }
  }, [TaskData]);
  useEffect(() => {
    setLoading(loader);
  }, [loader]);

  return (
    <div className="pt-4">
      <Label
        value="Task"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg">
        <ManagementTableHeader
          onClick={toggleOpen}
          iconClass="hidden"
          btnValue="Add new task"
          btnClass="hidden"
          containerClass="flex md:flex-row flex-col items-center justify-between md:px-4 p-4 space-y-3 md:space-y-0"
        />
        <TaskTable data={allTaskData} loading={loading} />
        <Pagination mainClass="pt-6 pb-12" />
      </div>
      <AddNewTaskPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default withReducer("TaskAllData", Reducer)(React.memo(Task));
