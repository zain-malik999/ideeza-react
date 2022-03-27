import React from "react";
import { LabelButton } from "molecules";
import { BlogArticlePreview } from "orgasms";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useHistory, useLocation } from "react-router-dom";
function BlogPreview() {
  const history = useHistory();
  // const location = useLocation();
  const handlePush = (e) => history.push(e);
  return (
    <>
      <LabelButton
        mainClass="justify-between"
        value="Article preview"
        labelClass="text-ideeza-100 text-base font-sans tracking-tight font-semibold"
        btnValue="Back Step"
        onClick={handlePush.bind(this, "Blog")}
        iconStart={<IoArrowBackCircleSharp />}
        btnClass="bg-ideeza-100 p-2 px-4 text-white"
      />
      <div className="bg-white rounded-md mt-3">
        <BlogArticlePreview />
      </div>
    </>
  );
}

export default BlogPreview;
