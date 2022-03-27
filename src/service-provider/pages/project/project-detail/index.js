import React from "react";
import {
  ProjectDetail as ProjectDetailOrg,
  ProjectDescription,
  ProjectProducts,
} from "orgasms";
function ProjectDetail() {
  return (
    <div className="md:p-6 p-4 bg-white rounded-lg">
      <ProjectDetailOrg />
      <div className="grid lg:grid-cols-2 gap-6 mt-10 grid-col-1">
        <ProjectDescription />
        <ProjectProducts />
      </div>
    </div>
  );
}
export default ProjectDetail;
