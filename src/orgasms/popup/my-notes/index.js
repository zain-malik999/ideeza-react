import React, { useEffect, useState } from "react";
import { Modal, Button, Label, Select, Date, Input } from "atoms";
import { SearchPopup } from "orgasms";
import {
  TextField,
  Icon_Label,
  CheckboxFields,
  AddAvatar,
  Upload,
  SelectField,
} from "molecules";
import { RiDeleteBinLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import moment from "moment";
import { IconButton } from "@material-ui/core";
function MyNotesPopup(props) {
  const { open, toggleOpen, project, handler, users } = props;
  const [user, setUser] = useState(false);
  const [date, setDate] = useState(new Date());
  const [assign, setAssign] = useState([]);
  const [attachment, setAttachment] = useState([]);
  const { register, errors, control, handleSubmit, setValue } = useForm();
  const handleDate = (e) => setDate(e);
  const handlerSubmit = (e) =>
    handler({ ...e, files: attachment, assigned_to: assign.map((v) => v.id) });
  const toggleUser = () => setUser(!user);
  const addAsign = (e) => {
    let find = assign.find((v) => v.id === e.id);
    if (!find) {
      let data = assign;
      data.push(e);
      setAssign(data);
    }
    return toggleUser();
  };
  const addAttachment = (e) => {
    let data = attachment;
    data.push(e.target.files[0]);
    return setAttachment([...data]);
  };
  const removeAttachment = (e) => {
    let data = attachment;
    data = data.filter((v, k) => k !== e);
    setAttachment([...data]);
  };

  useEffect(() => {
    setValue("start_date", moment(date).format("YYYY-MM-DD[T]HH:mm:ss"));
  }, [date]);
  useEffect(() => {
    return () => {
      setAssign([]);
      return setAttachment([]);
    };
  }, []);
  return (
    <>
      <SearchPopup
        add={addAsign}
        open={user}
        user={users}
        toggle={toggleUser}
      />
      <Modal
        width="md"
        close={toggleOpen}
        header={
          <>
            <Label
              value="Add New Note"
              className="text-ideeza-100 text-xl font-semibold font-sans tracking-tight"
            />
          </>
        }
        content={
          <form onSubmit={handleSubmit(handlerSubmit)}>
            <div className="grid md:grid-cols-5 md:gap-x-10 gap-y-5 md:gap-y-0 mt-5 pr-2 md:pr-0">
              <div className="flex flex-col space-y-2 md:col-span-3">
                <SelectField
                  register={register({ require: "Project Is Required" })}
                  name="user_project"
                  error={errors}
                  isControlled={true}
                  control={control}
                  options={project}
                  containerClass=" text-base text-gray-900 font-sans border border-grey-150 h-10"
                  mainClasses="flex-col flex"
                  value="Link to (Option)"
                  placeholder="Project or layer"
                  inputClasses="text-md font-sans p-0 border"
                  labelClasses="font-sans text-base text-gray-300 pb-1 tracking-tight"
                />
                <TextField
                  name="title"
                  error={errors}
                  register={register({ required: "Title Is Required" })}
                  mainClass="flex-col"
                  labelvalue="Name"
                  inputClasses="text-md font-sans p-0 border"
                  labelClasses="font-sans text-base text-gray-300 pb-1 tracking-tight"
                  type="text"
                />
                <TextField
                  name="description"
                  register={register({ required: "Description is Required!" })}
                  error={errors}
                  mainClass="flex-col"
                  labelvalue="Description"
                  inputClasses="text-md font-sans p-0 border"
                  labelClasses="font-sans text-base text-gray-300 pb-1 tracking-tight"
                  multiline={true}
                  rows={4}
                />
                <AddAvatar
                  click={toggleUser}
                  assign={assign}
                  value="Taskers"
                  mainClass="space-x-2 mb-2"
                  labelClass="text-base text-gray-300 tracking-tight py-1"
                  avatarClass="w-8 h-8"
                />

                <div>
                  <Label
                    value="Attachments"
                    classes={{
                      root:
                        "font-sans text-base pb-1 font-semibold text-gray-300 tracking-normal",
                    }}
                  />
                  <Upload
                    change={addAttachment}
                    value="Add more files.."
                    labelClass="text-gray-900 pl-1 text-md py-1"
                  />
                  {attachment?.map((v, k) => {
                    return (
                      <Icon_Label
                        key={k}
                        tooltipProps={{ open: false }}
                        mainClass="flex mt-2 flex-row-reverse justify-end items-center text-left"
                        labelValue={v?.name}
                        lableClass={{
                          root: `text-ideeza-100 text-md tracking-tighter font-sans mr-2`,
                        }}
                        iconComponent={
                          <IconButton
                            className="outline-none"
                            onClick={removeAttachment.bind(this, k)}
                          >
                            <RiDeleteBinLine className="text-gray-600 cursor-pointer text-md" />
                          </IconButton>
                        }
                      />
                    );
                  })}
                </div>
              </div>
              <div className="w-full md:col-span-2 overflow-hidden">
                <Label
                  value="Deadline"
                  variant="h6"
                  className="font-sans text-lg text-gray-300 tracking-tight"
                />
                <div className="w-full flex items-start justify-center">
                  <Date value={date} change={handleDate} style="w-full" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Select
                    containerClass="bg-gray-150 col-span-2 h-10 text-base text-gray-900 font-sans border border-current"
                    placeholder="Starting Hour"
                  />
                  <Select
                    containerClass="bg-gray-150 h-10 text-base text-gray-900 font-sans border border-current"
                    placeholder="AM"
                  />
                </div>
                <div className="grid grid-cols-3 mt-4 gap-4">
                  <Select
                    containerClass="bg-gray-150 col-span-2 h-10 text-base text-gray-900 font-sans border border-current"
                    placeholder="Note Period"
                  />
                  <Select
                    containerClass="bg-gray-150 h-10 text-base text-gray-900 font-sans border border-current"
                    placeholder="Min"
                  />
                </div>
                <Input
                  name="start_date"
                  register={register({ required: "Start Date Required!" })}
                  classes={{ root: "hidden" }}
                  className="hidden"
                />
              </div>
            </div>
            <div className="flex flex-col justify-end items-end w-full md:px-6 px-4 pb-1">
              <CheckboxFields
                value="Mark as an important"
                labelClass="text-gray-900 tracking-tighter font-medium text-base font-sans"
              />
              <Button
                type="submit"
                value="Add Note"
                classes={{
                  root: `text-white bg-current py-1 leading-7 px-4 rounded-sm tracking-tight font-sans transform-none`,
                }}
              />
            </div>
          </form>
        }
        open={open}
      />
    </>
  );
}

export default MyNotesPopup;
