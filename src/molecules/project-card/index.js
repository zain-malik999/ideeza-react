import React from "react";
import { Label, Avatar } from "atoms";
import Proptype from "prop-types";
function Project_Card(props) {
  const {
    mainClass,
    imageSrc,
    nameContainerClass,
    nameClass,
    nameValue,
    imageClass,
    cardNumber,
    cardNumberClass,
    cardTitleClass,
    cardTitle,
  } = props;
  return (
    <div className={mainClass}>
      <div className={`${mainClassImage}`}>
        <img src={imageSrc} className={imageClass} />
        <Label value={cardNumber} classes={cardNumberClass} />
      </div>
      <Label value={cardTitle} classes={cardTitleClass} />
      <div className={nameContainerClass}>
        <Avatar />
        <Label classes={nameClass} value={nameValue} />
      </div>
    </div>
  );
}
Project_Card.prototype = {
  mainClassImage: Proptype.string,
  mainClass: Proptype.string,
  imageSrc: Proptype.string,
  nameContainerClass: Proptype.string,
  nameClass: Proptype.object,
  nameValue: Proptype.string,
  imageClass: Proptype.string,
  cardNumber: Proptype.string,
  cardNumberClass: Proptype.object,
  cardTitleClass: Proptype.object,
  cardTitle: Proptype.string,
};
export default Project_Card;
