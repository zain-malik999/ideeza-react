import React from "react";
import { Label } from "atoms";
import {
  TextField,
  RadioLabel,
  SelectField,
  UploadField,
  CheckboxLabel,
} from "molecules";
import { QuestionnaireOrganism } from "..";
export default function SendQuestionnare() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="">
        <CheckboxLabel
          id="information"
          value="Use the same information from profile"
          labelClass="text-gray-880 text-md font-sans pl-2"
          checkboxClass="w-6 h-6 rounded-sm"
        />
        <TextField
          mainClass="space-y-2 pt-3"
          inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-160"
          labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight"
          labelvalue="Owner of mark"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <Label
          value="Entity Type"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight pt-6 pb-1"
        />
        <RadioLabel
          value="Individual"
          labelClass="font-hel text-gray-300 text-base tracking-tight"
          mainClass="flex items-center space-x-2 -ml-2"
        />
        <RadioLabel
          value="Corporation"
          labelClass="font-hel text-gray-300 text-base tracking-tight"
          mainClass="flex items-center space-x-2 -ml-2"
        />
        <RadioLabel
          value="Limited partnership"
          labelClass="font-hel text-gray-300 text-base tracking-tight"
          mainClass="flex items-center space-x-2 -ml-2"
        />
        <RadioLabel
          value="Sole propietorship"
          labelClass="font-hel text-gray-300 text-base tracking-tight"
          mainClass="flex items-center space-x-2 -ml-2"
        />
        <RadioLabel
          value="Trust"
          labelClass="font-hel text-gray-300 text-base tracking-tight"
          mainClass="flex items-center space-x-2 -ml-2"
        />
        <RadioLabel
          value="Estate"
          labelClass="font-hel text-gray-300 text-base tracking-tight"
          mainClass="flex items-center space-x-2 -ml-2"
        />
        <RadioLabel
          value="Other"
          labelClass="font-hel text-gray-300 text-base tracking-tight"
          mainClass="flex items-center space-x-2 -ml-2"
        />
        <TextField
          mainClass="space-y-2 pt-6"
          inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-160"
          labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight"
          labelvalue="Street address"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <SelectField
          mainClasses="space-y-2 pt-6"
          className="w-full text-md text-gray-900 border p-2 rounded border-solid border-gray-160"
          labelClasses="text-gray-300 md:text-base text-md font-sans tracking-tight"
          value="State"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <SelectField
          mainClasses="space-y-2 pt-6"
          className="w-full text-md text-gray-900 border p-2 rounded border-solid border-gray-160"
          labelClasses="text-gray-300 md:text-base text-md font-sans tracking-tight"
          value="Country for US territory"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <Label
          value="Only for US residents"
          className="pt-6 text-gray-300 font-thin font-sans opacity-70 text-md tracking-tight"
        />
        <TextField
          mainClass="space-y-2 pt-6"
          inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-160"
          labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight"
          labelvalue="Zip/postal code"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <TextField
          mainClass="space-y-2 pt-6"
          inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-160"
          labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight"
          labelvalue="Phone number"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <TextField
          mainClass="space-y-2 pt-6"
          inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-160"
          labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight"
          labelvalue="Fax number"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <Label
          value="Applicant / Owner information"
          className="text-current text-2xl tracking-tight font-sans pt-10 pb-4"
        />
        <CheckboxLabel
          id="information2"
          value="Use the same information from profile"
          labelClass="text-gray-880 text-md font-sans pl-2"
          checkboxClass="w-6 h-6 rounded-sm"
        />
        <TextField
          mainClass="space-y-2 pt-6"
          inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-160"
          labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight"
          labelvalue="Name"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <TextField
          mainClass="space-y-2 pt-6"
          inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-160"
          labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight"
          labelvalue="Designation"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
      </div>
      <div className="md:ml-4">
        <TextField
          mainClass="space-y-2 pt-6"
          inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-160"
          labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight"
          labelvalue="Email address"
        />
        <Label
          value="Email@example.com"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <CheckboxLabel
          id="USPTO"
          value="Check here to authorize the USPTO to communicate with the applicant via e-mail."
          labelClass="text-gray-880 text-md font-sans pl-2"
          checkboxClass="w-6 h-6 rounded-sm"
          mainClass="py-4 items-start"
        />
        <TextField
          mainClass="space-y-2 pt-6"
          inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-160"
          labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight"
          labelvalue="Website address"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <Label
          value="Mark information"
          className="text-current text-2xl tracking-tight font-sans pt-10"
        />
        <TextField
          mainClass="space-y-2 pt-6"
          inputClasses="w-full p-0 text-md tracking-tight font-sans border border-gray-160"
          labelClasses="text-gray-300 flex items-center md:text-base text-md font-sans tracking-tight"
          labelvalue="Mark"
        />
        <Label
          value="Firty Studio"
          className="text-gray-300 md:text-base text-md font-sans tracking-tight"
        />
        <UploadField
          mainClass="space-y-2 pt-8"
          value="Logo (if any)"
          titleClass="text-gray-300 md:text-base text-md font-sans tracking-tight mb-3"
          placeholder=""
          btnValue="Upload"
          inputMainClass="flex"
          inputClass="text-gray-900 p-1 h-7 text-sm"
          btnClass="bg-ideeza-100 text-white tracking-tight text-sm px-10 py-2 rounded capitalize"
        />
        <img
          src="/assets/images/logo/logo.png"
          className="w-18 -mt-3 mb-6"
          alt=""
        />
        <div className="space-y-6">
          <div className="">
            <QuestionnaireOrganism
              inputClass=""
              rows={4}
              number=""
              dot=""
              question="Goods & Services"
              description="Please mention the goods & services you will be selling under this mark."
            />
            <Label
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              className="text-gray-300 md:text-base text-md font-sans tracking-tight"
            />
          </div>
          <div className="">
            <QuestionnaireOrganism
              inputClass=""
              rows={4}
              number=""
              dot=""
              question="First use in ecommerce"
              iconClass="hidden"
            />
            <Label
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              className="text-gray-300 md:text-base text-md font-sans tracking-tight"
            />
          </div>
          <div className="">
            <QuestionnaireOrganism
              inputClass=""
              rows={4}
              number=""
              dot=""
              question="First use in anywhere"
              description="Please provide date of first use of mark in commerce and first use anywhere. If you are intended to use the mark in future. Then you don’t need to provide above dates. "
            />
            <Label
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              className="text-gray-300 md:text-base text-md font-sans tracking-tight"
            />
          </div>
          <div className="">
            <QuestionnaireOrganism
              inputClass=""
              rows={4}
              number=""
              dot=""
              question="Specimen"
              description="** A specimen is an example of how you are actually using your trademark in the marketplace with the goods or services in your application. It’s what consumers see when they are considering whether to purchase the goods or services you provide in connection with your trademark. For example, a specimen could be a photo of a label or tag used on your goods, a photo of outdoor signs for services provided at that location, a website where your goods can be purchased or ordered, or a website advertising your services"
            />
            <Label
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              className="text-gray-300 md:text-base text-md font-sans tracking-tight"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
