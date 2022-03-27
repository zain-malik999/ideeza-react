import React from "react";
import { EditableInput, Comment } from "molecules";
import { Button } from "atoms";
import { RiPencilFill } from "react-icons/ri";
import CommentLikeShare from "../like-share-comment/index";
function ProjectDescription({ detail }) {
  return (
    <div className="">
      <EditableInput
        mainClass="flex flex-col"
        editContanerClass="bg-gray-100 flex tems-center justify-center text-3xl rounded-full w-10 h-10 pt-1"
        edit={!true}
        headerClasses={{
          root:
            "text-xl border-b-2 font-sans font-semibold border-gray-870 pr-4",
        }}
        lableClass={{
          root:
            "text-gray-300 text-md leading-6 tracking-tight font-sans font-lighter mr-2",
        }}
        inputClasses={{ root: "mr-2" }}
        headerLabel="Description"
        editContanerClass=""
        editComponent={
          <Button
            classes={{
              root:
                "text-sm px-5 py-1 transform-none rounded-sm text-ideeza-100",
            }}
            iconEnd={<RiPencilFill className="text-md" />}
            variant="outlined"
            value="Edit"
          />
        }
        childrenClass="pr-4 h-60vh overflow-auto"
        handleChange={() => {}}
        headerMainClasses="flex justify-between mb-5"
        labelValue={detail?.description}
      >
        <CommentLikeShare />
        <div className="mt-4 ">
          <Comment
            nameValue="Mike Tayson"
            jobValue="Consultant at Google .Inc"
            timeValue="3 min ago"
            descriptionValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
            likesValue={`${detail?.likes}Likes`}
            commentValue="90 Comments"
          >
            <Comment
              nameValue="Mike Tayson"
              jobValue="Consultant at Google .Inc"
              timeValue="3 min ago"
              descriptionValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
              likesValue="90 Likes"
              commentValue="90 Comments"
            />
          </Comment>
        </div>
      </EditableInput>
    </div>
  );
}
export default ProjectDescription;
