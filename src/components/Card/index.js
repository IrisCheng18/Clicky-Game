import React from "react";
import "./style.css"

function Card (props) {
    return (
        <div className="card mb-4">
            <img className="card-img-top image" src={props.image} alt={props.image} onClick={() => props.handleClicked(props.id)} />
        </div>

    );
};

export default Card;