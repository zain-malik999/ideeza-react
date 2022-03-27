import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { MessageLeft, MessageCenter, MessageRight } from "orgasms";
function message() {
  return (
    <div className="grid md:grid-cols-8 xl:gap-5 gap-2 h-full">
      <div className="lg:col-span-2 md:col-span-3 bg-white border border-blue-950 pb-3">
        <MessageLeft
          value1="Chat"
          icon={<AiOutlineSearch />}
          value2="Favourites"
          value3="Daniel"
          value4="Paul"
          value5="Alicia"
          avatarSrc="/assets/images/4da4bf5d91b22256129afb461b74fc97--male-faces-interesting-faces.png"
          recent="Recent"
          recentInner="(3)"
          title="Laurentius Rando"
          title2="Daniel Malik"
          msg="Tomorrow, I will need your help"
          time="8:00 PM"
          number="(2)"
          number2="(1)"
        />
      </div>
      <div className="lg:col-span-4 md:col-span-5 bg-white border border-blue-950">
        <MessageCenter
          src="assets/images/Group 33.png"
          user="Laurentis Rando"
          status="Online"
          dotBars={<BiDotsVerticalRounded className="text-3xl text-blue-800" />}
          circle={<GoPrimitiveDot className="text-md text-ideeza" />}
          time="Tue, 23:01"
          textMsg="Hi friend. Could you help me with something?"
          textMsg2="Hello, sure. How can I help you?"
          src2="/assets/images/83502b146af6763f50fd5955c5d89a2e.png"
          inputText="Type Something..."
        />
      </div>
      <div className="lg:col-span-2 md:col-span-3 bg-white border border-blue-950 p-3">
        <MessageRight />
      </div>
    </div>
  );
}

export default message;
