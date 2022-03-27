import React from "react";
import { Select } from "atoms";
import { Icon_Label } from "molecules";
import { AiFillMinusCircle } from "react-icons/ai";

function BussinessInfoCard(props) {
  const {
    placeholder,
    value,
    colContainer,
    gridContainer,
    img,
    errors,
    control,
  } = props;
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="md:w-2/5">
        <Select
          placeholder={placeholder}
          isControlled={true}
          control={control}
          defaultValue="Some"
          error={errors}
          name="line_of_bussiness"
          containerClass="h-9 text-gray-600 border border-gray-160"
          inputClass="text-md tracking-tight p-1 px-2"
          options={[{ value: "Some", name: "Some" }]}
        />
        <div className={`pt-6 space-y-2 ${colContainer}`}>
          <Icon_Label
            mainClass="flex items-center w-full"
            tooltipProps={{ open: false }}
            labelValue={
              <>
                <span>{value}</span>
                <AiFillMinusCircle className="text-red-700 text-xl cursor-pointer" />
              </>
            }
            iconContanerClass="text-lg"
            lableClass={{
              root: `text-gray-300 tracking-tight text-base ml-2 font-sans flex items-center justify-between w-full`,
            }}
            iconComponent={img}
          />
        </div>
      </div>
      <div
        className={`grid md:grid-cols-2 grid-cols-1 pt-5 xl:gap-x-32 md:gap-x-22 gap-y-2 ${gridContainer}`}
      >
        <Icon_Label
          mainClass="flex items-center w-full"
          tooltipProps={{ open: false }}
          labelValue={
            <>
              <span>{value}</span>
              <AiFillMinusCircle className="text-red-700 text-xl cursor-pointer" />
            </>
          }
          iconContanerClass="text-lg"
          lableClass={{
            root: `text-gray-300 tracking-tight text-base ml-2 font-sans flex items-center justify-between w-full`,
          }}
          iconComponent={img}
        />
        <Icon_Label
          mainClass="flex items-center w-full"
          tooltipProps={{ open: false }}
          labelValue={
            <>
              <span>{value}</span>
              <AiFillMinusCircle className="text-red-700 text-xl cursor-pointer" />
            </>
          }
          iconContanerClass="text-lg"
          lableClass={{
            root: `text-gray-300 tracking-tight text-base ml-2 font-sans flex items-center justify-between w-full`,
          }}
          iconComponent={img}
        />
      </div>
    </div>
  );
}
BussinessInfoCard.defaultProps = {
  placeholder: "Choose your method",
  value: "Pick-up",
  img: <img src="/assets/images/service_check.png" alt="" />,
};
export default BussinessInfoCard;
