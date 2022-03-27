import React, { useState } from "react";
import {
  CartStepper,
  CartFooter,
  ServicesHeader,
  AddServiceSection,
  AddServiceDrawer,
} from "orgasms";
import { FaChevronLeft } from "react-icons/fa";
export default function Manufacture() {
  const [show, setShow] = useState(false);
  const toggeShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="bg-white shadow rounded-lg">
        <div className="w-full lg:p-7 p-4 md:pt-2 lg:pt-2 lg:pb-5">
          <ServicesHeader
            value1="Manufacture:"
            placeholder="Lamboghini"
            InputPlaceholder="Search services..."
          />
        </div>
        <hr />
        <div className="lg:pl-7 px-4 pt-8 relative">
          <div className="lg:pr-14 space-y-14 max-h-70vh overflow-y-auto mr-2">
            <AddServiceSection />
            <AddServiceSection />
            <AddServiceSection />
            <AddServiceSection />
            <AddServiceSection />
            <AddServiceSection />
            <AddServiceSection />
            <AddServiceSection />
          </div>
          <div className="flex items-center h-full absolute top-0 right-0">
            <div
              className="bg-gray-300 px-2 py-4 rounded-l-2xl shadow cursor-pointer"
              onClick={toggeShow}
            >
              <FaChevronLeft color="white" fontSize="17" />
            </div>
          </div>
          <div className="absolute right-0 top-0 pt-5 z-50">
            {show === true ? (
              <AddServiceDrawer
                value="Selected Manufacture"
                onClick={toggeShow}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="lg:p-7 p-4">
          <CartFooter mainClass="" />
        </div>
      </div>
    </div>
  );
}
