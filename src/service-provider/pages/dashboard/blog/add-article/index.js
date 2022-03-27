import React, { useState, useEffect } from "react";
import { Label, Button } from "atoms";
import { BlogAddArticle } from "orgasms";
import { useSelector } from "react-redux";
function AddArticle() {
  const state = useSelector(({ categories }) => categories);
  const [stat, setStat] = useState();
  useEffect(() => {
    setStat(state);
  }, [state]);
  return (
    <>
      <Label
        value="Add Article"
        classes={{
          root:
            "text-ideeza-100 pt-4 text-base font-sans tracking-tight font-semibold",
        }}
      />
      <BlogAddArticle category={stat} />
      <div className="bg-white p-5 rounded-lg shadow-md mt-7 py-7 flex justify-end space-x-6">
        <Button
          classes={{
            root: "bg-ideeza-100 capitalize px-6 tracking-tight text-white",
          }}
          value="Publish"
        />
        <Button
          classes={{
            root:
              "bg-white border border-solid border-gray-750 capitalize px-6 tracking-tight text-gray-300",
          }}
          value="Preview"
        />
      </div>
    </>
  );
}

export default AddArticle;
