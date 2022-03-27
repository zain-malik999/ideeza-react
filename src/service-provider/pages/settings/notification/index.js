import React from "react";
import { NotificationCard } from "orgasms";
import { Button } from "atoms";
function Notification() {
  return (
    <>
      <div className="lg:w-8/12 xl:w-7/12 md:w-10/12 mt-5">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 md:gap-y-14 gap-y-8">
            <NotificationCard
              mainLabel="text-gray-900"
              contactClass="hidden"
              textClass="hidden"
              heading="Messages"
              label="Receive messages to:"
              value="Email"
              value2="Notification to mobile devices"
              value3="Text messages"
            />
            <NotificationCard
              mainLabel="text-gray-300"
              contactClass="hidden"
              textClass="hidden"
              heading="Reminders"
              label="Recieve reminders, requests to write a review, and other reminders related to your activities on Ideeza."
              value="Email"
              value2="Notification to mobile devices"
              value3="Text messages"
            />
            <NotificationCard
              mainLabel="text-gray-300"
              contactClass="hidden"
              textClass="hidden"
              heading="Account support"
              label="We may need to send you messages regarding your account, legal notifica-tions, security and privacy matters, and customer support requests."
              value="Email"
              value2="Notification to mobile devices"
              value3="Text messages"
            />
          </div>
          <div className="grid grid-cols-1 md:gap-y-0 gap-y-8">
            <NotificationCard
              mainClass="pr-7 pb-5"
              mainLabel="text-gray-900"
              contactClass=""
              contactLabel1="Email:"
              contactLabel2="tayyab.8563@gmail.com"
              contactLabel3="Phone number:"
              contactLabel4="+123 *** **567"
              textClass="hidden"
              heading="Contact Information"
              label={
                <>
                  This information can be edited from your profile page.{" "}
                  <span className="text-current underline">Edit profile</span>{" "}
                </>
              }
              checkboxClass="hidden"
              value="Email"
              value2="Notification to mobile devices"
              value3="value3"
            />
            <NotificationCard
              mainLabel="hidden"
              contactClass="hidden"
              heading="Text Messages"
              placeholder="+123 **** **874"
              contactLabel1="Receive SMS notification to:"
              checkboxClass="hidden"
            />
            <NotificationCard
              mainLabel="text-gray-300"
              contactClass="hidden"
              textClass="hidden"
              heading="Policy and community"
              label="Recieve updates on regulations and stay informed about advocacy efforts to create responsible laws on Ideeza."
              value="Email"
              value2="Notification to mobile devices"
              value3="Text messages"
              value1Class="disabled:opacity-50"
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <Button
            value="Save"
            classes={{
              root:
                "bg-ideeza-100 text-white tracking-tight capitalize px-12 py-2 text-sm",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Notification;
