import React from "react";
import { TabArticalUpper } from "../..";
import { AiFillEye } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
function TabArtical() {
  const data = [{}, {}, {}, {}];
  return (
    <div className="max-h-96 space-y-3 overflow-y-auto">
      {data.map((v, k) => {
        return (
          <div className="pr-5">
            <TabArticalUpper
              articalValue1="How Ideeza became famous in 1 week"
              articalDate={
                <>
                  Nov 17, 2018
                  <span className="text-blue-175 pl-2 underline">Approved</span>
                </>
              }
              articalText={
                <>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here'
                  <span className="text-current pl-1 cursor-pointer hover:underline">
                    See more
                  </span>{" "}
                </>
              }
              valueIcon={<AiFillEye className="text-xl text-gray-700" />}
              valueLabel="211"
              valueIcon2={
                <img
                  src="/assets/images/ideeza-icon-gray.png"
                  alt="Icon"
                  className="text-lg text-gray-700 w-5"
                />
              }
              valueLabel2="76"
              valueIcon3={<FaThumbsUp className="text-lg text-gray-700" />}
              valueLabel3="76"
            />
          </div>
        );
      })}
    </div>
  );
}
export default TabArtical;
