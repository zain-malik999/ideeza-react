import React from "react";
import { SocialMediaAccount1 } from "..";
import { Button } from "atoms";

function SocialMediaAccount() {
  return (
    <>
      <div className="rounded-lg bg-white shadow-md space-y-2 p-5 md:px-6 px-4 w-full">
        <SocialMediaAccount1
          value="Facebook"
          note="Sign in with Facebook and discover your trusted connections to people all over the world."
          btnValue="Disconnect"
          btnClass="bg-gray-150 border-gray-425 border border-solid text-gray-300"
        />
        <SocialMediaAccount1
          value="LinkedIn"
          note="Create a link to your professional life by connecting your Ideeza and LinkedIn accounts."
          btnValue="Connect"
          btnClass="bg-ideeza-100 text-white"
        />
        <SocialMediaAccount1
          value="Google"
          note="Connect your Ideeza account to your Google account for simplicity and ease."
          btnValue="Disconnect"
          btnClass="bg-gray-150 border-gray-425 border border-solid text-gray-300"
        />
        <div className="flex flex-col items-center py-4">
          <Button
            value="Add more social accounts"
            className="capitalize px-14 py-2 md:text-md text-sm font-sans tracking-tight text-ideeza-100 border-solid border border-ideeza-100"
          />
        </div>
      </div>
    </>
  );
}

export default SocialMediaAccount;
