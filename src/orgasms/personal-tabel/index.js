import React from "react";
import { PersonalLabel } from "molecules";

function PersonalTabel(props) {
  const { user } = props;
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-5 grid md:grid-cols-2 md:gap-8">
      <div className="">
        <PersonalLabel
          value="Gender"
          value2={`${user?.gender} `}
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Birth date"
          value2={`${user?.date_of_birth} `}
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Address"
          value2={`${user?.address}`}
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Phone number"
          value2={`${user?.phone}`}
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Timezone"
          value2={`${user?.timezone}`}
          value2Class="text-gray-300"
        />

        <PersonalLabel
          value="Languages"
          value2={`${user?.languages}`}
          value2Class="text-gray-300"
        />

        <PersonalLabel
          value="Preferred language"
          value2={`${user?.prefered_language}`}
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Website"
          value2={`${user?.website}`}
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Skills"
          value2={`${user?.skills}`}
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="School"
          value2={`${user?.school}`}
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Work"
          value2={`${user?.work}`}
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Credit/Debit card"
          value2={
            <div className="flex items-center">
              {" "}
              <img
                src="/assets/images/mastercard.png"
                className="w-6 mr-3"
                alt=""
                srcset=""
              />{" "}
              **** **** **** **** 2321{" "}
            </div>
          }
          mainClass="md:border-b"
          value2Class="text-gray-300"
        />
      </div>
      <div className="">
        <PersonalLabel
          value="Paypal account"
          value2="thomashellies@gmail.com"
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Ideeza account number"
          value2="#381203841"
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Log in history"
          value2="Show"
          value2Class="text-ideeza-100"
        />
        <PersonalLabel
          value="Reviews"
          value2="Show"
          value2Class="text-ideeza-100"
        />
        <PersonalLabel
          value="Rating"
          value2="4.9 / 5"
          value2Class="text-gray-300"
        />
        <PersonalLabel
          value="Friends"
          value2="Show"
          value2Class="text-ideeza-100"
        />
        <PersonalLabel
          value="Messages"
          value2="Show shared files"
          value2Class="text-ideeza-100"
        />
        <PersonalLabel
          value="Blog articles"
          value2="Show"
          value2Class="text-ideeza-100"
        />
        <PersonalLabel
          value="Product/project blueprint"
          value2="Show"
          value2Class="text-ideeza-100"
        />
        <PersonalLabel
          value="Tasklist"
          value2="Show"
          value2Class="text-ideeza-100"
        />
        <PersonalLabel
          value="Track order"
          value2="2 active products"
          mainClass="border-b"
          value2Class="text-ideeza-100"
        />
      </div>
    </div>
  );
}

export default PersonalTabel;
