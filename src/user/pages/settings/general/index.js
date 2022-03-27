import React, { useState, useEffect } from "react";
import { Button, Label } from "atoms";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  StepVerification,
  TypeYourAccount,
  SocialMediaAccount,
  AdditionalInformation,
  EditProfileInformation,
} from "orgasms";
function General() {
  const [user, setUser] = useState({});
  const state = useSelector(({ Auth }) => Auth?.user);
  const handleClick = (data) => console.log("Data", data);
  const methods = useForm({});
  useEffect(() => {
    if (state) {
      setUser(state);
      methods.setValue("first_name", state?.first_name);
      methods.setValue("last_name", state?.last_name);
      methods.setValue("gender", state?.gender);
      methods.setValue("email", state?.email);
      methods.setValue("phone", state?.phone);
      methods.setValue("website", state?.website);
      methods.setValue("description", state?.description);
    }
  }, [state]);
  return (
    <form
      onSubmit={methods.handleSubmit(handleClick)}
      className="lg:w-8/12 xl:w-7/12 w-full pt-3 space-y-12 flex flex-col items-center"
    >
      <div className="w-full">
        <Label
          classes={{
            root:
              "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 text-xl font-sans font-bold flex justify-between items-center w-full",
          }}
          value={
            <>
              Edit Profile Informations{" "}
              <span className="text-gray-900 text-base font-normal">
                *Requried
              </span>
            </>
          }
        />
        <EditProfileInformation useform={methods} />
      </div>
      <div className="w-full">
        <Label
          classes={{
            root:
              "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 text-xl font-sans font-bold flex justify-between items-center w-full",
          }}
          value={
            <>
              Additional Informations{" "}
              <span className="text-gray-900 text-base font-normal">
                *Optional
              </span>
            </>
          }
        />
        <AdditionalInformation />
      </div>
      <div className="w-full">
        <Label
          classes={{
            root:
              "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 text-xl font-sans font-bold flex justify-between items-center w-full",
          }}
          value={
            <>
              Profile Photo{" "}
              <span className="text-gray-900 text-base font-normal">
                *Requried
              </span>
            </>
          }
        />
        <StepVerification />
      </div>
      <div className="w-full">
        <Label
          classes={{
            root:
              "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 text-xl font-sans font-bold flex justify-between items-center w-full",
          }}
          value={
            <>
              Type of your Account{" "}
              <span className="text-gray-900 text-base font-normal">
                *Requried
              </span>
            </>
          }
        />
        <TypeYourAccount />
      </div>
      <div className="w-full">
        <Label
          classes={{
            root:
              "text-current border-b border-gray-750 pb-1 mb-5 text-xl font-sans font-bold flex justify-between items-center w-full",
          }}
          value={<>Social Media Accounts</>}
        />
        <SocialMediaAccount />
      </div>
      <Button
        type="submit"
        value="Save"
        classes={{
          root: "bg-ideeza-100 px-16 tracking-tight capitalize text-white",
        }}
      />
    </form>
  );
}

export default General;
