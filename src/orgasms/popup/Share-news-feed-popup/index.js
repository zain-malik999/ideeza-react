import React from "react";
import { Modal, Button } from "atoms";
import { TextField } from "molecules";
import { IoHappySharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
function ShareNewsFeedPopup(props) {
  const { open, toggleOpen, social, shareToNewsFeed } = props;
  const { register, errors, handleSubmit } = useForm();
  const onSubmitHandler = (e) => shareToNewsFeed(e);
  return (
    <div>
      <Modal
        width="sm"
        close={toggleOpen}
        header={<></>}
        content={
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex w-full flex-col"
          >
            {social ? (
              <div className="flex space-x-2">
                <img
                  src="/assets/images/facebook.png"
                  alt="fb"
                  className="w-5"
                />
                <img
                  src="/assets/images/Icon awesome-linkedin-in.png"
                  alt="ldn"
                  className="w-5"
                />
                <img
                  src="/assets/images/instagram.png"
                  alt="insta"
                  className="w-5"
                />
                <img
                  src="/assets/images/twitter.png"
                  alt="twtr"
                  className="w-5"
                />
                <img
                  src="/assets/images/brand.png"
                  alt="tiktok"
                  className="w-5"
                />
              </div>
            ) : null}
            <TextField
              mainClass="flex flex-col mt-3"
              labelvalue={
                social ? "Share on Social Platform" : "Share In News Feed"
              }
              register={register({ required: "Please Enter Description!" })}
              labelClasses="font-bold text-lg -mt-2 mb-2 text-ideeza-100 pb-2"
              multiline="true"
              rows="10"
              name="text"
              error={errors}
              placeholder="Write the text here..."
              inputClasses="w-full p-0 text-sm tracking-tight font-sans border border-gray-850 border-opacity-40"
            />
            <>
              <div className="flex items-center w-full pr-1 justify-between mt-2">
                <IoHappySharp className="text-blue-150 text-4xl" />
                <Button
                  type="submit"
                  value="Share"
                  className="text-white bg-ideeza-100 transform-none rounded-sm tracking-tight py-1 px-12"
                />
              </div>
            </>
          </form>
        }
        open={open}
      />
    </div>
  );
}

export default ShareNewsFeedPopup;
