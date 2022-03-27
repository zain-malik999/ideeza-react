import React from "react";
import { Icon_Label, AvatarLabel, AvatarLabels } from "molecules";
import { Label, Input } from "atoms";
import { AvatarLabelInput } from "..";
import { BsSearch } from "react-icons/bs";
function Messages() {
  return (
    <div className="bg-gray-200 space-y-3">
      <div className="flex p-3 space-x-4">
        <div className="w-1/6 bg-white">
          <Icon_Label
            labelValue="Chat"
            mainClass="flex flex-row-reverse justify-between font-sans tracking-tight p-2 border-b"
            iconComponent={<BsSearch />}
            iconContanerClass="text-gray-600 mt-2"
          />
          <Label
            value="Favourites"
            classes={{ root: `font-sans tracking-tight text-md mt-3 ml-3` }}
          />
          <div className="flex space-x-4 ml-3">
            <AvatarLabel
              labelValue="Daniel"
              labelClasses="text-gray-600"
              mainClass="flex-col text-gray-500"
            />
            <AvatarLabel
              labelValue="Paul"
              labelClasses="text-gray-600"
              mainClass="flex-col text-gray-500"
            />
            <AvatarLabel
              labelValue="Alicia"
              labelClasses="text-gray-600"
              mainClass="flex-col text-gray-500"
            />
          </div>
          <Label
            value="Recent (3)"
            className="font-sans tracking-tight text-md mt-3 ml-3"
          />
          <div className="flex-col space-y-3">
            <div className="flex pb-2 xl:ml-3 border">
              <AvatarLabels
                title="Laurentius Rando"
                titleClasses=""
                subtitle="Tomorrow, I will need your help"
                subtitleClasses="font-sans tracking-tight text-xs text-gray-200"
              />
              <Label
                value="8:00 PM"
                className="font-sans tracking-tight text-xs text-gray-200 self-center txet-right"
              />
            </div>
            <div className="flex pb-2 xl:ml-3 border">
              <AvatarLabels
                title="Laurentius Rando"
                titleClasses=""
                subtitle="Tomorrow, I will need your help"
                subtitleClasses="font-sans tracking-tight text-xs text-gray-200"
              />
              <Label
                value="8:00 PM"
                className="font-sans tracking-tight text-xs text-gray-200 mt-4 self-center"
              />
            </div>
            <div className="flex pb-2 xl:ml-3 border">
              <AvatarLabels
                title="Laurentius Rando"
                titleClasses=""
                subtitle="Tomorrow, I will need your help"
                subtitleClasses="font-sans tracking-tight text-xs text-gray-200"
              />
              <Label
                value="8:00 PM"
                className="font-sans tracking-tight text-xs text-gray-200 mt-4 self-center"
              />
            </div>
            <div className="flex pb-2 xl:ml-3 border">
              <AvatarLabels
                title="Laurentius Rando"
                titleClasses=""
                subtitle="Tomorrow, I will need your help"
                subtitleClasses="font-sans tracking-tight text-xs text-gray-200"
              />
              <Label
                value="8:00 PM"
                className="font-sans tracking-tight text-xs text-gray-200 mt-4 self-center"
              />
            </div>
            <div className="flex pb-2 xl:ml-3 border">
              <AvatarLabels
                title="Laurentius Rando"
                titleClasses=""
                subtitle="Tomorrow, I will need your help"
                subtitleClasses="text-xs text-gray-400"
              />
              <Label
                value="8:00 PM"
                className="font-sans tracking-tight text-xs text-gray-200 mt-4 self-center"
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-1/3 pl-3">
          <div className="flex justify-between w-full p-4 border-b">
            <AvatarLabels
              title="Laurentius Rando"
              titleClasses=""
              subtitle="Online"
              subtitleClasses=""
            />
            <img
              src="assets/images/Group 866.png"
              alt="3dots"
              className="h-5 pr-4 mt-4"
            />
          </div>
          <AvatarLabelInput
            date="Tue, 23:01"
            msg="Hello, sure. How can I help you?"
            subtitleClasses="border p-4 text-center"
          />
          <AvatarLabelInput
            mainClass="flex flex-row-reverse"
            date="Tue, 23:01"
            msg="Hi friend. Could you help me with something?"
            subtitleClasses="bg-ideeza-100 text-white p-4 text-center"
            avaterClasses="ml-4 mr-3 h-16 w-16"
          />
          <AvatarLabelInput
            date="Tue, 23:01"
            msg="I need someone to walk out with my dog. if you play?"
            subtitleClasses="border p-4"
          />
          <AvatarLabelInput
            mainClass="flex flex-row-reverse"
            date="Tue, 23:01"
            msg="Of course. When you need it?"
            subtitleClasses="bg-ideeza-100 text-white p-4 text-center"
            avaterClasses="ml-4 mr-3 h-16 w-16"
          />
          <AvatarLabelInput
            date="Tue, 23:01"
            msg="Around 11 AM tomorrow."
            subtitleClasses="border p-4"
          />
          <div className="flex flex-row-reverse">
            <AvatarLabelInput
              mainClass="flex flex-row-reverse"
              date="Tue, 23:01"
              msg="Sure. Let me send you the custom offer"
              subtitleClasses="bg-ideeza-100 text-white p-4 text-center"
              avaterClasses="ml-4 mr-3 h-16 w-16"
            />
            <img
              src="/assets/images/Mask Group 3.png"
              alt="setting"
              className="mt-10 h-5"
            />
          </div>
          <div className="flex justify-evenly mt-6">
            <img src="/assets/images/mood.png" alt="mood" />
            <Input
              type="text"
              placeholder="Type something..."
              className="outline-none p-4"
            />
            <img src="/assets/images/send.png" alt="send" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
