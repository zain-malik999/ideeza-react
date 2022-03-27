import React from "react";
import { Label, Button } from "atoms";
import Proptype from "prop-types";
function Last_Inovation(props) {
  const {
    mainClass,
    aboutClass,
    bottomClass,
    imageClass,
    imageSrc,
    userName,
    userNameClass,
    postDate,
    postDateClass,
    postTitle,
    postDescription,
    postTitleClass,
    postDescriptionClass,
    comments,
    commentsClass,
    buttonValue,
    buttonClass,
  } = props;
  return (
    <div className={`rounded-lg p-2 bg-white ${mainClass}`}>
      <img className={imageClass} src={imageSrc} alt="some" />
      <div>
        <div className={aboutClass}>
          <Label value={userName} classes={userNameClass} />
          <Label value={postDate} classes={postDateClass} />
        </div>
        <Label value={postTitle} classes={postTitleClass} />
        <Label value={postDescription} classes={postDescriptionClass} />
        <div className={bottomClass}>
          <Label value={`${comments} comments`} classes={commentsClass} />
          <Button value={buttonValue} classes={{ root: `${buttonClass} ` }} />
        </div>
      </div>
    </div>
  );
}
Last_Inovation.defaultProps = {
  postTitleClass: { root: "text-base font-semibold tracking-tight font-meri" },
  bottomClass: "pt-4",
  postDescriptionClass: {
    root: "text-md my-3 text-gray-700 h-16 overflow-hidden font-muli",
  },
  mainClass: "pb-0",
  imageClass: "w-full h-48 rounded-md",
  aboutClass: "flex justify-start my-1",
  bottomClass: "flex justify-between items-center my-2",
  postDateClass: { root: "text-gray-900 text-xs font-sans px-2 font-light" },
  userNameClass: {
    root:
      "text-ideeza-100 text-xs font-muli font-medium border-r border-gray-275 pr-3",
  },
  commentsClass: { root: "text-xs text-ideeza-100 tracking-tight font-sans" },
  buttonClass:
    "bg-ideeza-100 px-2 py-1 text-white font-muli text-xs tracking-tight capitalize",
};
Last_Inovation.prototype = {
  mainClass: Proptype.string,
  aboutClass: Proptype.string,
  bottomClass: Proptype.string,
  imageClass: Proptype.string,
  imageSrc: Proptype.string,
  userName: Proptype.string,
  userNameClass: Proptype.object,
  postDate: Proptype.string,
  postDateClass: Proptype.object,
  postTitle: Proptype.string,
  postDescription: Proptype.string,
  postTitleClass: Proptype.object,
  postDescriptionClass: Proptype,
  comments: Proptype.string,
  commentsClass: Proptype.object,
  buttonValue: Proptype.string,
  buttonClass: Proptype.object,
};
export default Last_Inovation;
