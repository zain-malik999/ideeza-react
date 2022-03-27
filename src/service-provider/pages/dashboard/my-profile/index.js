import React, { useState, useEffect } from "react";
import { MyProfileLeftSide, MyProfileRightSide } from "orgasms";
import { useDispatch, useSelector } from "react-redux";
import { withReducer } from "service";
import { getProfileData } from "./store/action";
import Reducer from "./store/reducer";
function MyProfile() {
  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  const [Profile, setProfile] = useState([]);
  const state = useSelector((state) => state?.Auth?.authenticated);
  const profiledata = useSelector(({ ProfileAll }) => ProfileAll?.data);

  const getAllProfileData = () => dispatch(getProfileData());

  useEffect(() => {
    setAuth(state);
  }, [state]);

  useEffect(() => {
    if (auth) {
      getAllProfileData();
    }
  }, [auth]);

  useEffect(() => {
    if (profiledata) {
      setProfile(profiledata);
    }
  }, [profiledata]);

  console.log("data", profiledata);

  return (
    <>
      <div className="grid lg:grid-cols-11 gap-5">
        <div className="bg-white rounded-lg lg:col-span-3">
          <MyProfileLeftSide />
        </div>
        <div className="lg:col-span-8 bg-white rounded-lg">
          <MyProfileRightSide />
        </div>
      </div>
    </>
  );
}
export default withReducer("MyProfile", Reducer)(React.memo(MyProfile));
