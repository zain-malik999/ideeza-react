import React from "react";
import { Label, Button, Dropdown } from "atoms";
import { Project_Small_Carousel, ImgCard } from "orgasms";
import { AiFillEye } from "react-icons/ai";

function SearchResult() {
  const result = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 xl:pr-36">
      <div className="flex justify-between items-center mb-4 border-b border-gray-425">
        <div className="flex space-x-4">
          <Label
            value="Modals"
            className="text-gray-300 font-sans hover:text-current cursor-pointer"
          />
          <Label
            value="Users"
            className="text-gray-300 font-sans hover:text-current cursor-pointer"
          />
          <Label
            value="Free"
            className="text-gray-300 font-sans hover:text-current cursor-pointer"
          />
          <Label
            value="Store"
            className="text-gray-300 font-sans hover:text-current cursor-pointer"
          />
        </div>
        <div>
          <Dropdown
            icons={
              <>
                <img src="/assets/images/filter.png" className="w-4" alt="" />
                <span className="text-secondary text-sm pl-1 font-sans">
                  Filters
                </span>
              </>
            }
            itemsClasses={{
              root:
                "font-sans text-sm px-3 w-22 py-1 hover:text-current text-gray-300",
            }}
            options={[
              {
                name: "My cost",
                value: "View",
              },
            ]}
          />
        </div>
      </div>
      <Label
        className="text-gray-300 text-lg font-sans tracking-tight font-semibold border-b pb-1.5 border-gray-425"
        value={
          <>
            Top 3 Ideeza's for <span className="text-current">Drone</span>
          </>
        }
      />
      <div className="py-6">
        <ImgCard
          carouselHeight="h-64"
          imgClasses="rounded-xl"
          iconComponent3={
            <img src="/assets/images/like_white_icon.png" alt="" />
          }
          iconComponent2={
            <img src="/assets/images/ideeza_icon_white.png" alt="" />
          }
          iconContanerClass="bg-transparent mr-2"
          iconValue1="{v.view}"
          iconValue2="{v.activities}"
          iconValue3="{v.likes}"
          mainIconClass="flex items-center"
          lableClass={{ root: "sm:text-md  text-xl text-white" }}
          iconComponent1={<AiFillEye className="text-white text-2xl" />}
          iconsClass="flex sm:justify-end justify-center space-x-5 pr-2"
          img="/assets/images/car.png"
          text={
            <>
              <Label
                className="text-white text-sm p-2 px-3 font-sans tracking-tight"
                value="Mech Drone By Tayyab Mughal"
              />
            </>
          }
        />
      </div>
      <Label
        className="text-gray-300 text-lg font-sans tracking-tight font-semibold border-b pb-1.5 border-gray-425"
        value={
          <>
            45 Search Results for <span className="text-current">Drone</span>
          </>
        }
      />
      <div className="grid xl:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 py-3 md:gap-1.5 gap-2">
        {result?.map((v, k) => {
          return (
            <Project_Small_Carousel
              mainClass="rounded-lg border overflow-hidden"
              carouselHeight="h-40 rounded-md"
              iconContanerClass="text-xl text-white"
              iconMainClass="justify-end space-x-2"
              numbering="hidden"
              imageSettingIcon="w-4 h-4"
              imagesIdeezaIcon="w-4 h-3"
              mainIconClass="flex items-center space-x-1 pr-1"
              lableIconClass={{
                root: "font-extrabold mr-1 md:text-xs text-sm pl-1 text-white",
              }}
              titleClass="text-lg"
              nameClass="text-md text-gray-600"
              avatarMainClass="p-1 flex items-center"
              avatarClass="w-8 h-8"
              image={`/assets/images/car.png`}
              like="21"
              view="21"
              notification="21"
              projectName=""
              authorName="Tayyab Mughal"
            />
          );
        })}
      </div>
      <div className="flex justify-center w-full">
        <Button
          value="Load More +"
          className="text-white rounded-full text-xs capitalize mt-4 bg-ideeza-100 px-16 py-2"
        />
      </div>
    </div>
  );
}

export default SearchResult;
