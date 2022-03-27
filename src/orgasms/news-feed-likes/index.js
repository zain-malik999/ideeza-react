import React from "react";
import { Icon_Label } from "molecules";
import { IoMdShare } from "react-icons/io";

function L_S_C() {
  return (
    <div className="flex space-x-4">
      <Icon_Label
        mainClass="flex items-center"
        iconContanerClass=""
        lableClass={{
          root:
            "text-gray-300 uppercase text-xs tracking-tight font-semibold pl-1",
        }}
        labelValue="Like"
        tooltipProps={{
          title: "Conects",
          placement: "top-end",
          arrow: true,
          open: false,
          classes: {
            tooltip:
              "border-none bg-white px-6 text-black-300 rounded-full py-1 text-sm",
            arrow: "text-white w-2 text-sm ",
          },
        }}
        iconComponent={<img src="/assets/images/like.svg" alt="" srcset="" />}
      />
      <Icon_Label
        mainClass="flex items-center"
        iconContanerClass=""
        lableClass={{
          root:
            "text-gray-300 uppercase text-xs tracking-tight font-semibold pl-2",
        }}
        labelValue="Share"
        tooltipProps={{
          title: "Conects",
          placement: "top-end",
          arrow: true,
          open: false,
          classes: {
            tooltip:
              "border-none bg-white px-6 text-black-300 rounded-full py-1 text-sm",
            arrow: "text-white w-2 text-sm ",
          },
        }}
        iconComponent={<IoMdShare className="text-ideeza-100 text-xl" />}
      />
      <Icon_Label
        mainClass="flex items-center"
        iconContanerClass=""
        lableClass={{
          root:
            "text-gray-300 uppercase text-xs tracking-tight font-semibold pl-2",
        }}
        labelValue="Comment"
        tooltipProps={{
          title: "Conects",
          placement: "top-end",
          arrow: true,
          open: false,
          classes: {
            tooltip:
              "border-none bg-white px-6 text-black-300 rounded-full py-1 text-sm",
            arrow: "text-white w-2 text-sm ",
          },
        }}
        iconComponent={
          <img src="/assets/images/comment.svg" alt="" srcset="" />
        }
      />
    </div>
  );
}

export default L_S_C;
