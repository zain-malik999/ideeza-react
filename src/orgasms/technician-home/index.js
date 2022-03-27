import React from "react";
import { Label } from "atoms";
import { Icon_Label } from "molecules";
function TechnicianHome(props) {
  const {
    mainClass,
    morningTitle,
    morningTitleClass,
    cards,
    cardMainClass,
    cardLabelMain,
    innerLabel,
    cardIcon,
    cardValueI,
    cardValueII,
    cardValue1,
    cardValue2,
    cardValue3,
    cardValue4,
    cardValue5,
    cardValue6,
  } = props;
  return (
    <>
      <div className={mainClass}>
        <Label
          value={morningTitleClass}
          classes={{
            root: `${morningTitle}`,
          }}
        />
        <div className={cards}>
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={
              <>
                {cardValueI}
                <span className={innerLabel}>{cardValueII}</span>
              </>
            }
            iconContanerClass="text-lg"
            lableClass={{
              root: `${cardLabelMain}`,
            }}
            iconComponent={
              <img src="/assets/images/Group 2835.png" className={cardIcon} />
            }
            mainClass={`xl:col-start-2 ${cardMainClass}`}
          />
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={
              <>
                {cardValue1}
                <span className={innerLabel}>{cardValue2}</span>
              </>
            }
            iconContanerClass="text-lg"
            lableClass={{
              root: `${cardLabelMain}`,
            }}
            iconComponent={
              <img src="/assets/images/content.png" className={cardIcon} />
            }
            mainClass={cardMainClass}
          />
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={
              <>
                {cardValue3}
                <span className={innerLabel}>{cardValue4}</span>
              </>
            }
            iconContanerClass="text-lg"
            lableClass={{
              root: `${cardLabelMain}`,
            }}
            iconComponent={
              <img src="/assets/images/search.png" className={cardIcon} />
            }
            mainClass={cardMainClass}
          />
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue={
              <>
                {cardValue5}
                <span className={innerLabel}>{cardValue6}</span>
              </>
            }
            iconContanerClass="text-lg"
            lableClass={{
              root: `${cardLabelMain}`,
            }}
            iconComponent={
              <img
                src="/assets/images/ionicons_svg_md-radio-button-on.png"
                className={cardIcon}
              />
            }
            mainClass={cardMainClass}
          />
        </div>
      </div>
    </>
  );
}
TechnicianHome.defaultProps = {
  mainClass:
    "lg:flex w-full justify-between items-center space-y-2 lg:space-y-0",
  cards: "w-full grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3",
  morningTitle:
    "font-sans md:whitespace-nowrap md:pr-5 lg:text-3xl text-2xl text-black-100",
  cardLabelMain: "text-black-100 font-sans flex flex-col md:text-md text-sm",
  cardMainClass:
    "flex-row-reverse flex items-center bg-white shadow-full rounded-sm justify-between px-4 py-3",
  innerLabel: "text-3xl font-sans",
  cardIcon: "h-8 mt-2",
};
export default TechnicianHome;
