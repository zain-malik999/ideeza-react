import React from "react";
import { Label, Button } from "atoms";
import { BiRadioCircleMarked } from "react-icons/bi";
import {
  AiFillInstagram,
  AiFillDribbbleCircle,
  AiFillBehanceSquare,
  AiFillFacebook,
} from "react-icons/ai";
function MyProfileLeftSide() {
  return (
    <>
      <div className="bg-left pt-10">
        <div className="h-56 w-56 mx-auto rounded-full overflow-hidden shadow-current">
          <img
            src="/assets/images/hire-right-img.png"
            alt=""
            className=""
            srcset=""
          />
        </div>
      </div>
      <div className="p-5 pt-8 pb-3">
        <Label
          value={
            <>
              <span>ABOUT ME</span>
              <hr className="w-full" />
            </>
          }
          classes={{
            root: `space-x-2 whitespace-nowrap text-current caption font-semibold flex items-center`,
          }}
        />
        <div className="flex justify-between space-x-2 my-3 items-start">
          <div className="flex">
            <BiRadioCircleMarked className="text-current text-3xl -ml-1 mt-1" />
            <Label
              value={
                <>
                  <span>4.9</span>
                  <span className="text-blue-100 font-sans capitaize font-thin text-xs pt-1">
                    My score
                  </span>
                </>
              }
              classes={{
                root: `whitespace-nowrap flex flex-col text-4xl -mt-1`,
              }}
            />
          </div>
          <Button
            value="Rookie"
            classes={{
              root:
                "capitalize text-white bg-ideeza-100 font-medium py-1 px-4 tracking-tighter text-xs",
            }}
          />
          <div className="grid gap-2 grid-cols-2">
            <AiFillDribbbleCircle className="text-2xl" />
            <AiFillInstagram className="text-2xl" />
            <AiFillFacebook className="text-2xl text-blue-157" />
            <AiFillBehanceSquare className="text-2xl text-blue-175" />
          </div>
        </div>
        <Label
          value={
            <>
              <span className="w-24">SKILLS</span>
              <hr className="w-full" />
            </>
          }
          classes={{
            root: `space-x-2 pb-1 whitespace-nowrap text-current caption font-semibold flex items-center`,
          }}
        />
        <div className="overflow-y-auto max-h-48 mt-3 pr-3 -mr-2">
          <Label
            className="text-gray-900 font-sans text-md tracking-tight whitespace-nowrap leading-5 grid grid-cols-9 items-center"
            value={
              <>
                <span className="col-span-4 text-gray-300 underline">
                  Product design
                </span>{" "}
                <span className="text-center">-</span>{" "}
                <span className="col-span-4">1 year experience</span>
              </>
            }
          />
        </div>
        <div className="overflow-y-auto max-h-48 pr-3 -mr-2">
          <Label
            className="text-gray-700 font-sans tracking-tight leading-5"
            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </div>
        <Label
          value="Make profile private"
          className="text-center w-100 pt-3 text-current cursor-pointer tracking-tight font-semibold underline"
        />
      </div>
    </>
  );
}
export default MyProfileLeftSide;
