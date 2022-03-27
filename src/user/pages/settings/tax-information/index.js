import React, { useState, useEffect } from "react";
import { Label } from "atoms";
import { TaxResidence } from "orgasms";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTaxInformation } from "./store/action";
import { withReducer } from "service";
import Reducer from "./store/reducer";

function TaxInformation() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const state = useSelector(({ Auth }) => Auth?.user);

  useEffect(() => {
    if (state) setUser(state?.id);
  }, [state]);
  useEffect(() => {
    if (user) {
      dispatch(getTaxInformation(user));
    }
  }, [user]);
  return (
    <div className="space-y-4 md:w-10/12 lg:w-7/12 xl:w-6/12 w-full">
      <Label
        value="Tax information"
        classes={{
          root:
            "text-ideeza-100 text-xl tracking-normal font-semibold font-sans",
        }}
      />
      <div className="bg-white rounded-lg shadow-md">
        <TaxResidence main2Class="hidden" />
      </div>
      <div className="bg-white rounded-lg shadow-md">
        <TaxResidence main1Class="hidden" />
      </div>
    </div>
  );
}

export default TaxInformation;
