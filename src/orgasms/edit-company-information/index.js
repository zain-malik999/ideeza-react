import React, { useState, useEffect } from "react";
import { TextField, SelectField } from "molecules";
import { BsFillLockFill } from "react-icons/bs";
function EditCompanyInformation({ useform, user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [erros, setErrors] = useState({});
  const { register, errors } = useform;

  useEffect(() => {
    setErrors(errors);
  }, [errors]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="rounded-lg bg-white shadow-md space-y-4 p-5 md:px-6 px-4 w-full">
      <TextField
        register={register({ required: "Enter First Name..." })}
        error={erros}
        name="company_name"
        mainClass="flex items-center"
        inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue="Company Name"
        placeholder="PCBix L.L.C."
      />
      <TextField
        register={register({ required: "Enter First Name..." })}
        error={erros}
        name="email"
        mainClass="flex items-center"
        inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue={
          <>
            Email Adress{" "}
            <BsFillLockFill className="text-gray-900 text-xs ml-2" />{" "}
          </>
        }
        placeholder="john@example.com"
      />
      <TextField
        register={register({ required: "Enter First Name..." })}
        error={erros}
        name="phone"
        mainClass="flex items-center"
        inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue={
          <>
            Phone Number{" "}
            <BsFillLockFill className="text-gray-900 text-xs ml-2 mr-2" />{" "}
          </>
        }
        placeholder="+123 12512 33213"
      />
      <TextField
        mainClass="flex items-center"
        inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue={
          <>
            Adress <BsFillLockFill className="text-gray-900 text-xs ml-2" />{" "}
          </>
        }
        placeholder="111 E 55th Street New York, NY"
      />
      <TextField
        register={register({ required: "Enter First Name..." })}
        error={erros}
        name="website"
        mainClass="flex items-center"
        inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue="Website"
        placeholder="www.johndoe.com"
      />
      <SelectField
        mainClasses="md:grid flex md:grid-cols-3 items-center"
        className="w-full text-md text-gray-900 px-3 py-2"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="text-gray-300 md:text-base text-md font-sans tracking-tight md:w-auto w-1/2"
        value="Preferred Language"
        placeholder="English"
      />
      <TextField
        register={register({ required: "Enter First Name..." })}
        error={erros}
        name="description"
        mainClass="flex items-start"
        inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 md:text-base text-md font-sans tracking-tight pt-1 md:w-2/4 w-1/2"
        labelvalue="Describe Yourself"
        placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        multiline={true}
        rows={5}
      />
    </div>
  );
}

export default EditCompanyInformation;
