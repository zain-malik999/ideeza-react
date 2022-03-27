import React from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Label, Input, Select } from "atoms";
import { CheckboxFields, Icon_Label } from "molecules";
import { BiInfoCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
function SignUpPopup(props) {
  const { open, toggleOpen, handleLogin } = props;
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });
  const handlerSubmit = (data) => handleLogin(data);
  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <div className="flex justify-end -mt-3 -mr-3 pb-2">
            <IoClose
              className="text-red-250 text-2xl cursor-pointer"
              onClick={toggleOpen}
            />
          </div>
        }
        content={
          <div className="space-y-2 pt-2">
            <Label
              className="text-gray-900 font-sans text-center text-md"
              value={
                <>
                  {" "}
                  Sign up with{" "}
                  <span className="text-current cursor-pointer">
                    Facebook
                  </span>{" "}
                  or <span className="text-current cursor-pointer">Google</span>{" "}
                </>
              }
            />
            <Label
              classes={{
                root:
                  "flex items-center grid grid-cols-5 text-center text-gray-900",
              }}
              value={
                <>
                  {" "}
                  <hr className="col-span-2" />
                  or <hr className="col-span-2" />{" "}
                </>
              }
            />
            <form onSubmit={handleSubmit(handlerSubmit)} className="w-100">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <Input
                  type="fisrt_name"
                  placeholder="First Name"
                  name="fisrt_name"
                  containerClass="w-full p-0 rounded border border-solid border-gray-225"
                  className={{ root: "rounded" }}
                  inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded"
                />
                <Input
                  type="last_name"
                  placeholder="Last Name"
                  name="last_name"
                  containerClass="w-full p-0 rounded border border-solid border-gray-225"
                  className={{ root: "rounded" }}
                  inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded"
                />
              </div>
              <Input
                register={register({
                  required: "Email or Password Wrong",
                })}
                error={errors}
                type="email"
                placeholder="Email address"
                name="email"
                containerClass="w-full p-0 rounded border border-solid border-gray-225"
                className={{ root: "rounded" }}
                inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded"
              />
              <Icon_Label
                mainClass="flex items-center mt-2.5 mb-1"
                tooltipProps={{ open: false }}
                labelValue="The password must be be atleast 8 characters"
                iconContanerClass="text-lg w-4"
                lableClass={{
                  root: `text-gray-900 tracking-tighter text-sm font-sans ml-0.5`,
                }}
                iconComponent={
                  <BiInfoCircle className="text-red-100 text-lg" />
                }
              />
              <Input
                type="password"
                name="password"
                error={errors}
                placeholder="Create a Password"
                register={register({
                  required: true,
                })}
                containerClass="w-full p-0 rounded border border-solid border-gray-225"
                className={{ root: "rounded" }}
                inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded"
              />
              <Input
                type="password"
                name="password"
                error={errors}
                placeholder="Confirm Password"
                register={register({
                  required: true,
                })}
                containerClass="w-full p-0 rounded border border-solid border-gray-225 mt-2.5"
                className={{ root: "rounded" }}
                inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded"
              />
              <Label
                value="Birthday"
                className="mt-7 text-gray-300 text-base"
              />
              <Label
                value="Other people won't see your birthday."
                className="mt-0.5 text-gray-900 text-sm"
              />
              <div className="flex space-x-2 pb-4 pt-2">
                <Select
                  placeholder="Month"
                  className="text-gray-900 font-sans border border-solid border-gray-225 text-sm py-0"
                />
                <Select
                  placeholder="Day"
                  className="text-gray-900 font-sans border border-solid border-gray-225 text-sm py-0"
                />
                <Select
                  placeholder="Year"
                  className="text-gray-900 font-sans border border-solid border-gray-225 text-sm py-0"
                />
              </div>
              {errors?.email ? errors?.email?.message : null}
              <CheckboxFields
                value={
                  <>
                    I'am agree to the{" "}
                    <span className="text-current underline">
                      privacy policy and terms & conditon
                    </span>{" "}
                    of IDEEZA.
                  </>
                }
                labelClass="text-xs tracking-normal font-sans text-gray-900"
              />
              <CheckboxFields
                mainClass="flex items-start -ml-1 pr-2 mb-1"
                value={
                  <>
                    I’d like to receive{" "}
                    <span className="text-current">
                      marketing promotions, special offers, inspiration and
                      policy updates
                    </span>{" "}
                    from Ideeza. You can opt out any time.{" "}
                  </>
                }
                labelClass="text-xs tracking-normal font-sans text-gray-900"
              />
              <Button
                type="submit"
                value="Register"
                classes={{
                  root:
                    "bg-current text-sm mt-2 font-sans rounded-md tracking-tight py-4 w-full text-white transform-none",
                }}
              />
            </form>
            <Label
              classes={{
                root:
                  "flex items-center text-md border-b justify-center pb-1 font-sans tracking-tight text-gray-900 text-center",
              }}
              value={
                <>
                  {" "}
                  Already have an IDEEZA account?{" "}
                  <span className="pl-2 text-current cursor-pointer">
                    Login
                  </span>{" "}
                </>
              }
            />
          </div>
        }
        actions={<></>}
        open={open}
      />
    </div>
  );
}
export default SignUpPopup;
