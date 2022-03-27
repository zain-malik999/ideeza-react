import React from "react";
import { Label } from "atoms";
function DashboardImgCard(props) {
  const { onClick } = props;
  return (
    <>
      <div
        className={`p-4 bg-cover bg-dashboard font-sans flex flex-col items-center justify-start bg-no-repeat h-full w-full`}
      >
        <Label
          value="Let's get you started"
          classes={{ root: `my-4 mt-6 text-2xl text-white` }}
        />
        <Label
          value="Now is your time to change the world."
          classes={{
            root: `text-base m-0 tracking-tight text-center text-white`,
          }}
        />
        <Label
          value="Dream, invent, create."
          classes={{
            root: `text-base m-0 tracking-tight text-center text-white`,
          }}
        />
        <img
          onClick={onClick}
          src="/assets/images/user-ideeza.png"
          className="mt-16 cursor-pointer"
          alt=""
          width="90px"
        />
      </div>
    </>
  );
}

DashboardImgCard.defaultProps = {};

export default DashboardImgCard;
