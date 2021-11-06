import React from "react";
const Card = (props) => {
    const featureList = props.feature.map((el) => <li> {el} </li>);
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
            <div className="item-body">
                <h4 style={{ color: props.color , marginBottom:"20px", textTransform:"uppercase"}}> {props.title} </h4>
                <ul> {featureList} </ul>
            </div>

            <div className="pr-footer item-footer">
                <a href="#" className="upgrade-button">
                    {"Багцыг сонгох"}
                </a>
                
            </div>
        </div>
    );
};

export default Card
