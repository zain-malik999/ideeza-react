import React from "react";
import { AvatarLabel, Icon_Label } from "molecules";
import { Label } from "atoms";
import { AiFillEye } from "react-icons/ai";
function ProjectCarouselContent(props) {
  const {
    carouselHeight,
    mainClass,
    titleClass,
    nameClass,
    avatarClass,
    noClass,
    iconContanerClass,
    mainIconClass,
    lableIconClass,
    imageSettingIcon,
    imagesIdeezaIcon,
    numbering,
    projectName,
    authorName,
    like,
    view,
    authorImage,
    numberingValue,
    image,
    project,
    notification,
    avatarMainClass,
    iconMainClass,
  } = props;
  return (
    <div className={`${mainClass}`}>
      <div className={`${carouselHeight} pb-3 relative`}>
        <img src={image} alt="soem" className="absolute top-0 w-full h-full" />
        <div className="h-full flex flex-col justify-between absolute w-full">
          <div className={`flex justify-start ${numbering}`}>
            <Label
              value={numberingValue}
              classes={{ root: `text-white ${noClass} ml-1` }}
            />
          </div>
          <div
            className={`flex absolute bottom-0 pl-1 mb-2 w-full ${iconMainClass}`}
          >
            <Icon_Label
              mainClass={mainIconClass}
              iconContanerClass={iconContanerClass}
              lableClass={lableIconClass}
              labelValue={like}
              tooltipProps={{
                title: "Actions",
                placement: "top-end",
                arrow: true,
                classes: {
                  tooltip:
                    "border-none bg-white px-6 text-black-300 rounded-full py-1 text-sm",
                  arrow: "text-white w-2 text-md ",
                },
              }}
              iconComponent={
                <img
                  src="/assets/images/settings.png"
                  className={imageSettingIcon}
                  alt="i"
                />
              }
            />
            <Icon_Label
              tooltipProps={{
                title: "Views",
                placement: "top-end",
                arrow: true,
                classes: {
                  tooltip:
                    "border-none bg-white px-6 text-black-300 rounded-full py-1 text-sm",
                  arrow: "text-white w-2 text-md ",
                },
              }}
              mainClass={mainIconClass}
              iconContanerClass={iconContanerClass}
              lableClass={lableIconClass}
              labelValue={view}
              iconComponent={<AiFillEye className="text-black-350" />}
            />
            <Icon_Label
              tooltipProps={{
                title: "Like",
                placement: "top-end",
                arrow: true,
                classes: {
                  tooltip:
                    "border-none bg-white px-6 text-black-300 rounded-full py-1 text-sm",
                  arrow: "text-white w-2 text-md ",
                },
              }}
              mainClass={mainIconClass}
              iconContanerClass={iconContanerClass}
              lableClass={lableIconClass}
              labelValue={notification}
              iconComponent={
                <img
                  src="/assets/images/ideeza.png"
                  className={imagesIdeezaIcon}
                  alt="i"
                />
              }
            />
          </div>
        </div>
      </div>
      <AvatarLabel
        mainClass={avatarMainClass}
        labelValue={authorName}
        avatarSrc={authorImage}
        labelClasses={{
          root: `capitalize font-sans ${nameClass}`,
        }}
        titleLabel={projectName}
        titleLabelClasses={{ root: `${titleClass} font-meri font-semibold` }}
        avatarClasses={{ root: `mr-2 ${avatarClass}` }}
      />
    </div>
  );
}
ProjectCarouselContent.defaultProps = {
  mainClass: "border border-gray-200 bg-white p-2 w-full",
  carouselHeight: "h-48",
  titleClass: "text-xl",
  nameClass: "text-lg text-ideeza-100",
  avatarClass: "w-10 h-10 ",
  noClass: "text-4xl",
  imageSettingIcon: "w-6 h-6 mt-1",
  imagesIdeezaIcon: "w-6 h-4 mt-2",
  authorName: "My Project",
  projectName: "My Project",
  iconMainClass: "justify-between",
};
export default ProjectCarouselContent;
