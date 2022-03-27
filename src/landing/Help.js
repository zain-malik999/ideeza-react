import React from "react";
import { UserHelp, AskedQuestions, Header } from "orgasms";
function Help() {
  return (
    <>
      <div className="bg-header">
        <Header />
      </div>
      <div className="xl:px-32 md:px-16 lg:pt-16 md:pt-10 p-4">
        <UserHelp labelClass="text-gray-300" imgDiv="hidden" />
        <AskedQuestions labelClass="text-gray-300" />
      </div>
    </>
  );
}

export default Help;
