import React from "react";
import { Label, Button } from "atoms";
import { Header } from "orgasms";
function SuccessStory() {
  const stories = [
    {
      title: "Google was working with us",
      img: "/assets/landing/christiann.png",
    },
    {
      title: "Google was working with us",
      img: "/assets/landing/christiann.png",
    },
    {
      title: "Google was working with us",
      img: "/assets/landing/christiann.png",
    },
  ];
  return (
    <div className="font-popin">
      <div class="bg-header">
        <Header />
      </div>
      <div class="bg-success xl:h-80vh md:h-50vh h-50vh">
        <div class="w-full h-full flex justify-center items-center">
          <Button
            value="Try it yourself"
            className="text-white btn-gradient rounded-sm text-sm px-14 py-5 pt-6 hover:shadow-lg outline-none border-0"
          />
        </div>
      </div>
      <div class="px-6 md:px-16 pb-8">
        <div class="border border-ideeza-100 md:w-9/12 lg:w-8/12 border-opacity-50 overflow-auto py-8 md:pl-10 pl-6 pr-2 -mt-28 mx-auto bg-white">
          <Label
            value="This company makers made it!"
            className="text-center md:pr-8 pr-6 md:w-6/12 lg:w-8/12 mx-auto text-3xl md:text-4xl mb-16 font-meri"
          />
          <div class="overflow-auto md:pr-12 pr-6 max-h-80vh">
            <Label
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget interdum urna, ac ornare risus. Vivamus finibus
              nisl at mauris condimentum, vitae semper tellus aliquam. In ante
              sapien, congue ut feugiat vel, placerat ut erat. Quisque at nulla
              nisl. Vivamus a egestas magna. Cras condimentum est arcu, eget
              gravida diam congue sed. Phasellus ut fringilla magna, nec sodales
              turpis. Aliquam in velit nunc."
              className="text-gray-600 text-md mb-8 leading-loose"
            />
            <img
              src="/assets/landing/christiann.png"
              class="mb-8 w-full"
              alt=""
            />
            <Label
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget interdum urna, ac ornare risus. Vivamus finibus
              nisl at mauris condimentum, vitae semper tellus aliquam. In ante
              sapien, congue ut feugiat vel, placerat ut erat. Quisque at nulla
              nisl. Vivamus a egestas magna. Cras condimentum est arcu, eget
              gravida diam congue sed. Phasellus ut fringilla magna, nec sodales
              turpis. Aliquam in velit nunc."
              className="text-gray-600 text-md mb-8 leading-loose"
            />
            <Label
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget interdum urna, ac ornare risus. Vivamus finibus
              nisl at mauris condimentum, vitae semper tellus aliquam. In ante
              sapien, congue ut feugiat vel, placerat ut erat. Quisque at nulla
              nisl. Vivamus a egestas magna. Cras condimentum est arcu, eget
              gravida diam congue sed. Phasellus ut fringilla magna, nec sodales
              turpis. Aliquam in velit nunc."
              className="text-gray-600 text-md mb-8 leading-loose"
            />
            <Label
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget interdum urna, ac ornare risus. Vivamus finibus
              nisl at mauris condimentum, vitae semper tellus aliquam. In ante
              sapien, congue ut feugiat vel, placerat ut erat. Quisque at nulla
              nisl. Vivamus a egestas magna. Cras condimentum est arcu, eget
              gravida diam congue sed. Phasellus ut fringilla magna, nec sodales
              turpis. Aliquam in velit nunc."
              className="text-gray-600 text-md mb-8 leading-loose"
            />
            <Label
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget interdum urna, ac ornare risus. Vivamus finibus
              nisl at mauris condimentum, vitae semper tellus aliquam. In ante
              sapien, congue ut feugiat vel, placerat ut erat. Quisque at nulla
              nisl. Vivamus a egestas magna. Cras condimentum est arcu, eget
              gravida diam congue sed. Phasellus ut fringilla magna, nec sodales
              turpis. Aliquam in velit nunc."
              className="text-gray-600 text-md mb-8 leading-loose"
            />
          </div>
        </div>
      </div>
      <div class="w-full bg-gray-150 mt-8 p-6">
        <h2 class="text-center font-semibold text-3xl md:text-4xl my-2 font-meri">
          Similar stories
        </h2>
        <div class="bg-ideeza-100 w-8 h-1 mb-8 mx-auto"></div>
        <div class="lg:p-10 lg:px-16 grid md:grid-cols-3 grid-cols-1 flex-wrap justify-between">
          {stories?.map((v, k) => {
            return (
              <>
                <div class="stories_card w-full">
                  <img src={v.img} alt="" />
                  <div class="py-2 text-left">
                    <Label
                      value={
                        <>
                          Alex Gordon{" "}
                          <span class="text-gray-900">| 21 October, 2019</span>
                        </>
                      }
                      className="text-ideeza-100 my-1 text-xs"
                    />
                    <Label
                      value={v.title}
                      className="font-semibold my-2 font-meri"
                    />
                    <Label
                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      className="text-gray-600 font-pop p leading-loose"
                    />
                    <div class="flex items-center justify-between pt-4">
                      <Label
                        value="14 comments"
                        className="text-ideeza-100 text-sm com"
                      />
                      <Button
                        value="Read more"
                        className="text-white transform-none bg-ideeza-100 rounded-md hover:shadow-lg outline-none"
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div class="w-full text-center mt-8 p-6 py-10 md:pt-20 md:pb-16">
        <Label
          value="Want to work with us?"
          className="text-center font-semibold text-3xl md:text-4xl mb-12 font-meri"
        />
        <Button
          value="Yes, Continue"
          className="text-white btn-gradient mx-auto transform-none rounded-md md:text-lg tex-md px-14 py-4 pt-5 hover:shadow-lg outline-none border-0 font-sans tracking-tight"
        />
      </div>
    </div>
  );
}

export default SuccessStory;
