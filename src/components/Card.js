import React from "react";
import Link from 'next/link'

const Card = (props) => {
    return (
        <Link href={props.linkTo}>
          <div data-content={ props.content && props.content.substring(0, 60) + "..."} style={{padding:"25px", borderRadius:"9px"}} className="item card flex-center" >
            <div style={{width:"200px", fontWeight:"500"}}>
              {props.text}
            </div>
            <div className="flex-center" style={{ height:"80px", margin:"20px"}}>
             {props.iconsrc && <img style={{objectFit:"contain", maxHeight:"80px"}} src={props.iconsrc} />} 
            </div>
          </div>
        </Link>
    );
};

export default Card
