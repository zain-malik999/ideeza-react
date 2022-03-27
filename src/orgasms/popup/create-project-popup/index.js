import React, { useState } from "react";
import { Modal, Button, Label } from "atoms";
import { TextField } from "molecules";
import { useForm } from "react-hook-form";
function CreateProjectPopup(props) {
  const {
    open,
    close,
    handler,
    loader,
    defaultValue = { title: "", description: "" },
  } = props;
  const { handleSubmit, register, errors } = useForm();
  const handleSubmition = (e) => {
    return Promise.all([handler(e)]);
  };
  return (
    <div>
      <Modal
        width="xs"
        close={close}
        className={{ paper: "rounded-lg md:px-8 p-4 py-0 md:py-4" }}
        header={
          <>
            <Label
              value="Let's tell us some more info.."
              className="text-ideeza-100  mt-4 mb-5 font-semibold font-sans tracking-tight text-lg"
            />
          </>
        }
        content={
          <form
            onSubmit={handleSubmit(handleSubmition)}
            className="w-full flex flex-col"
          >
            <TextField
              name="title"
              error={errors}
              register={register({ required: "Project Name Is Required" })}
              mainClass="flex-col"
              labelvalue="Project Name"
              labelClasses="font-sans text-base mb-1 tracking-tight"
              type="text"
              inputClasses=" border px-2 mb-2 border-grey-135 py-1"
              defaultValue={defaultValue?.title}
            />
            <TextField
              register={register({
                required: "Project Description Is Required",
                minLength: 50,
              })}
              error={errors}
              name="description"
              mainClass="flex-col mt-3"
              labelvalue="Project Description"
              labelClasses="font-sans tracking-tight text-base mb-1"
              type="text"
              placeholder="Type here.."
              multiline={true}
              rows="4"
              inputClasses="bg-gray-100 p-0 mt-2"
              defaultValue={defaultValue?.description}
            />
            <div className="grid grid-cols-2 md:flex md:w-11/12 space-x-2 mt-6">
              <Button
                value="Create"
                loading={loader}
                disabled={Object?.keys(errors)?.length > 0}
                type="submit"
                classes={{
                  root: `text-white bg-ideeza-100 p-2 tracking-tight font-sans capitalize md:w-1/3`,
                }}
              />
              <Button
                onClick={close}
                value="Cancel"
                classes={{
                  root: `border border-solid border-gray-550 text-gray-550 p-2 tracking-tight font-sans capitalize md:w-1/3`,
                }}
              />
            </div>
          </form>
        }
        actions={<></>}
        open={open}
      />
    </div>
  );
}

export default React.memo(CreateProjectPopup);
