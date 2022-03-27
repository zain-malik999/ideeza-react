import React from "react";
import { Label } from "atoms";
function ProjectTimeline(props) {
  return (
    <div className="rounded-lg w-full overflow-hidden bg-white">
      <Label
        value="Time Line"
        classes={{
          root:
            "bg-gradient-to-l from-purple-400 bg-gradient-to-r to-current text-base tracking-tight font-sans text-white py-3 px-6",
        }}
      />
      <div className="rounded-b-lg bg-white px-5 py-3"></div>
    </div>
  );
}
export default ProjectTimeline;
