import React from "react";

const PriceCard = (props) => {
    return (
        <div className="single-pr-table item">
            <div className="item-header" style={{ borderTopColor: props.color }}>
                <p className="package-name"> {props.pname} </p>
                <h2 style={{color:"#FF3A46"}}>{props.price}</h2>
                <p className="package"> {props.package}</p>
                {props.add && <div className="btn">
                                  <a data-erxes-modal="4uBFnr" className="upgrade-button" style={{padding:"0px 10px"}}>
                                   {props.add}
                                  </a>
                                </div>
                                }
            </div>
            <div className="pr-body item-body">
                <h4 style={{ color: props.color}}> {props.title} </h4>
                <ul> {props.feature.map((el) => <li key={el.toString()}> {el} </li>)} </ul>
            </div>

            <div className="item-footer">
                <a href="#"  className="plan-button line-button-two">
                    {"Багцыг сонгох"}
                </a>
            </div>
        </div>
    );
};

export default PriceCard
