import React, { useEffect, useState } from "react";
import { Label, Input, Button, Select } from "atoms";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { onPostExecutive } from "./store/action";

function Executive() {
  const { register, errors, control, handleSubmit } = useForm();
  // const userState = useSelector(({ Auth }) => Auth?.user?.id);
  const dispatch = useDispatch();

  const handlerSubmit = async (data) => {
    if (data) {
      console.log("data", data);
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("username", data.username);
      formData.append("first_name", data.fistname);
      formData.append("last_name", data.lastname);
      formData.append("password", data.password);
      formData.append(
        "date_joined",
        data.day + "/" + data.month + "/" + "2020"
      );
      return dispatch(onPostExecutive(formData));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handlerSubmit)}>
        <div className="pt-4">
          <Label
            value="Add new executive"
            classes={{
              root:
                "text-current tracking-tight font-sans font-bold pb-3 text-lg",
            }}
          />
          <div className="w-full bg-white rounded-lg shadow lg:w-3/5 md:w-4/5 space-y-3 p-6">
            <Input
              error={errors}
              register={register({ required: "Email Is Required" })}
              control={control}
              placeholder="Email address"
              name="email"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded border border-solid border-gray-160"
            />
            <Input
              error={errors}
              register={register({ required: "Username Is Required" })}
              control={control}
              placeholder="Username"
              name="username"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded border border-solid border-gray-160"
            />
            <Input
              error={errors}
              register={register({ required: "Firstname Is Required" })}
              control={control}
              placeholder="First Name"
              name="fistname"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded border border-solid border-gray-160"
            />
            <Input
              error={errors}
              register={register({ required: "LastName Is Required" })}
              control={control}
              placeholder="Last Name"
              name="lastname"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded border border-solid border-gray-160"
            />
            <Input
              error={errors}
              register={register({ required: "Password Is Required" })}
              control={control}
              placeholder="Choose a password"
              name="password"
              containerClass="w-full p-0"
              inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded border border-solid border-gray-160"
            />
            <Label
              value="Other people won't see your birthday."
              className="text-md pt-8 text-gray-900 tracking-normal font-sans"
            />
            <div className="flex md:flex-row flex-col items-center md:space-x-2 space-y-2 md:space-y-0">
              <Input
                error={errors}
                register={register({ required: "Month Is Required" })}
                control={control}
                placeholder="Month"
                name="month"
                containerClass="w-full p-0"
                inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded border border-solid border-gray-160"
              />
              <Input
                error={errors}
                register={register({ required: "Day Is Required" })}
                control={control}
                placeholder="Day"
                name="day"
                containerClass="w-full p-0"
                inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded border border-solid border-gray-160"
              />
              <Select
                placeholder="Year"
                containerClass="w-full text-gray-900 text-sm border border-gray-160"
                inputClass="text-base tracking-tight p-2"
                options={[{ value: "Some", name: "Some" }]}
              />
            </div>
            <Select
              placeholder="Permission type"
              containerClass="w-full text-gray-900 text-sm border border-gray-160"
              inputClass="text-base tracking-tight p-2"
              options={[
                { value: "Electrician", name: "Electrician" },
                { value: "Software Developer", name: "Software Developer" },
                { value: "Mechanics Engineer", name: "Mechanics Engineer" },
                { value: "Blog Writer", name: "Blog Writer" },
                { value: "Tracking", name: "Tracking" },
                { value: "Super Technician", name: "Super Technician" },
              ]}
            />
            <div className="flex justify-center py-8 pt-12">
              <Button
                type="submit"
                value="Sign up"
                className="bg-current text-white transform-none px-10 font-sans tracking-tight"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Executive;
