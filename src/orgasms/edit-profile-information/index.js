import React, { useState, useEffect } from "react";
import { TextField, SelectField, Icon_Label } from "molecules";
import { BsFillLockFill } from "react-icons/bs";
import { Popover, Label } from "atoms";
import { GeneralSkill } from "..";
import { FaChevronDown } from "react-icons/fa";
function EditProfileInformation({ useform, user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [erros, setErrors] = useState({});
  const { register, errors, control } = useform;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    setErrors(errors);
  }, [errors]);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="rounded-lg bg-white shadow-md space-y-4 p-5 md:px-6 px-4 w-full">
      <TextField
        register={register({ required: "Enter First Name..." })}
        error={erros}
        name="first_name"
        mainClass="flex items-center"
        inputClasses="w-full p-0 py-0.5 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue={
          <>
            First Name <BsFillLockFill className="text-gray-900 text-xs ml-2" />{" "}
          </>
        }
        placeholder="John"
      />
      <TextField
        register={register({ required: "Enter First Name..." })}
        error={erros}
        name="last_name"
        mainClass="flex items-center"
        inputClasses="w-full p-0 py-0.5 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue={
          <>
            Last Name <BsFillLockFill className="text-gray-900 text-xs ml-2" />{" "}
          </>
        }
        placeholder="Doe"
      />
      <SelectField
        mainClasses="flex items-center"
        className="w-full text-md text-gray-900 px-3 py-2"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="text-gray-300 md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        value="I Am"
        placeholder="Gender"
        name="gender"
        register={register({ required: "Enter First Name..." })}
        error={erros}
        isControlled={true}
        control={control}
        options={[
          {
            name: "Male",
            value: "male",
          },
          {
            name: "Female",
            value: "female",
          },
        ]}
      />
      <SelectField
        mainClasses="flex items-center"
        className="w-full text-md text-gray-900 px-3 py-2"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        value={
          <>
            Birth Date <BsFillLockFill className="text-gray-900 text-xs ml-2" />{" "}
          </>
        }
        placeholder="06/21/1988"
      />
      <TextField
        register={register({ required: "Enter First Name..." })}
        error={erros}
        name="email"
        mainClass="flex items-center"
        inputClasses="w-full p-0 py-0.5 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
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
        inputClasses="w-full p-0 py-0.5 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue={
          <>
            Phone Number{" "}
            <BsFillLockFill className="text-gray-900 text-xs ml-2 mr-2" />{" "}
          </>
        }
        placeholder="+123 12512 33213"
      />
      <SelectField
        mainClasses="flex items-center"
        className="w-full text-md text-gray-900 px-3 py-2"
        containerClass="border rounded border-solid border-gray-850 border-opacity-40 text-sm"
        labelClasses="text-gray-300 md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        value="Preferred Language"
        placeholder="English"
      />
      <TextField
        mainClass="flex items-center"
        inputClasses="w-full p-0 py-0.5 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
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
        inputClasses="w-full p-0 py-0.5 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2"
        labelvalue="Website"
        placeholder="www.johndoe.com"
      />
      <div className="flex items-center">
        <Label
          value="Skills"
          classes={{
            root: `text-gray-300 md:text-base text-md font-sans tracking-tight md:w-2/4 w-1/2`,
          }}
        />
        <Icon_Label
          onClick={handleClick}
          id={id}
          labelValue="Skills & Experience"
          mainClass="flex items-center flex-row-reverse justify-between ml-1 w-full cursor-pointer border border-gray-850 border-opacity-40 space-x-2 p-2 pl-1 rounded"
          iconContanerClass="text-2xl text-gray-800"
          lableClass={{
            root:
              "md:text-base text-md font-sans tracking-tight w-full text-gray-900",
          }}
          tooltipProps={{ open: false }}
          iconComponent={
            <>
              <FaChevronDown className="text-gray-900 text-lg cursor-pointer" />
            </>
          }
        />
        <Popover
          open={open}
          handleClick={handleClick}
          onClose={handleClose}
          id={id}
          anchorEl={anchorEl}
        >
          <GeneralSkill />
        </Popover>
      </div>

      <TextField
        register={register({ required: "Enter First Name..." })}
        error={erros}
        name="description"
        mainClass="flex items-start"
        inputClasses="w-full p-0 py-0.5 text-md tracking-tight font-sans border border-gray-850 border-opacity-40"
        labelClasses="text-gray-300 md:text-base text-md font-sans tracking-tight pt-1 md:w-2/4 w-1/2"
        labelvalue="Describe Yourself"
        placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        multiline={true}
        rows={5}
      />
    </div>
  );
}

export default EditProfileInformation;
