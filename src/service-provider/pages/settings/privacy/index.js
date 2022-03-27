import React from "react";
import { PrivacySection } from "molecules";
import { Button } from "atoms";
function Privacy() {
  return (
    <>
      <div className="lg:w-8/12 xl:w-7/12 md:w-10/12 md:mt-5 mt-2">
        <div className="space-y-6">
          <PrivacySection
            heading="Social Connections"
            label1Value="Social Connections highlights your Ideeza activity, which may include your username, Facebook profile photo, and recent locations you visited to your Facebook friends who are also on Ideeza."
            label2Value="If you turn off this feature, you will still be connected to Facebook, but your Ideeza activity will not be shared to other Facebook friends on Ideeza. Your public Ideeza activity (such as public reviews) on the platform will still be shown to other Ideeza users."
            label3Value="If you want to disconnect your Facebook account from Ideeza, go to General to learn more."
            lableBottom="Share my activity with my Facebook friends that are also on Ideeza (recommended)"
          />
          <PrivacySection
            heading="Add Ideeza to Facebook Timeline"
            label1Value="Check this box to automatically publish your Wish Lists to Facebook."
            label2Value="They'll show up in your Facebook Timeline and your friends' News Feed and Ticker."
            lableBottom="Share my activity with my Facebook friends that are also on Ideeza (recommended)"
            label3Class="hidden"
          />
          <PrivacySection
            heading="Your Products & Profile in Search Engines"
            label1Value="Search engines attract lots of traffic to your profile and generate interest and connections for our users."
            label2Value="Perhaps you want to be listed on Ideeza but have concerns about your products and profile being advertised more widely. You can turn off search indexing, preventing search engines such as Google and Bing from displaying your pages in their search results."
            lableBottom="Include my profile and products in search engines like Google and Bing (recommended)"
            label3Class="hidden"
          />
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

export default Privacy;
