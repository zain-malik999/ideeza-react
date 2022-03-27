import React, { useState } from "react";
import { Button } from "atoms";
import { TextField, SelectField, UploadButton } from "molecules";
import { FiUploadCloud } from "react-icons/fi";

function OpenedPosition() {
  const requir = [
    {
      text: "2+ years industry experience",
    },
    {
      text:
        "Bachelor’s and/or Master’s degree, preferably in CS, or equivalent experience",
    },
    {
      text:
        "Experience shipping one or more Android apps, ideally currently available in the Google Play Store",
    },
    {
      text:
        "Proficiency in Java or Kotlin and knowledge of the Android SDK and open-source Android    ",
    },
    {
      text:
        "Personal projects that show an aptitude for technical excellence or product sense",
    },
    {
      text:
        "Advanced analytical thinking; experienced with making product decisions based on data and A/B",
    },
    {
      text: "Interest in innovations within the mobile industry",
    },
  ];
  const requir2 = [
    {
      text: "Stock",
    },
    {
      text: "Competitive salaries",
    },
    {
      text: "Quarterly employee travel coupon",
    },
    {
      text: "Paid time off",
    },
  ];
  return (
    <div className="w-full shadow-lg">
      <div className="w-full text-left bg-white md:pb-14 pb-6">
        <div className="md:px-16 p-5 overflow-y-auto w-full max-h-72">
          <TextField
            mainClass="flex items-center py-4 border-b border-gray-425"
            inputClasses="w-full p-0 px-2 text-gray-670 text-sm tracking-tight rounded-none font-sans border border-gray-850 border-opacity-40"
            labelClasses="text-black-100 text-base font-sans tracking-tight w-32"
            labelvalue="Name"
            placeholder="John"
          />
          <TextField
            mainClass="flex items-center py-4 border-b border-gray-425"
            inputClasses="w-full p-0 px-2 text-gray-670 text-sm tracking-tight rounded-none font-sans border border-gray-850 border-opacity-40"
            labelClasses="text-black-100 text-base font-sans tracking-tight w-32"
            labelvalue="Last Name"
            placeholder="Doe"
          />
          <TextField
            mainClass="flex items-center py-4 border-b border-gray-425"
            inputClasses="w-full p-0 px-2 text-gray-670 text-sm tracking-tight rounded-none font-sans border border-gray-850 border-opacity-40"
            labelClasses="text-black-100 text-base font-sans tracking-tight w-32"
            labelvalue="Email"
            placeholder="exapmple@gmail.com"
          />
          <TextField
            mainClass="flex items-center py-4 border-b border-gray-425"
            inputClasses="w-full p-0 px-2 text-gray-670 text-sm tracking-tight rounded-none font-sans border border-gray-850 border-opacity-40"
            labelClasses="text-black-100 text-base font-sans tracking-tight w-32"
            labelvalue="Phone"
            placeholder="+12 232 3213"
          />
          <TextField
            mainClass="flex items-center py-4 border-b border-gray-425"
            inputClasses="w-full p-0 px-2 text-gray-670 text-sm tracking-tight rounded-none font-sans border border-gray-850 border-opacity-40"
            labelClasses="text-black-100 text-base font-sans tracking-tight w-32"
            labelvalue="Loacation"
            placeholder="City"
          />
          <TextField
            mainClass="flex items-center py-4 border-b border-gray-425"
            inputClasses="w-full p-0 px-2 text-gray-670 text-sm tracking-tight rounded-none font-sans border border-gray-850 border-opacity-40"
            labelClasses="text-black-100 text-base font-sans tracking-tight w-32"
            labelvalue="Website"
            placeholder="exapmple.com.pk"
          />
          <TextField
            mainClass="flex items-center py-4 border-b border-gray-425"
            inputClasses="w-full p-0 px-2 text-gray-670 text-sm tracking-tight rounded-none font-sans border border-gray-850 border-opacity-40"
            labelClasses="text-black-100 text-base font-sans tracking-tight w-auto whitespace-nowrap pr-4"
            labelvalue="How did you hear about this job"
          />
          <SelectField
            mainClasses="flex items-center py-4 border-b border-gray-425"
            labelClasses="text-black-100 text-base font-sans tracking-tight w-32"
            containerClass="w-full p-0 text-gray-670 h-10 text-sm tracking-tight rounded-none font-sans border border-gray-850 border-opacity-40"
            value="Gender"
            placeholder="Please select your gender"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 md:space-x-4 md:space-y-0 lg:flex justify-between w-full pt-4">
            <div className="flex items-start space-x-3">
              <h2 class="text-black-100 text-base font-sans whitespace-nowrap tracking-tight w-32 pt-2">
                Resume/ CV
              </h2>
              <UploadButton
                mainClass="pb-2 w-full"
                btnClass="border bg-gray-375 border-gray-200 border-dashed xl:w-48 w-full cursor-pointer rounded-full px-2 flex items-center justify-center"
                iconMainClass="flex flex-row-reverse justify-end w-full items-center"
                lableClass="text-gray-670 pl-2 text-sm tracking-tight"
                labelClass="text-gray-670 p-1 py-2 text-md font-sans tracking-tight"
                value="Add file"
                btnValue="Choose"
                labelValue="pdf,2..."
                icon={<FiUploadCloud className="text-current text-2xl mr-1" />}
                iconComponent={
                  <img
                    src="/assets/images/criss-cross.png"
                    alt="upload"
                    className="w-3 ml-1"
                  />
                }
              />
            </div>
            <div className="flex items-start space-x-3">
              <h2 class="text-black-100 text-base font-sans whitespace-nowrap tracking-tight w-32 pt-2">
                Cover Letter
              </h2>
              <UploadButton
                mainClass="pb-2 w-full"
                btnClass="border bg-gray-375 border-gray-200 border-dashed xl:w-48 w-full cursor-pointer rounded-full px-2 flex items-center justify-center"
                iconMainClass="flex flex-row-reverse justify-end w-full items-center"
                lableClass="text-gray-670 pl-2 text-sm tracking-tight"
                labelClass="text-gray-670 p-1 py-2 text-md font-sans tracking-tight"
                value="Add file"
                btnValue="Choose"
                labelValue="pdf,2..."
                icon={<FiUploadCloud className="text-current text-2xl mr-1" />}
                iconComponent={
                  <img
                    src="/assets/images/criss-cross.png"
                    alt="upload"
                    className="w-3 ml-1"
                  />
                }
              />
            </div>
          </div>
          <div className="flex justify-end w-full">
            <Button
              value="SUBMIT APPLICATION"
              className="text-white rounded-full text-2xs mt-4 bg-ideeza-100 uppercase px-8 py-1.5"
            />
          </div>
          <h2 class="text-black-100 w-full text-base">Minimum Requirements:</h2>
          <hr class="bg-grey my-2" />
          {requir?.map((v, k) => {
            return <li class="text-xs text-black-100">{v.text}</li>;
          })}
          <h2 class="text-black-100 w-full text-base mt-5">
            Minimum Requirements:
          </h2>
          <hr class="bg-grey my-2" />
          {requir2?.map((v, k) => {
            return <li class="text-xs text-black-100">{v.text}</li>;
          })}
          <Button
            value="APPLY NOW"
            className="text-white rounded-full text-2xs mt-8 bg-ideeza-100 uppercase px-16 py-2.5"
          />
        </div>
      </div>
    </div>
  );
}

export default OpenedPosition;
