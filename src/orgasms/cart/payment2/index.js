import React from "react";
import { Label, Input } from "atoms";
import { Icon_Label, TwoLabels, CheckboxFields } from "molecules";
import { IoLocationSharp, IoArrowForwardCircleOutline } from "react-icons/io5";
function Payment2() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:gap-x-32 md:gap-x-20 gap-y-5 pr-10">
        <div className="space-y-2">
          <Label
            value="DELIVERY"
            className="text-base uppercase text-current font-semibold tracking-tight font-sans border-b-2 border-white pb-1"
          />
          <div className="flex items-center justify-between w-full">
            <Icon_Label
              tooltipProps={{ open: false }}
              labelValue="Express Delivery"
              iconContanerClass="text-lg w-6"
              lableClass={{
                root: `text-gray-300 tracking-tight text-md leading-5 font-sans ml-2`,
              }}
              iconComponent={
                <img
                  src="/assets/images/delivery-truck.svg"
                  className="w-5"
                  alt=""
                />
              }
            />
            <TwoLabels
              mainClass="flex items-center space-x-2"
              value="Price:"
              value2="$50"
              labelClass="text-gray-900 text-md tracking-tight font-sans"
              labelClass2="text-gray-300 text-lg tracking-tight font-sans"
            />
          </div>
          <Icon_Label
            mainClass="flex items-start"
            tooltipProps={{ open: false }}
            labelValue="Keas 69 Str. 15234, Chalandri Athens, Greece"
            iconContanerClass="text-lg w-6"
            lableClass={{
              root: `text-gray-300 tracking-tight text-md leading-5 font-sans ml-2 w-28`,
            }}
            iconComponent={
              <IoLocationSharp className="text-gray-910 text-xl" />
            }
          />
        </div>
        <div className="space-y-2">
          <Label
            value="PAYMENT"
            className="text-base uppercase text-current font-semibold tracking-tight font-sans border-b-2 border-white pb-1"
          />
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={`VISA XXXX XXXX XXXX 3734`}
            iconContanerClass="text-lg w-6"
            lableClass={{
              root: `text-gray-300 tracking-tight text-md leading-5 font-sans ml-2`,
            }}
            iconComponent={
              <img
                src="/assets/images/credit-card.svg"
                className="w-5"
                alt=""
              />
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-full pt-3">
        <CheckboxFields
          size="small"
          color="gray-300"
          mainClass="-ml-2 items-start pr-20"
          // containerClass={` ${value1Class}`}
          labelClass={`text-md tracking-tight leading-7 text-gray-300 pl-1`}
          value={
            <>
              I know due to my{" "}
              <span className="text-current font-semibold">
                quote request & manufacture process
              </span>{" "}
              the final cost can be change and be notify under my orders.
            </>
          }
        />
        <TwoLabels
          mainClass="flex items-center space-x-2 text-right justify-end w-64"
          value="Total Cost:"
          value2="$45,000"
          labelClass="text-gray-300 text-md tracking-tight font-sans"
          labelClass2="text-gray-300 text-md tracking-tight font-sans font-semibold"
        />
      </div>
      <div className="flex justify-end w-full">
        <div className="border border-current rounded flex items-center p-2">
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue="Promo Code"
            // mainClass="flex items-center"
            iconContanerClass="text-lg w-6"
            lableClass={{
              root: `text-gray-300 tracking-tight text-md leading-5 font-sans ml-2`,
            }}
            iconComponent={
              <img src="/assets/images/sale.svg" className="w-5" alt="" />
            }
          />
          <div className="flex items-center space-x-1 pr-2">
            <Input
              className={{
                root: `text-sm tracking-tight font-sans border-b border-current bg-transparent p-0 rounded-none w-6 h-6`,
              }}
            />
            <Input
              className={{
                root: `text-sm tracking-tight font-sans border-b border-current bg-transparent p-0 rounded-none w-6 h-6`,
              }}
            />
            <Input
              className={{
                root: `text-sm tracking-tight font-sans border-b border-current bg-transparent p-0 rounded-none w-6 h-6`,
              }}
            />
            <Input
              className={{
                root: `text-sm tracking-tight font-sans border-b border-current bg-transparent p-0 rounded-none w-6 h-6`,
              }}
            />
            <Input
              className={{
                root: `text-sm tracking-tight font-sans border-b border-current bg-transparent p-0 rounded-none w-6 h-6`,
              }}
            />
          </div>
          <IoArrowForwardCircleOutline className="text-lg text-current" />
        </div>
      </div>
      <TwoLabels
        mainClass="flex items-center space-x-2 text-right justify-end pt-2"
        value="Total Cost:"
        value2="$45,000"
        labelClass="text-gray-300 text-md tracking-tight font-sans"
        labelClass2="text-current text-md tracking-tight font-sans font-semibold"
      />
    </div>
  );
}
export default Payment2;
