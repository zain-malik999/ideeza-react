import React from "react";
import { Label, Button, Dropdown } from "atoms";
import { SearchInput } from "molecules";
import { Header } from "orgasms";
function Blog() {
  const data = [{}, {}, {}, {}];
  return (
    <div id="blog" className="blog font-popin">
      <div className="bg-header">
        <Header />
      </div>
      <div className="w-full px-6 md:px-0 flex flex-wrap">
        <div className="md:w-1/4 lg:flex hidden pt-24 items-center justify-between flex-col">
          <img
            src="/assets/landing/blog-banner2.png"
            className="ml-14 rounded-md"
          />
          <div className="w-full headerPlayer mt-20 rounded overflow-hidden">
            <img
              src="/assets/landing/blog-banner2.png"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="lg:w-2/4 md:w-3/4 md:px-0 px-4 md:pt-10 lg:pt-0 flex flex-col md:items-center items-start justify-center">
          <div className="flex items-center mt-8 mb-6">
            <img src="/assets/landing/avatar.png" className="w-16 h-16" />
            <Label
              value="Samantha"
              className="pl-5 text-md text-black-100 font-muli font-semibold"
            />
          </div>
          <Label
            value="How Ideeza can make the world a better place"
            className="xl:text-5xl md:text-4xl text-3xl mt-6 leading-loose text-black-300 font-meri xl:mx-32 md:mx-20 font-light text-center"
          />
          <Label
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sollicitudin fermentum velit, elementum luctus est
            ornare sit amet."
            className="font-muli text-gray-900 text-sm md:text-md my-10 md:px-16 lg:pr-38"
          />
          <Button
            value="Read more"
            className="text-white bg-ideeza-100 transform-none font-muli text-md rounded font-semibold px-16 py-5 hover:shadow-lg outline-none border-0"
          />
        </div>
        <div className="md:w-1/4 md:block hidden pt-20">
          <img src="/assets/landing/blog-banner3.png" className="rounded-md" />
        </div>
      </div>
      <div className="flex flex-wrap flex-col-reverse md:flex-row items-center p-6 md:px-16 pt-20 lg:px-24">
        <div className="md:w-1/2 w-full font-muli flex">
          <Dropdown
            className="p-0 pt-1 pb-0 rounded-none bg-none border-b-4 border-solid hover:border-current focus:border-current border-transparent"
            icons={
              <span className="text-black-100 font-sans cursor-pointer pb-2 px-6 text-lg">
                Electronics
              </span>
            }
            itemsClasses={{
              root:
                "font-sans text-sm px-5 w-48 py-2 whitespace-normal tracking-tight font-sans hover:text-current text-gray-300",
            }}
            options={[
              {
                name: `Category one`,
                value: "one",
              },
              {
                name: `Second category`,
                value: "second",
              },
              {
                name: `Training section`,
                value: "Training",
              },
              {
                name: `Example cat`,
                value: "cat",
              },
            ]}
          />
          <Dropdown
            className="p-0 pt-1 pb-0 rounded-none bg-none border-b-4 border-solid hover:border-current focus:border-current border-transparent"
            icons={
              <span className="text-black-100 font-sans cursor-pointer pb-2 px-6 text-lg">
                Code
              </span>
            }
            itemsClasses={{
              root:
                "font-sans text-sm px-5 w-48 py-2 whitespace-normal tracking-tight font-sans hover:text-current text-gray-300",
            }}
            options={[
              {
                name: `Category one`,
                value: "one",
              },
              {
                name: `Second category`,
                value: "second",
              },
              {
                name: `Training section`,
                value: "Training",
              },
              {
                name: `Example cat`,
                value: "cat",
              },
            ]}
          />
          <Dropdown
            className="p-0 pt-1 pb-0 rounded-none bg-none border-b-4 border-solid hover:border-current focus:border-current border-transparent"
            icons={
              <span className="text-black-100 font-sans cursor-pointer pb-2 px-6 text-lg">
                Cover
              </span>
            }
            itemsClasses={{
              root:
                "font-sans text-sm px-5 w-48 py-2 whitespace-normal tracking-tight font-sans hover:text-current text-gray-300",
            }}
            options={[
              {
                name: `Category one`,
                value: "one",
              },
              {
                name: `Second category`,
                value: "second",
              },
              {
                name: `Training section`,
                value: "Training",
              },
              {
                name: `Example cat`,
                value: "cat",
              },
            ]}
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full mb-5 md:mb-0">
          <SearchInput
            placeholder="Search"
            position="end"
            className="border border-solid rounded-2xl"
            inputClass="text-md py-2 px-4"
          />
        </div>
      </div>
      <div className="flex flex-wrap pt-10 px-6 text-left">
        <div className="flex flex-col xl:px-18 md:px-10 lg:w-2/3 w-full">
          {data?.map((v, k) => {
            return (
              <div className="flex flex-wrap items-start w-full mb-6">
                <div className="md:w-2/5 w-full md:text-left text-center py-2 mb-3">
                  <img
                    src="/assets/landing/blog-post.png"
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="md:w-3/5 md:px-5 md:pl-10 text-left pt-2">
                  <Label
                    value="Making electro cup"
                    className="xl:text-3xl lg:text-2xl text-3xl font-bold font-meri text-black-100 pb-2"
                  />
                  <div className="w-full mb-2 flex space-x-5 items-center">
                    <Label
                      value="Comments (3)"
                      className="font-muli text-gray-900 text-xs md:text-sm"
                    />
                    <Label
                      value="Like (3)"
                      className="font-muli text-gray-900 text-xs md:text-sm"
                    />
                  </div>
                  <div className="py-2 mb-1 w-full flex items-center justify-start text-center">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/assets/landing/ArticleWriter2.png"
                    />
                    <Label
                      value="Samantha"
                      className="font-semibold text-xs md:text-sm ml-3 font-muli text-black-100"
                    />
                  </div>
                  <Label
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque a erat quis nisi lobortis mollis at in nunc. Proin
                auctor dapibus lorem..."
                    className="text-black-100 pt-1 mb-2 pb-4 font-muli max-h-20 overflow-hidden"
                  />
                  <div className="flex flex-wrap items-center justify-between font-muli">
                    <Label
                      value={
                        <>
                          Jul 19, 2019
                          <span className="bg-gray-900 rounded-full h-1 w-1 mx-3"></span>
                          5 mins read
                        </>
                      }
                      className="text-gray-900 mb-3 xl:mb-0 flex items-center text-xs md:text-sm"
                    />
                    <Button
                      value="Read more"
                      className="text-white bg-ideeza-100 transform-none font-muli text-md rounded font-semibold px-6 py-4 hover:shadow-lg outline-none border-0"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="text-center my-16 -ml-3 md:ml-0">
          <el-pagination background layout="pager" :total="2210">
          </el-pagination>
        </div> */}
        </div>
        <div class="flex md:px-10 lg:px-0 lg:w-1/3 w-full flex-col">
          <Label
            value="Popular on Ideeza"
            className="text-black-100 font-semibold w-full border-b pb-2 mb-2 text-2xl"
          />
          {data?.map((v, k) => {
            return (
              <div class="w-full py-3 flex items-start">
                <img
                  class="rounded"
                  src="/assets/landing/blog-banner3.png"
                  width="75px"
                  height="85px"
                  alt
                />
                <div class="w-auto flex flex-col pl-6 px-3">
                  <Label
                    value="The Real Cost of Phone Addiction"
                    className="text-black-100 md:text-lg font-sans text-sm pt-1 md:pt-0"
                  />
                  <Label
                    value="You, like most people, probably use your phone too much. People
                spend an average of four hours a day staring at their handheld
                screen, according to the time-tracking app Moment, and that
                doesn’t include time spent using their phones."
                    className="text-sm pt-1 text-gray-900 max-h-16 overflow-hidden"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
