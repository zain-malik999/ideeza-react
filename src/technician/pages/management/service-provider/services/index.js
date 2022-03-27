import React, { useState, useEffect } from "react";
import { withReducer } from "service";
import { useDispatch, useSelector } from "react-redux";
import { onService } from "./store/action";
import { Label } from "atoms";
import { Pagination } from "molecules";
import Reducer from "./store/reducer";
import {
  ManagementTableHeader,
  ServicesTable,
  AddServicesPopup,
} from "orgasms";

function Services() {
  const [popup, SetPopup] = useState(false);
  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.Auth?.authenticated);
  const getAllServiceData = () => dispatch(onService());
  const [allServiceData, setallServiceData] = useState([]);
  const ServiceData = useSelector(({ ServiceAllData }) => ServiceAllData);
  const toggleOpen = () => SetPopup(!popup);
  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) getAllServiceData();
  }, [auth]);
  useEffect(() => {
    if (ServiceData) {
      setallServiceData(ServiceData?.data);
    }
  }, [ServiceData]);

  return (
    <div className="pt-4">
      <Label
        value="Services"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg">
        <ManagementTableHeader
          onClick={toggleOpen}
          iconClass="hidden"
          btnValue="Add new service"
          btnClass="hidden"
          containerClass="flex md:flex-row flex-col items-center justify-between md:px-4 p-4 space-y-3 md:space-y-0"
        />
        <ServicesTable data={allServiceData} />
        <Pagination mainClass="pt-6 pb-12" />
      </div>
      <AddServicesPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default withReducer("ServiceAllData", Reducer)(React.memo(Services));
