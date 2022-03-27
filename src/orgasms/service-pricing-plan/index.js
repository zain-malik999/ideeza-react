import React from "react";
import { Label, Button } from "atoms";
import { Icon_Label } from "molecules";
function ServicePricingPlan(props) {
  const {
    src,
    ImgClass,
    value,
    valueClass,
    price,
    priceClass,
    description,
    btnValue,
    btnClass,
    value1,
    value2,
    value3,
    value4,
  } = props;
  return (
    <div className="w-full bg-white rounded-lg shadow-full p-5 text-center space-y-2 pt-10">
      <img src={src} className={`mx-auto ${ImgClass}`} alt="logo" />
      <Label
        value={value}
        classes={{
          root: `text-uppercase text-gray-300 text-xl text-center font-sans tracking-tight ${valueClass}`,
        }}
      />
      <Label
        value={
          <>
            $<span className="text-4xl">{price}</span>/mo.{" "}
          </>
        }
        classes={{
          root: `text-purple-300 text-lg font-semibold text-center font-lato tracking-tight ${priceClass}`,
        }}
      />
      <Label
        value={description}
        classes={{
          root: `text-gray-600 text-sm lg:px-2 h-20 overflow-hidden text-center font-lato font-light tracking-tight md:w-3/4 mx-auto`,
        }}
      />
      <Button
        value={btnValue}
        classes={{
          root: `md:w-3/4 mx-auto tracking-tight py-1 mt-2 font-light font-mont text-md transform-none ${btnClass}`,
        }}
      />
      <div className="w-full pt-2">
        <Icon_Label
          mainClass="border-t flex items-center py-2 border-gray-750"
          tooltipProps={{ open: false }}
          labelValue={value1}
          iconContanerClass="text-lg w-6"
          lableClass={{
            root: `text-gray-600 tracking-tight text-md text-left font-mont pl-4`,
          }}
          iconComponent={
            <img src="/assets/images/verify-circular.png" className="w-8" />
          }
        />
        <Icon_Label
          mainClass="border-t flex items-center py-2 border-gray-750"
          tooltipProps={{ open: false }}
          labelValue={value2}
          iconContanerClass="text-lg w-6"
          lableClass={{
            root: `text-gray-600 tracking-tight text-md text-left font-mont pl-4`,
          }}
          iconComponent={
            <img src="/assets/images/verify-circular.png" className="w-8" />
          }
        />
        <Icon_Label
          mainClass="border-t flex items-center py-2 border-gray-750"
          tooltipProps={{ open: false }}
          labelValue={value3}
          iconContanerClass="text-lg w-6"
          lableClass={{
            root: `text-gray-600 tracking-tight text-md text-left font-mont pl-4`,
          }}
          iconComponent={
            <img src="/assets/images/verify-circular.png" className="w-8" />
          }
        />
        <Icon_Label
          mainClass="border-t flex items-center pt-2 border-gray-750"
          tooltipProps={{ open: false }}
          labelValue={value4}
          iconContanerClass="text-lg w-6"
          lableClass={{
            root: `text-gray-600 tracking-tight text-md text-left font-mont pl-4`,
          }}
          iconComponent={
            <img src="/assets/images/verify-circular.png" className="w-8" />
          }
        />
      </div>
    </div>
  );
}
ServicePricingPlan.defaultProps = {
  src: "/assets/images/project-management.png",
  ImgClass: "w-12 h-12",
  value: "ESSENTIAL",
  price: "29",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  btnValue: "Currently Activated",
  btnClass: "bg-gray-280 text-gray-300",
  value1: "3 Different Products",
  value2: "1 Agent",
  value3: "100MB File Upload",
  value4: "1 Month Free Trial",
};
export default ServicePricingPlan;
