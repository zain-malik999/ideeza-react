import React, { useState } from "react";
import { Input } from "atoms";
import { EditableInput, Icon_Label } from "molecules";
import { RiPencilFill } from "react-icons/ri";
import { IconButton } from "@material-ui/core";
import { Button } from "atoms";
import { FaArrowCircleLeft } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
function ProductHeader(props) {
  const {
    ProjectName,
    inputClass,
    EditableInputClass,
    onEdit,
    state,
    pushToCustomize,
    handleActvieView,
    togglePublicPrivate,
    view,
    edit,
    update,
  } = props;
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="flex justify-between">
        <Button
          value="Go back"
          classes={{
            root:
              "bg-ideeza-100 text-md text-white transform-none font-medium tracking-tight font-sans px-5 py-2 rounded",
          }}
          iconStart={<FaArrowCircleLeft className="text-lg" />}
        />
        <Button
          onClick={togglePublicPrivate.bind(this, {
            project_type:
              state?.project_type === "public" ? "private" : "public",
            id: state?.id,
          })}
          value={
            state?.project_type === "public"
              ? "Turn It Private"
              : "Turn It Public"
          }
          variant="outlined"
          classes={{
            root:
              "text-md text-gray-600 bg-gray-100 font-normal py-2 tracking-tight transform-none",
            outlined: "border-gray-600",
          }}
        />
      </div>
      <div className="pt-2">
        <div className="flex items-center flex-wrap mb-1">
          <EditableInput
            mainClass={`flex items-center flex-row-reverse ${EditableInputClass}`}
            editContanerClass=" flex tems-center text-ideeza-100 justify-center  text-2xl  "
            edit={edit}
            setTitle={setTitle}
            editComponent={
              edit ? (
                <IconButton
                  onClick={update.bind(this, {
                    title: title !== "" ? title : state?.title,
                    id: state?.id,
                  })}
                  className="text-ideeza-100 outline-none"
                >
                  <TiTick />
                </IconButton>
              ) : (
                <IconButton
                  onClick={onEdit.bind(this, state)}
                  className="text-ideeza-100 outline-none"
                >
                  <RiPencilFill />
                </IconButton>
              )
            }
            lableClass={{
              root: "text-gray-300 text-xl font-sans font-bold mr-2",
            }}
            inputClasses={{
              root: "mr-2 border border-current border-solid",
            }}
            handleChange={() => {}}
            labelValue={ProjectName}
          />
          <div className="grid md:flex grid-cols-3 md:ml-10 -ml-2">
            <Input
              placeholder="Type project name here..."
              name="text"
              className={{
                root: `text-sm tracking-tight font-sans md:w-48 text-gray-300 px-0 rounded border border-solid border-gray-160 ${inputClass}`,
              }}
            />
            <Icon_Label
              labelValue="Electronic"
              onClick={handleActvieView.bind(this, "electronic")}
              lableClass={{
                root: `text-md tracking-tight ${
                  view === "electronic"
                    ? "text-ideeza-100"
                    : "text-gray-300 hover:text-ideeza-100"
                }  cursor-pointer`,
              }}
              iconComponent={
                <img src="/assets/images/logo-electron.svg" width="15px" />
              }
              tooltipProps={{ open: false }}
            />
            <Icon_Label
              labelValue="Code"
              lableClass={{
                root: `text-md tracking-tight ${
                  view === "code"
                    ? "text-ideeza-100"
                    : "text-gray-300 hover:text-ideeza-100"
                }  cursor-pointer`,
              }}
              iconComponent={
                <img src="/assets/images/code-slash-outline.svg" width="15px" />
              }
              tooltipProps={{ open: false }}
            />
            <Icon_Label
              labelValue="Cover"
              onClick={handleActvieView.bind(this, "cover")}
              lableClass={{
                root: `text-md tracking-tight ${
                  view === "cover"
                    ? "text-ideeza-100"
                    : "text-gray-300 hover:text-ideeza-100"
                }  cursor-pointer`,
              }}
              iconComponent={
                <img src="/assets/images/cube-outline.svg" width="15px" />
              }
              tooltipProps={{ open: false }}
            />
            <Icon_Label
              labelValue="General"
              lableClass={{
                root: `text-md tracking-tight ${
                  view === "general"
                    ? "text-ideeza-100"
                    : "text-gray-300 hover:text-ideeza-100"
                }  cursor-pointer`,
              }}
              iconComponent={
                <img src="/assets/images/settings-outline.svg" width="15px" />
              }
              tooltipProps={{ open: false }}
            />
            <Icon_Label
              labelValue="App"
              lableClass={{
                root: `text-md tracking-tight ${
                  view === "app"
                    ? "text-ideeza-100"
                    : "text-gray-300 hover:text-ideeza-100"
                }  cursor-pointer`,
              }}
              iconComponent={
                <img src="/assets/images/ionic-ios-apps.svg" width="15px" />
              }
              tooltipProps={{ open: false }}
            />
            <Icon_Label
              labelValue="Network"
              lableClass={{
                root: `text-md tracking-tight ${
                  view === "network"
                    ? "text-ideeza-100"
                    : "text-gray-300 hover:text-ideeza-100"
                }  cursor-pointer`,
              }}
              iconComponent={
                <img src="/assets/images/ionic-ios-cellular.svg" width="15px" />
              }
              tooltipProps={{ open: false }}
            />
            <Icon_Label
              labelValue="Customize"
              onClick={pushToCustomize.bind(this, state?.id)}
              lableClass={{
                root: `text-md tracking-tight ${
                  view === "customize"
                    ? "text-ideeza-100"
                    : "text-gray-300 hover:text-ideeza-100"
                }  cursor-pointer`,
              }}
              iconComponent={
                <img src="/assets/images/tall-hat.svg" width="15px" />
              }
              tooltipProps={{ open: false }}
            />
          </div>
        </div>
        <hr className="md:w-2/3 mb-3 border-gray-750" />
      </div>
    </>
  );
}
ProductHeader.defaultProps = {
  ProjectName: "Lamborgini by car",
};
export default ProductHeader;
