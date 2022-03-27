import React from "react";
import { Label } from "atoms";
function AboutHeader(props) {
  const { value, user } = props;
  return (
    <div className="bg-gray-150">
      <Label
        value="See and manage the data in your IDEEZA's account"
        classes={{ root: `text-ideeza-100 text-2xl tracking-normal font-bold` }}
      />
      <Label
        value="Your data includes the things you do, like searches, and the things you create, like new products."
        classes={{ root: `mt-3 text-sm text-gray-600 tracking-tight` }}
      />
      <div className="grid md:grid-cols-5 gap-7 mt-6">
        <div className="flex items-center md:col-span-2 space-x-7">
          <img
            src={`${
              user?.cover_photo
                ? user?.cover_photo
                : "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1218407987?b=1&k=6&m=1218407987&s=612x612&w=0&h=qcSUpMACVcryz4b_wHTRW7ZSxpG3VtkJRn-bPibCT1Q="
            }`}
            alt="thumbnail"
            className="w-32 h-32 rounded-xl"
          />
          <div className="flex flex-col">
            <Label
              value={`${user?.first_name} ${user?.last_name}`}
              classes={{ root: `text-xl text-gray-300 font-sans` }}
            />
            <Label
              value={`${user?.email}`}
              classes={{
                root: `text-xs mt-2 text-gray-600 tracking-tight font-sans`,
              }}
            />
            <Label
              value={`${user?.last_login}`}
              classes={{
                root: `text-xs text-gray-600 tracking-tight font-sans`,
              }}
            />
            <div className="mt-2 flex space-x-3">
              <img
                src="/assets/images/Icon awesome-facebook.png"
                className="w-5"
                alt="fb"
              />
              <img
                src="/assets/images/Icon awesome-linkedin-in.png"
                className="w-5"
                alt="in"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md px-4 py-3 md:col-span-3">
          <Label
            value="About me"
            classes={{ root: `text-lg text-gray-300 font-bold font-sans` }}
          />
          <Label
            value={`${user?.description}`}
            classes={{ root: `text-sm mt-2 text-gray-850 font-sans` }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
