import React, { useState, useEffect } from "react";
import { Label } from "atoms";
import { BlogAddArticle } from "orgasms";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { onPostBlog } from "./store/action";
import { useDispatch } from "react-redux";

function AddArticle() {
  const { register, errors, control, handleSubmit } = useForm();
  const userState = useSelector(({ Auth }) => Auth?.user?.id);
  const state = useSelector(({ Blog }) => Blog?.categories);
  const dispatch = useDispatch();
  const [stat, setStat] = useState();
  const [userId, setUserId] = useState();
  const [attachment, setAttachment] = useState([]);
  const addAttachment = (e) => {
    if (e) {
      let data = attachment;
      data.push(e);
      return setAttachment(data);
    }
    return;
  };
  const deleteAttachment = (e) =>
    setAttachment((state) => state.filter((v, k) => k !== e));
  useEffect(() => {
    setUserId(userState);
  }, [userState]);
  useEffect(() => {
    setStat(
      state.map(function (i) {
        return { name: i.name, value: i.id };
      })
    );
  }, [state]);
  const handlerSubmit = async (data) => {
    if (data) {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("categories", [data.categories]);
      formData.append("description", data.description);
      formData.append("image", attachment[0]);
      formData.append("status", "pending");
      return dispatch(onPostBlog(formData));
    }
  };
  return (
    <>
      <Label
        value="Add Article"
        classes={{
          root:
            "text-ideeza-100 pt-4 text-base font-sans tracking-tight font-semibold",
        }}
      />
      <BlogAddArticle
        category={stat}
        user={userId}
        register={register}
        errors={errors}
        control={control}
        handleSubmit={handleSubmit}
        handlerSubmit={handlerSubmit}
        addAttachment={addAttachment}
        deleteAttachment={deleteAttachment}
        attachment={attachment}
      />
    </>
  );
}

export default AddArticle;
