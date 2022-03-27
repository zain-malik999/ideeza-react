import React from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Label, Input } from "atoms";
import { CheckboxFields } from "molecules";
import { IoClose } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
function LoginPopup(props) {
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
            <Button
              iconStart={<FaFacebookF className="text-lg" />}
              value="Continue with Facebook"
              classes={{
                root:
                  "bg-blue-400 border border-solid border-blue-400 text-md font-sans tracking-tight py-3 w-full rounded-full text-white transform-none",
              }}
            />
            <Button
              iconStart={<FcGoogle className="text-lg" />}
              value="Continue with Google"
              classes={{
                root:
                  "bg-white text-md font-sans tracking-tight py-3 w-full rounded-full text-gray-300 border border-solid border-gray-900 transform-none",
              }}
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
              <Input
                register={register({
                  required: "Email or Password Wrong",
                })}
                error={errors}
                type="email"
                placeholder="Email address"
                name="email"
                containerClass="w-full p-0 rounded-none border border-solid border-gray-900"
                className={{ root: "rounded-none" }}
                inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded-none"
              />
              <Input
                type="password"
                name="password"
                error={errors}
                placeholder="Password"
                register={register({
                  required: true,
                })}
                containerClass="w-full p-0 rounded-none border border-solid border-gray-900 mt-2.5 pr-2"
                className={{ root: "rounded-none" }}
                inputProps="text-gray-300 text-sm font-lato -ml-2 p-2 py-3 rounded-none"
              />
              {errors?.email ? errors?.email?.message : null}
              <CheckboxFields
                value="Remember me"
                labelClass="text-sm tracking-normal font-sans text-gray-900"
              />
              <Button
                type="submit"
                value="Log in"
                classes={{
                  root:
                    "bg-current text-sm mt-2 font-sans rounded-md tracking-tight py-4 w-full text-white transform-none",
                }}
              />
              <Label
                classes={{
                  root:
                    "text-current text-sm tracking-tighter font-sans text-center pt-1 cursor-pointer",
                }}
                value="Forget Password?"
              />
            </form>
            <Label
              classes={{
                root:
                  "flex items-center text-md border-b md:w-11/12 mx-auto justify-center pb-1 pt-6 font-sans tracking-tight text-gray-600 text-center",
              }}
              value={
                <>
                  {" "}
                  Don't have an account?{" "}
                  <span className="pl-2 text-current cursor-pointer">
                    Sign up
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
export default LoginPopup;
