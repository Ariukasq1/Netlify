import React from "react";

const Card = (props) => {
  return (
    <a href={props.linkTo}>
      <div
        data-content={props.content && props.content.substring(0, 60) + "..."}
        data-color={" "}
        className="item card"
      >
        <div className="card-text">{props.text}</div>
        <div className="img-container">
          {props.iconsrc && <img src={props.iconsrc} />}
        </div>
      </div>
    </a>
  );
};

export default Card;
