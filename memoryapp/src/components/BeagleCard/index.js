import React from "react";
import "./style.css";

function BeagleCard(props) {
    return (
        <div className="card" style="width:12rem;">
            <div className="img-container">
                <img alt="memory game" src={props.image} />
            </div>

            {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
                𝘅
      </span> */}
        </div>
    );
}

export default BeagleCard;