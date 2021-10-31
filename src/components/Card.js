import React from "react";
const Card = (props) => {
    const featureList = props.feature.map((el) => <li> {el} </li>);
    return (
        <div className="single-pr-table item">
            <div className="item-header" style={{ borderTopColor: props.color }}>
                <p className="package-name"> {props.pname} </p>
                <h2 className="price">{"₮ 2,999,000"}</h2>
                <p className="package"> Нэг удаа</p>
            </div>
            <div className="item-body">
                <h3 style={{ color: props.color }}> {props.title} </h3>
                <ul> {featureList} </ul>
            </div>

            <div className="pr-footer">
                <a href="#" className="upgrade-button">
                    {"Багцыг сонгох"}
                </a>
            </div>
        </div>
    );
};

export default Card
