import React from "react";
import { Label, Dropdown } from "atoms";
import { BsThreeDots } from "react-icons/bs";

function GalleryCard(props) {
  const { img, value, imgClasses } = props;
  return (
    <>
      <div className="w-full">
        <div className={`p-0 h-36 relative w-full`}>
          <img
            src={img}
            alt="car"
            className={`${imgClasses} absolute top-0 w-full h-full`}
          />
          <div className={`absolute top-0 right-0`}>
            <Dropdown
              icons={<BsThreeDots className={`text-xl text-white -mt-1`} />}
              itemsClasses={{
                root:
                  "font-sans text-md px-3 w-32 py-2 hover:text-current text-gray-300",
              }}
              options={[
                {
                  name: "Edit",
                  value: "Edit",
                },
                {
                  name: "Remove",
                  value: "Remove",
                },
              ]}
            />
          </div>
        </div>
        <Label
          value={value}
          className="text-gray-300 font-sans leading-6 tracking-tight text-base"
        />
      </div>
    </>
  );
}
GalleryCard.defaultProps = {
  iconsClass: "flex justify-between space-x-2",
  img: "/assets/images/feeds/feeds-car.png",
};

export default GalleryCard;
