import React from "react";
import { Label } from "atoms";
import Proptype from "prop-types";
function Activity(props) {
  const {
    date,
    title,
    description,
    mainClass,
    dateClass,
    titleClass,
    descriptionClass,
  } = props;
  return (
    <div className={mainClass}>
      <div className="flex items-center justify-start flex-col p-0 pt-1 pr-2">
        <div className="h-3 w-3">
          <div className="h-3 w-3 bg-primary rounded-full"></div>{" "}
        </div>
        <div className="border-l border-primary h-full"></div>
      </div>
      <div className="p-0">
        <Label
          classes={{ root: `p-0 m-0 text-base ${dateClass}` }}
          value={date}
        />
        <Label
          classes={{ root: `p-0 pb-1 m-0 text-body-2 ${titleClass}` }}
          value={title}
        />
        <Label
          classes={{
            root: `p-0 m-0 text-body-2 leading-none ${descriptionClass}`,
          }}
          value={description}
        />
      </div>
    </div>
  );
}
Activity.defaultProps = {
  mainClass: "flex font-sans tracking-normal",
  dateClass: "text-blue-100",
  titleClass: "text-blue-100",
  descriptionClass: "text-blue-100",
};
Activity.prototype = {
  mainClass: Proptype.string,
  date: Proptype.string,
  title: Proptype.string,
  description: Proptype.string,
};
export default Activity;
