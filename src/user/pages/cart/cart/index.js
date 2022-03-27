import React from "react";
import { Dropdown, Label } from "atoms";
import { SelectField } from "molecules";
import {
  CartStepper,
  Cart as CartTable,
  CartFooter,
  CartAvatarLabels,
} from "orgasms";

function Cart() {
  return (
    <div>
      <div className="flex justify-center">
        <CartStepper currentStep={1} />
      </div>
      <div className="bg-white shadow rounded-lg md:p-7 p-4">
        <div className="w-full pb-2 xl:px-20 md:px-5">
          <div className="flex items-center justify-between w-full lg:-ml-2">
            <SelectField
              mainClasses="grid grid-cols-2 items-center w-48 -ml-10"
              className="text-xs text-gray-300 border px-2 py-2 rounded border-solid bg-gray-1000 border-gray-160"
              labelClasses="text-gray-300 md:text-sm text-md font-semibold md:font-normal text-right pr-3 font-sans tracking-tight"
              placeholder="Type"
              value="Type:"
              options={[
                {
                  name: "Car",
                  value: "Car",
                },
                {
                  name: "Table",
                  value: "Table",
                },
                {
                  name: "Chare",
                  value: "Chare",
                },
              ]}
            />
            <SelectField
              mainClasses="grid grid-cols-2 items-center w-48"
              className="text-xs text-gray-300 border px-2 py-2 rounded border-solid bg-gray-1000 border-gray-160"
              labelClasses="text-gray-300 md:text-sm text-md font-semibold md:font-normal font-sans tracking-tight"
              placeholder="Optimize by"
              value="Optimize by:"
              options={[
                {
                  name: "Factory Cost",
                  value: "factory_cost",
                },
                {
                  name: "Delivery cost",
                  value: "delivery_cost",
                },
                {
                  name: "All costs",
                  value: "all_costs",
                },
                {
                  name: "Factory time",
                  value: "factory_time",
                },
                {
                  name: "Delivery time",
                  value: "delivery_time",
                },
                {
                  name: "All times",
                  value: "all_times",
                },
              ]}
            />
          </div>
          <div className="pt-14 space-y-16">
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-x-6 md:gap-x-0">
              <CartAvatarLabels
                avatarText="Fabrication"
                options={[
                  {
                    name: "Fedex",
                    value: "Fedex",
                  },
                  {
                    name: "Dhl",
                    value: "Dhl",
                  },
                  {
                    name: "UPS",
                    value: "UPS",
                  },
                  {
                    name: "Regular",
                    value: "Regular",
                  },
                ]}
              />
              <CartAvatarLabels
                avatarText="Assembly"
                img="/assets/images/cart_arrow_2.png"
                img1="/assets/images/cart_arrow_down_2.png"
                imgClass="w-22 hidden md:inline ml-4"
                options={[
                  {
                    name: "Fedex",
                    value: "Fedex",
                  },
                  {
                    name: "Dhl",
                    value: "Dhl",
                  },
                  {
                    name: "UPS",
                    value: "UPS",
                  },
                  {
                    name: "Regular",
                    value: "Regular",
                  },
                ]}
              />
            </div>
            <div className="flex justify-between space-x-6 md:space-x-0 xl:w-4/5">
              <CartAvatarLabels
                avatarText="Dealer"
                img="/assets/images/cart_arrow_3.png"
                imgClass="w-22 absolute hidden md:inline -bottom-3 md:-right-10"
                options={[
                  {
                    name: "Fedex",
                    value: "Fedex",
                  },
                  {
                    name: "Dhl",
                    value: "Dhl",
                  },
                  {
                    name: "UPS",
                    value: "UPS",
                  },
                  {
                    name: "Regular",
                    value: "Regular",
                  },
                ]}
              />
              <CartAvatarLabels
                avatarText="Combining & QAI"
                selectImgClass="md:flex md:items-center md:space-x-2 md:-mt-6 grid grid-cols-2 items-end"
                home={
                  <div className="md:flex flex-col items-center hidden">
                    <img
                      src="/assets/images/home-run.png"
                      alt="home-run"
                      className="w-6"
                    />
                    <Label
                      value="Your Home"
                      className="text-sm text-gray-300 tracking-tight font-sans"
                    />
                  </div>
                }
                slectClass="md:hidden"
                options={[
                  {
                    name: "Fedex",
                    value: "Fedex",
                  },
                  {
                    name: "Dhl",
                    value: "Dhl",
                  },
                  {
                    name: "UPS",
                    value: "UPS",
                  },
                  {
                    name: "Regular",
                    value: "Regular",
                  },
                ]}
              />
            </div>
            <div className="flex justify-center xl:pr-14 bg-gray-150 h-full md:bg-white rounded-lg md:rounded-none p-2 md:p-0">
              <CartAvatarLabels
                mainClasses="flex md:flex-row flex-col items-start md:space-x-1"
                avatarText="CNC Machining"
                img="/assets/images/cart_arrow_3.png"
                imgClass="w-22 absolute hidden md:inline -bottom-3 md:-right-10"
                options={[
                  {
                    name: "Fedex",
                    value: "Fedex",
                  },
                  {
                    name: "Dhl",
                    value: "Dhl",
                  },
                  {
                    name: "UPS",
                    value: "UPS",
                  },
                  {
                    name: "Regular",
                    value: "Regular",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <CartFooter btnNext="hidden" btnContinue="hidden" />
      </div>
      <div className="bg-white shadow rounded-lg p-7">
        <div className="flex items-center justify-between w-full pb-2 pr-2">
          <Label
            value="Lamborghini Aventado and Something"
            className="text-lg cursor-pointer transition-all font-semibold text-current tracking-tight font-sans"
          />
          <div className="flex items-center">
            <SelectField
              mainClasses="grid grid-cols-2 items-center w-48"
              className="text-xs text-gray-300 border p-2 rounded border-solid border-gray-850 border-opacity-40"
              labelClasses="text-gray-300 text-sm font-sans tracking-tight"
              value="Optimize by:"
              options={[
                {
                  name: "Factory Cost",
                  value: "factory_cost",
                },
                {
                  name: "Delivery cost",
                  value: "delivery_cost",
                },
                {
                  name: "All costs",
                  value: "all_costs",
                },
                {
                  name: "Factory time",
                  value: "factory_time",
                },
                {
                  name: "Delivery time",
                  value: "delivery_time",
                },
                {
                  name: "All times",
                  value: "all_times",
                },
              ]}
            />
            <Dropdown
              icons={
                <img
                  src="/assets/images/Mask Group 3.png"
                  alt="setting"
                  className="h-4"
                />
              }
              itemsClasses={{
                root:
                  "font-sans text-sm px-4 w-32 py-3 hover:text-current text-gray-300",
              }}
              options={[
                {
                  name: "View",
                  value: "View",
                },
              ]}
            />
          </div>
        </div>
        <CartTable />
        <div className="flex items-center justify-between w-full pb-2 pr-2 pt-5">
          <Label
            value="Lamborghini Aventado and Something"
            className="text-base hover:text-xl cursor-pointer transition-all font-semibold hover:text-current text-gray-300 tracking-tight font-sans"
          />
          <Dropdown
            icons={
              <img
                src="/assets/images/Mask Group 3.png"
                alt="setting"
                className="h-4"
              />
            }
            itemsClasses={{
              root:
                "font-sans text-sm px-4 w-32 py-3 hover:text-current text-gray-300",
            }}
            options={[
              {
                name: "View",
                value: "View",
              },
            ]}
          />
        </div>
        <CartTable />
        <Label
          value={
            <>
              Total Cost: <span className="text-current">$45,000</span>
            </>
          }
          className="text-gray-300 font-semibold tracking-tight font-sans text-base pt-4 pb-10"
        />
        <CartFooter />
      </div>
    </div>
  );
}
export default Cart;
