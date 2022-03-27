import React, { useState, useEffect } from "react";
import { AboutHeader, PersonalTabel } from "orgasms";
import { useSelector } from "react-redux";

function PersonalData() {
  const [user, setUser] = useState({});
  const state = useSelector(({ Auth }) => Auth?.user);
  useEffect(() => {
    if (state) {
      setUser(state);
    }
  }, [state]);

  return (
    <div className="lg:pr-8">
      <AboutHeader user={user} />
      <PersonalTabel user={user} />
    </div>
  );
}

export default PersonalData;
