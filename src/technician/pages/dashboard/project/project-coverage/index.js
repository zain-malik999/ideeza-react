import React from "react";
import { TwoLabels } from "molecules";
import {
  ProjectCoverage as ProjectCover,
  ProjectsDescription,
  ProjectAttachment,
  ProjectTimeline,
  ProjectTable,
} from "orgasms";
function ProjectCoverage() {
  return (
    <div>
      <TwoLabels
        mainClass="flex items-center space-x-2"
        value="Price:"
        value2="$270"
        labelClass="text-gray-300 text-base tracking-tight font-sans"
        labelClass2="text-current text-base tracking-tight font-sans"
      />
      <ProjectCover />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-12 gap-y-8 pt-5">
        <ProjectsDescription />
        <ProjectAttachment />
      </div>
      <div className="space-y-5 pt-8">
        <ProjectTable />
        <ProjectTimeline />
      </div>
    </div>
  );
}
export default ProjectCoverage;
