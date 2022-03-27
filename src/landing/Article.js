import React from "react";
import { Label, Button, Input } from "atoms";
import { Comment, AvatarLabels } from "molecules";
function Article() {
  const data = [{}, {}, {}, {}];
  return (
    <div className="article">
      <div className="w-full">
        <img
          src="/assets/landing/blog-banner2.png"
          className="w-full h-full max-h-80vh"
        />
      </div>
      <div className="flex flex-wrap md:pt-12 pb-16 p-6">
        <div className="font-muli md:pt-28 md:w-3/12 w-full">
          <AvatarLabels
            mainClasses="flex items-center py-2 mb-6"
            avaterClasses="md:h-14 h-12 md:w-14 w-12"
            title="Written By"
            subtitle="Samantha Dolor"
            titleClasses="text-sm text-black-100 font-sans tracking-tight"
            subtitleClasses="text-xl -mt-1 text-black-100 font-semibold tracking-tight"
          />
          <Button
            value="Follow"
            className="text-ideeza-100 border border-solid border-ideeza text-xs font-sans transform-none rounded px-8 py-3 hover:shadow-lg outline-none"
          />
          <div className="border-b border-ideeza w-full h-1 mt-10"></div>
          <div className="text-center pt-4 flex items-center justify-center">
            <div className="flex items-center pr-10">
              <svg
                id="Group_649"
                className="cursor-pointer"
                data-name="Group 649"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="18"
                viewBox="0 0 28.297 22.247"
              >
                <path
                  id="Path_1181"
                  data-name="Path 1181"
                  d="M544.335,1887.14h-6.286l.859-2.317c.592-1.609.209-4.088-1.439-4.958a2.75,2.75,0,0,0-1.89-.257,1.217,1.217,0,0,0-.827.612,3.5,3.5,0,0,0-.264,1.159,5.059,5.059,0,0,1-1.384,2.639c-1.268,1.223-5.2,4.763-5.2,4.763v12.971h13.605a33.909,33.909,0,0,0,3.766-10.106A2.487,2.487,0,0,0,544.335,1887.14Z"
                  transform="translate(-518.075 -1879.538)"
                  fill="#ff00c7"
                />
                <path
                  id="Path_1182"
                  data-name="Path 1182"
                  d="M525.981,1882.24h5.735a.7.7,0,0,1,.438.161.666.666,0,0,1,.183.45v12.939h-6.357a1.105,1.105,0,0,1-.8-.354,1.075,1.075,0,0,1-.331-.8v-11.266a1.023,1.023,0,0,1,.084-.419.953.953,0,0,1,.248-.386.9.9,0,0,1,.367-.225A1.039,1.039,0,0,1,525.981,1882.24Z"
                  transform="translate(-524.848 -1873.544)"
                  fill="#ff00c7"
                />
              </svg>
              <p className="text-black-400 pl-3 text-sm">24</p>
            </div>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              viewBox="0 0 29.385 25.712"
            >
              <path
                id="Icon_awesome-share"
                data-name="Icon awesome-share"
                d="M28.908,11.309l-10.1-8.723a1.378,1.378,0,0,0-2.278,1.042V8.223C7.31,8.328,0,10.176,0,18.912a11.732,11.732,0,0,0,4.783,8.846,1.023,1.023,0,0,0,1.611-1.069c-2.6-8.323,1.234-10.532,10.135-10.66v5.046a1.378,1.378,0,0,0,2.278,1.042l10.1-8.724A1.378,1.378,0,0,0,28.908,11.309Z"
                transform="translate(0 -2.25)"
                fill="#ff00c7"
              />
            </svg>
          </div>
        </div>
        <div className="xl:w-7/12 lg:w-8/12 md:w-9/12 w-full">
          <Label
            value="How Ideeza can make the world a better place"
            className="md:text-5xl text-4xl text-black-300 leading-loose font-meri py-5 xl:px-36 md:px-10 text-center"
          />
          <Label
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eget interdum urna, ac ornare risus. Vivamus finibus
            nisl at mauris condimentum, vitae semper tellus aliquam. In ante
            sapien, congue ut feugiat vel, placerat ut erat. Quisque at nulla
            nisl. Vivamus a egestas magna. Cras condimentum est arcu, eget
            gravida diam congue sed. Phasellus ut fringilla magna, nec sodales
            turpis. Aliquam in velit nunc."
            className="text-gray-900 md:px-10 text-md mb-8 leading-loose font-sans"
          />
          <Label
            value="Quisque ut tellus ac orci varius dignissim nec non orci. Fusce
            tincidunt molestie facilisis. Donec nec euismod dui, ac blandit
            justo. Sed arcu orci, porttitor sit amet metus et, fringilla aliquet
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            eu justo vitae est vestibulum pulvinar. Phasellus tempor vestibulum
            dui. Proin tincidunt arcu quis quam suscipit iaculis. Nam odio nunc,
            pharetra ac malesuada sed, sagittis id elit. Integer convallis leo
            id auctor faucibus."
            className="text-gray-900 md:px-10 text-md mb-8 leading-loose font-sans"
          />
          <Label
            value="Integer dictum tincidunt rhoncus. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Proin sed luctus risus. Nunc tempus
            erat dui. Proin at magna sed lectus vehicula tincidunt at sed sem.
            Sed odio dui, venenatis et metus ut, hendrerit consectetur leo. Sed
            interdum nibh egestas neque faucibus, at mattis velit egestas.
            Mauris condimentum porta neque. Aliquam vulputate nisl sed
            pellentesque laoreet. Integer a posuere ante, ac laoreet leo. Donec
            ut eros at ipsum luctus pulvinar. Integer lorem enim, congue vitae
            vulputate interdum, iaculis sit amet est. Aenean lacinia diam nec
            quam gravida auctor. Aenean sed vulputate felis."
            className="text-gray-900 md:px-10 text-md mb-8 leading-loose font-sans"
          />
          <div className="bg-gray-100 w-full px-4 md:px-10 py-2">
            <div className="flex items-center md:items-start font-muli mt-8 mb-6">
              <img
                src="~/static/images/avatar.png"
                className="rounded-full block lg:w-26 lg:h-26 md:w-20 md:h-20 w-16 h-16"
              />
              <div className="w-full text-left pl-5">
                <Label
                  value="Written By"
                  className="text-sm text-black-100 font-sans tracking-tight"
                />
                <Label
                  value="Samantha Dolor"
                  className="text-xl text-black-100 font-semibold tracking-tight"
                />
              </div>
            </div>
            <Label
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eget interdum urna, ac ornare risus. Vivamus finibus
              nisl at mauris condimentum, vitae semper tellus aliquam. In ante
              sapien, congue ut feugiat vel, placerat ut erat. Quisque at nulla
              nisl. Vivamus a egestas magna. Cras condimentum est arcu, eget
              gravida diam congue sed."
              className="text-gray-900 font-muli text-md mb-8 lg:pl-3 lg:-mt-18 lg:ml-28 leading-loose"
            />
          </div>
          <nuxt-link to="/blog">
            <Label
              value="< Go Back"
              className="text-ideeza-100 text-center py-8 cursor-pointer"
            />
          </nuxt-link>
          <div className="bg-white w-full md:px-10 pt-2">
            <Label
              value="Comments (21)"
              className="text-base pb-2 font-muli text-black-100 font-bold"
            />
            <Comment
              containerClass="rounded bg-white pl-3 w-full"
              avatarClass="w-14 h-14"
              iconClasses="-ml-14"
              nameValue={
                <>
                  <span className="text-lg text-black-100 font-bold">
                    Samantha
                  </span>
                  <span className="text-blue-200 pl-2 font-medium font-mon">
                    Master
                  </span>
                </>
              }
              jobValue="21 mint ago"
              timeValue=""
              jobClass="text-xs text-gray-900"
              descriptionValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
              descriptionClass="text-md tracking-tight font-sans text-gray-600 pt-2 leading-loose"
              likesValue={`20 Likes`}
              commentValue="90 Comments"
            />
            <div className="w-full p-5">
              <Input
                placeholder="Write the comment..."
                className={{
                  root: `text-md p-0 border border-gray-160`,
                }}
                containerClass="text-xs"
                multiline={true}
                rows="5"
              />
              <div className="text-right pt-5">
                <Button
                  value="Publish"
                  className="text-white bg-ideeza-100 text-sm capitalize rounded font-sans px-10 py-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
