import React from "react";
import { Rnd } from "react-rnd";
import { Input, Label } from "atoms";
export default function CoverScale({ register }) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,.1)",
    borderRadius: "10px",
    padding: "0 20px",
  };

  return (
    <Rnd
      style={style}
      default={{
        x: 0,
        y: 500,
        width: 280,
        height: 80,
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <Input
          register={register({})}
          name="x"
          placeholder="X"
          className={{ root: "bg-gray-1000" }}
        />
        <Label
          varaint="h5"
          value="X"
          classes={{ root: "mt-2 font-sans font-semibold" }}
        />
      </div>
      <div className="flex mx-4 flex-col items-center justify-center">
        <Input
          register={register({})}
          name="y"
          placeholder="Y"
          className={{ root: "bg-gray-1000" }}
        />
        <Label
          varaint="h5"
          value="Y"
          classes={{ root: "mt-2 font-sans font-semibold" }}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Input
          register={register({})}
          name="z"
          placeholder="Z"
          className={{ root: "bg-gray-1000" }}
        />
        <Label
          varaint="h5"
          value="Z"
          classes={{ root: "mt-2 font-sans font-semibold" }}
        />
      </div>
    </Rnd>
  );
}
