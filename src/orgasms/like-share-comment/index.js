import React from "react";
import { Icon_Label } from "molecules";
import { Label } from "atoms";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdThumbsUp } from "react-icons/io";
function CommentLikeShare(props) {
  const { likes, comments, shares } = props;
  return (
    <div className="md:flex items-center justify-between font-sans border-t border-b py-3 mt-6 border-gray-100">
      <div className="flex -ml-1 md:-ml-0">
        <Icon_Label
          labelValue="Like"
          lableClass={{ root: "font-normal md:text-md text-sm text-gray-300" }}
          iconComponent={<IoMdThumbsUp className="text-lg" />}
          tooltipProps={{ open: false }}
        />
        <Icon_Label
          labelValue="Share"
          lableClass={{ root: "font-normal md:text-md text-sm text-gray-300" }}
          iconComponent={<IoShareSocialOutline className="text-xl" />}
          tooltipProps={{ open: false }}
        />
      </div>
      <div className="flex space-x-4 justify-end">
        <Label
          value={
            <>
              {" "}
              {likes} <span className="text-gray-810">likes</span>{" "}
            </>
          }
          classes={{ root: "md:text-md text-sm text-gray-810" }}
        />
        <Label
          value={
            <>
              {" "}
              {comments} <span className="text-gray-810">comments</span>{" "}
            </>
          }
          classes={{ root: "md:text-md text-sm text-gray-810" }}
        />
        <Label
          value={
            <>
              {" "}
              {shares} <span className="text-gray-810">shares</span>{" "}
            </>
          }
          classes={{ root: "md:text-md text-sm text-gray-810" }}
        />
      </div>
    </div>
  );
}
CommentLikeShare.defaultProps = {
  likes: "12",
  comments: "12",
  shares: "7",
};
export default CommentLikeShare;
