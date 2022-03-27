import React from "react";
import { TextField, SelectField, UploadField } from "molecules";
import { IoClose } from "react-icons/io5";
import { Button } from "atoms";

function BlogAddArticle({
  category,
  register,
  errors,
  control,
  handleSubmit,
  handlerSubmit,
  addAttachment,
  attachment,
  deleteAttachment,
}) {
  return (
    <>
      <form onSubmit={handleSubmit(handlerSubmit)}>
        <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-1 lg:gap-10 md:gap-6 md:gap-y-8 gap-y-5 mt-4">
          <div className="md:col-span-2 w-full bg-white p-5 space-y-4 rounded-lg shadow-md">
            <TextField
              error={errors}
              register={register({ required: "Article Is Required" })}
              name="title"
              mainClass="flex flex-col w-full"
              labelClasses="w-full font-sans text-sm tracking-tight text-gray-300 pb-2"
              placeholder="Name"
              inputClasses="w-full py-0 text-xs px-0 border border-gray-160"
              labelvalue="Article name"
            />
            <SelectField
              ref={register({ required: "Category Is Compulsory" })}
              name="categories"
              mainClasses="flex flex-col w-full"
              labelClasses="w-full font-sans text-sm tracking-tight text-gray-300 pb-2"
              containerClass="w-full text-xs text-gray-900 border p-0 h-10 rounded border-solid border-gray-160"
              placeholder="Category"
              options={category}
              value="Categories"
              error={errors}
              control={control}
              isControlled={true}
            />
            <UploadField
              inputMainClass="flex justify-between w-full space-x-2.5"
              ref={register({ required: "Image Is Compulsory" })}
              error={errors}
              name="image"
              value="Image"
              placeholder="No file choosen"
              btnValue="Choose"
              labelValue="Something.png"
              add={addAttachment}
              deleted={deleteAttachment}
              iconComponent={
                <IoClose className="text-ideeza-100 cursor-pointer text-2xl mr-2 -ml-2" />
              }
              attachment={attachment}
            />
          </div>
          <div className="lg:col-span-4 col-span-3 bg-white p-5 rounded-lg shadow-md">
            <TextField
              error={errors}
              register={register({ required: " Decription Is Required" })}
              mainClass="flex flex-col w-full"
              labelClasses="w-full font-sans text-sm font-semibold tracking-tight text-gray-300 pb-2"
              placeholder="Description"
              inputClasses="w-full text-sm p-2 border border-gray-160"
              multiline={true}
              rows="20"
              name="description"
              labelvalue="Description"
            />
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md md:mt-7 mt-5 py-7 flex justify-end md:space-x-6 space-x-3">
          <Button
            classes={{
              root: "bg-ideeza-100 capitalize px-6 tracking-tight text-white",
            }}
            value="Publish"
            type="submit"
          />
          <Button
            classes={{
              root:
                "bg-white border border-solid border-gray-750 capitalize px-6 tracking-tight text-gray-300",
            }}
            value="Preview"
          />
        </div>
      </form>
    </>
  );
}

export default BlogAddArticle;
