import React from "react";
import { Label } from "atoms";
import { HiArrowNarrowRight } from "react-icons/hi";
export default function Questions(props) {
  const {
    mainClass,
    heading,
    headingClass,
    firstQuestion,
    firstQuestionClass,
    secondQuestion,
    secondQuestionClass,
    thirdQuestion,
    thirdQuestionClass,
    viewAllClass,
  } = props;
  return (
    <div className={mainClass}>
      <Label value={heading} classes={{ root: `${headingClass}` }} />
      <Label
        value={firstQuestion}
        classes={{ root: `${firstQuestionClass}` }}
      />
      <Label
        value={secondQuestion}
        classes={{ root: `${secondQuestionClass}` }}
      />
      <Label
        value={thirdQuestion}
        classes={{ root: `${thirdQuestionClass}` }}
      />
      <div className="flex items-center pt-2">
        <HiArrowNarrowRight className="text-ideeza-100" size="20" />
        <Label value="View all" classes={{ root: `${viewAllClass}` }} />
      </div>
    </div>
  );
}
Questions.defaultProps = {
  headingClass:
    "font-sans tracking-tight border-b border-gray-750 text-lg mb-1 pb-1",
  firstQuestionClass:
    "font-sans tracking-tight text-gray-700 pt-2 text-md leading-4",
  secondQuestionClass:
    "font-sans tracking-tight  text-gray-700 pt-2 text-md leading-4",
  thirdQuestionClass:
    "font-sans tracking-tight  text-gray-700 pt-2 text-md leading-4",
  viewAllClass:
    "text-ideeza-100 font-sans tracking-tight text-md pl-2 leading-4",
};
