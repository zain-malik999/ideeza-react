import React from "react";
import { Label, Avatar } from "atoms";
import { Icon_Label } from "..";
import { MdThumbUp } from "react-icons/md";
export default function Comment(props) {
  const {
    mainClass,
    avatarClass,
    containerClass,
    nameValue,
    nameClass,
    jobValue,
    jobClass,
    timeValue,
    timeClass,
    descriptionValue,
    descriptionClass,
    likeIconClass,
    likesValue,
    likesClass,
    iconClasses,
    commentValue,
    commentClass,
    maincontainerClass,
  } = props;
  return (
    <div className={mainClass}>
      <Avatar className={avatarClass} />
      <div className={maincontainerClass}>
        <div className={containerClass}>
          <div className="flex justify-between items-start">
            <div>
              <Label value={nameValue} classes={{ root: `${nameClass}` }} />
              <Label value={jobValue} classes={{ root: `${jobClass}` }} />
            </div>
            <Label value={timeValue} classes={{ root: `${timeClass}` }} />
          </div>
          <Label
            value={descriptionValue}
            classes={{ root: `${descriptionClass}` }}
          />
          <div
            className={`md:flex items-center md:space-x-3 py-2 ${iconClasses}`}
          >
            <Icon_Label
              tooltipProps={{ open: false }}
              labelValue={
                <>
                  {" "}
                  <span className="text-lg pr-1">•</span> {likesValue}{" "}
                </>
              }
              iconContanerClass="text-lg"
              lableClass={{
                root: `text-blue-350 tracking-tight text-sm ml-2 font-sans ${likesClass}`,
              }}
              iconComponent={<MdThumbUp className={likeIconClass} />}
            />
            <Icon_Label
              tooltipProps={{ open: false }}
              labelValue={
                <>
                  {" "}
                  <span className="text-lg pr-1">•</span> {commentValue}{" "}
                </>
              }
              iconContanerClass="text-lg"
              lableClass={{
                root: `text-blue-350 tracking-tight text-sm ml-2 font-sans ${commentClass}`,
              }}
              iconComponent={<img src="/assets/images/comment.svg" />}
            />
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}
Comment.defaultProps = {
  mainClass: "flex w-full mt-6",
  avatarClass: "w-11 h-11",
  containerClass: "rounded bg-blue-450 p-3 px-4 w-full",
  nameClass: "text-gray-300 font-sans text-md",
  jobClass: "text-gray-670",
  timeClass: "text-gray-810 font-sans",
  descriptionClass:
    "text-md tracking-tight font-thin font-sans text-blue-350 pt-2",
  likeIconClass: "text-ideeza-100 text-xl",
  commentIconClass: "text-ideeza-100 text-2xl ml-10",
  maincontainerClass: "pl-2",
};
