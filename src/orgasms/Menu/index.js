import React from "react";
import { FaSave, FaCopy, FaMinusCircle } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { MdNotificationsOff } from "react-icons/md";
import { IoMdFlag } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { Label } from "atoms";

function Menu() {
  return (
    <div className="flex h-full w-4/12 flex-col m-5">
      <div className="flex ">
        <FaSave className="mt-1" />
        <Label
          value="Save"
          className="text-semibold font-medium justify-between ml-4"
        />
      </div>
      <div className="flex ">
        <TiMessages className="mt-1" />
        <Label
          value="Send in a private message"
          className="text-semibold font-medium justify-between ml-4"
        />
      </div>
      <div className="flex ">
        <FaCopy className="mt-1" />

        <Label
          value="Copy link to post  "
          className="text-semibold font-medium justify-between ml-4"
        />
      </div>
      <div className="flex ">
        <FaMinusCircle className="mt-1" />
        <div className="flex flex-col">
          <Label
            value="Hide this post"
            className="text-semibold font-medium justify-between ml-4"
          />
          <Label
            value="I don't want to see this post in my feed"
            className="text-semibold font-medium justify-between ml-4 text-gray-200 -mt-4"
          />
        </div>
      </div>
      <div className="flex">
        <MdNotificationsOff className="mt-1" />
        <div className="flex flex-col">
          <Label
            value="Unfollow John Doe"
            className="text-semibold font-medium justify-between ml-4"
          />
          <Label
            value="Stay connected but hide John's feed"
            className="text-semibold font-medium justify-between ml-4 text-gray-200 -mt-4"
          />
        </div>
      </div>
      <div className="flex">
        <IoMdFlag className="mt-1" />
        <div className="flex flex-col">
          <Label
            value="Repost this post"
            className="text-semibold font-medium justify-between ml-4"
          />
          <Label
            value="This post is offensiveor account is hacked"
            className="text-semibold font-medium justify-between ml-4 text-gray-200 -mt-4"
          />
        </div>
      </div>
      <div className="flex">
        <AiOutlineGlobal className="mt-1" />
        <div className="flex flex-col">
          <Label
            value="Improve my feed"
            className="text-semibold font-medium justify-between ml-4"
          />
          <Label
            value="Get recommended sources to show"
            className="text-semibold font-medium justify-between ml-4 text-gray-200 -mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
