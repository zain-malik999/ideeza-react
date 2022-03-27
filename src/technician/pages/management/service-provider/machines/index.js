import React, { useState, useEffect } from "react";
import { Label } from "atoms";
import { withReducer } from "service";
import { Pagination } from "molecules";
import { useDispatch, useSelector } from "react-redux";
import { onServiceProviderMachine } from "./store/action";
import Reducer from "./store/reducer";

import {
  ManagementTableHeader,
  MachinesTable,
  ItemDescriptionPopup,
} from "orgasms";

function Machines() {
  const [auth, setAuth] = useState(false);
  const [popup, SetPopup] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.Auth?.authenticated);
  const getALLMachineData = () => dispatch(onServiceProviderMachine());
  const [allMachineData, setAllMachineData] = useState([]);
  const MachineData = useSelector(({ MachineAllData }) => MachineAllData);

  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) getALLMachineData();
  }, [auth]);
  useEffect(() => {
    if (MachineData) {
      setAllMachineData(MachineData?.data);
    }
  }, [MachineData]);

  const toggleOpen = () => SetPopup(!popup);

  return (
    <div className="pt-4">
      <Label
        value="Machines"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg">
        <ManagementTableHeader
          onClick={toggleOpen}
          iconClass="hidden"
          btnValue="Create new machine"
          btnClass="hidden"
          containerClass="flex md:flex-row flex-col items-center justify-between md:px-4 p-4 space-y-3 md:space-y-0"
        />
        <MachinesTable data={allMachineData} />
        <Pagination mainClass="pt-6 pb-12" />
      </div>
      <ItemDescriptionPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default withReducer("MachineAllData", Reducer)(React.memo(Machines));
