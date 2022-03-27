import React from "react";
import { Label, Select } from "atoms";
import { CheckboxFields } from "molecules";

function NotificationCard(props) {
  const {
    heading,
    label,
    value,
    value2,
    value3,
    mainClass,
    value1Class,
    placeholder,
    textClass,
    mainLabel,
    checkboxClass,
    contactClass,
    contactLabel1,
    contactLabel2,
    contactLabel3,
    contactLabel4,
    control,
    errors,
  } = props;
  return (
    <div className={`w-full`}>
      <Label
        value={heading}
        classes={{
          root:
            "text-ideeza-100 text-base font-sans font-semibold border-b pb-2 border-gray-750 mb-4",
        }}
      />
      <div className={`bg-white shadow-md p-3 rounded-md ${mainClass}`}>
        <Label
          value={label}
          classes={{
            root: `text-sm leading-6 tracking-normal border-b pb-2 border-gray-750 mb-2 ${mainLabel}`,
          }}
        />
        <div className={`${contactClass}`}>
          <div className="flex justify-between pb-1">
            <Label
              value={contactLabel1}
              classes={{ root: "text-gray-300 text-sm tracking-tight" }}
            />
            <Label
              value={contactLabel2}
              classes={{ root: "text-gray-300 text-sm tracking-tight" }}
            />
          </div>
          <div className="flex justify-between">
            <Label
              value={contactLabel3}
              classes={{
                root: "text-gray-300 text-right text-sm tracking-tight",
              }}
            />
            <Label
              value={contactLabel4}
              classes={{
                root: "text-gray-300 text-right text-sm tracking-tight",
              }}
            />
          </div>
        </div>
        <div className={`${textClass}`}>
          <div className="flex items-start justify-between">
            <Label
              value={contactLabel1}
              classes={{ root: "text-gray-900 text-sm tracking-tight" }}
            />
            <Select
              options={contactLabel2}
              placeholder={placeholder}
              className={
                "text-gray-300 tracking-tight border border-solid border-gray-160 bg-white rounded-none"
              }
            />
          </div>
        </div>
        <div className={`${checkboxClass}`}>
          <CheckboxFields
            control={control}
            error={errors}
            name={"hellos"}
            size="small"
            isControl={true}
            color="gray-300"
            mainClass="-ml-2 -mt-1 items-center"
            containerClass={` ${value1Class}`}
            labelClass={`text-sm tracking-tight text-gray-300`}
            value={value}
          />
          <CheckboxFields
            control={control}
            error={errors}
            controlled={true}
            size="small"
            color="gray-300"
            mainClass="-ml-2 -mt-1 items-center"
            containerClass=""
            labelClass="text-sm tracking-tight text-gray-300"
            value={value2}
          />
          <CheckboxFields
            control={control}
            controlled={true}
            error={errors}
            size="small"
            color="gray-300"
            mainClass="-ml-2 -mt-1 items-center"
            containerClass=""
            labelClass="text-sm tracking-tight text-gray-300"
            value={value3}
          />
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
