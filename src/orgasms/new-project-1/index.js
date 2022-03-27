import React from "react";
import { Button, Input } from "atoms";

function NewProject1() {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg md:p-5 p-4">
        <div className="flex justify-center mb-10 w-1/3 mx-auto">
          <Input
            isIcon
            placeholder="Search..."
            className={{
              root: `bg-white border-2 border-solid border-purple-400 w-full text-sm pl-0 py-0`,
            }}
            position="end"
            containerClass="bg-white"
          >
            <span className="pr-2 border-r-2">
              <img src="/assets/images/ideeza.png" className="w-7 h-5" alt="" />
            </span>
          </Input>
        </div>
        <div className="lg:h-70vh h-45vh overflow-y-auto grid md:grid-cols-4 grid-cols-2 gap-4 lg:px-20 md:px-12 pr-4">
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
          <img
            src="/assets/images/new-project/drone.png"
            className="rounded-lg w-full h-full"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex justify-center mt-14">
          <Button
            value="Load More Shots"
            classes={{
              root: "bg-ideeza-100 capitalize text-white tracking-tight px-4",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default NewProject1;
