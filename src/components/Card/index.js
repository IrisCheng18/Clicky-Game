import React from "react";
import "./style.css"

function Card (props) {
    return (
        <div className="card shake click-item">
            <img className="card-img-top image" src={props.image} alt={props.image} />
        </div>

    );
};

export default Card;