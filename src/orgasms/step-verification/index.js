import React, { useState } from "react";
import { Label, Avatar, Button } from "atoms";
import { AvatarPopup } from "..";
function StepVerification() {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  return (
    <div className="rounded-lg bg-white shadow-md md:p-5 md:px-6 p-4 grid md:grid-cols-7">
      <div className="md:col-span-2 mx-auto mb-4 md:mb-0">
        <Avatar className="md:h-36 lg:h-38 xl:w-40 h-32 md:w-36 lg:w-38 xl:h-40 w-32" />
      </div>
      <div className="flex-col md:col-span-5 md:pl-3">
        <Label
          value="First impressions count, we all know this. And we only get one chance to make a good first impression. Perhaps in person, your charm and use of language can camouflage your faults, but in the online world. your first impression is made with your face – your profile picture."
          className="text-gray-300 tracking-tight text-base font-sans"
        />
        <div className="flex items-center justify-between pt-5 space-x-2">
          <Button
            onClick={toggleOpen}
            value="upload a file"
            className="capitalize md:text-base text-sm font-sans tracking-tight text-ideeza-100 border-solid border border-ideeza-100 md:w-40 lg:w-auto w-36 lg:px-8"
          />
          <div className="flex items-center space-x-1">
            <hr className="border-t md:w-6 w-2 border-gray-850" />
            <Label
              value="OR"
              className="text-gray-850 font-sans text-base tracking-tight"
            />
            <hr className="border-t md:w-6 w-2 border-gray-850" />
          </div>
          <Button
            value="choose your avatar"
            onClick={toggleOpen}
            className="capitalize md:text-base text-sm font-sans tracking-tight text-ideeza-100 border-solid border border-ideeza-100 md:w-40 lg:w-auto w-36 lg:px-3"
          />
        </div>
        <AvatarPopup open={popup} toggleOpen={toggleOpen} />
      </div>
    </div>
  );
}
export default StepVerification;
