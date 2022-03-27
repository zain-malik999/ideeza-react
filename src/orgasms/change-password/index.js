import React from "react";
import { Label, Button } from "atoms";
import { TextField } from "molecules";
import { useForm } from "react-hook-form";
function ChangePassword({ change }) {
  const { register, errors, handleSubmit } = useForm({});
  const handlePassword = (data) => change(data);
  return (
    <form
      onSubmit={handleSubmit(handlePassword)}
      className="rounded-lg w-full bg-white shadow-md py-3 md:px-6 px-4"
    >
      <Label
        value="Change your password"
        className="font-bold font-sans text-gray-300 text-lg pb-4"
      />
      <div className="lg:w-4/6 space-y-4 pt-2">
        <TextField
          register={register({
            required: "Enter Old Password.",
          })}
          error={errors}
          name="old_password"
          labelClasses="font-sans md:text-md text-sm traking-tighter text-gray-300 w-2/3"
          labelvalue="Old Password"
          inputClasses="w-full border border-gray-160 pl-0 text-sm"
        />
        <TextField
          error={errors}
          name="new_password"
          register={register({
            required: "Enter New Password.",
          })}
          labelClasses="font-sans md:text-md text-sm traking-tighter text-gray-300 w-2/3"
          labelvalue="New Password"
          inputClasses="w-full border border-gray-160 pl-0 text-sm"
        />
        <TextField
          error={errors}
          name="confirm_password"
          register={register({
            required: "Enter Confirm Password.",
          })}
          labelClasses="font-sans md:text-md text-sm traking-tighter text-gray-300 w-2/3"
          labelvalue="Confirm Password"
          inputClasses="w-full border border-gray-160 pl-0 text-sm"
        />
      </div>
      <div className="flex items-center justify-center pt-4 pb-2">
        <Button
          type="submit"
          value="Update Password"
          classes={{
            root:
              "bg-current py-2 text-white font-sans tracking-tight text-sm capitalize px-8",
          }}
        />
      </div>
    </form>
  );
}
export default ChangePassword;
