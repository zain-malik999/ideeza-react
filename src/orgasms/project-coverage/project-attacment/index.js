import React from "react";
import { Label } from "atoms";
function ProjectAttachment(props) {
  return (
    <div className="rounded-lg w-full overflow-hidden bg-white">
      <Label
        value="Attachments"
        classes={{
          root:
            "bg-gradient-to-l from-purple-400 bg-gradient-to-r to-current text-base tracking-tight font-sans text-white py-3 px-6",
        }}
      />
      <div className="rounded-b-lg bg-white px-5 py-3">
        <Label
          value="3 Pics attached"
          classes={{ root: "text-sm tracking-tight text-gray-300 font-sans" }}
        />
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-5 grid-cols-3 pb-2 pt-1">
          <img src="/assets/images/car.png" className="h-20 w-full" />
          <img src="/assets/images/car.png" className="h-20 w-full" />
          <img src="/assets/images/car.png" className="h-20 w-full" />
        </div>
        <Label
          value="Link attached :"
          classes={{ root: "text-sm tracking-tight font-sans" }}
        />
        <Label
          value="https://www.youtube.com/watch?v=0SPwwpruGIA"
          classes={{
            root:
              "text-sm tracking-tight cursor-pointer font-sans text-blue-900",
          }}
        />
      </div>
    </div>
  );
}
export default ProjectAttachment;
