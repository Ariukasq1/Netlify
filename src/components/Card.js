import React from "react";
import Link from 'next/link'

const Card = (props) => {
    return (
        <Link href={props.linkTo}>
          <div data-content={ props.content && props.content.substring(0, 60) + "..."} data-color={" " }className="item card" >
            <div className="card-text">
              {props.text}
            </div>
            <div className="img-container">
             {props.iconsrc && <img src={props.iconsrc} />} 
            </div>
          </div>
        </Link>
    );
};

export default Card
