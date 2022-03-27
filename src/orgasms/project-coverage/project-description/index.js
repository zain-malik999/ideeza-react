import React from "react";
import { Label } from "atoms";
function ProjectsDescription(props) {
  const { project } = props;

  return (
    <div className="rounded-lg w-full lg:col-span-2 overflow-hidden bg-white">
      <Label
        value="Project Description"
        classes={{
          root:
            "bg-gradient-to-l from-purple-400 bg-gradient-to-r to-current text-base tracking-tight font-sans text-white py-3 px-6",
        }}
      />
      <Label
        value={project?.description}
        classes={{
          root: "text-md leading-6 font-sans text-gray-300 bg-white p-5",
        }}
      />
    </div>
  );
}
export default ProjectsDescription;
