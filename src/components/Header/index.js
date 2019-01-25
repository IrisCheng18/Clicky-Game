import React from "react";
import "./style.css"

function Header(props) {
    return (
        <div className="jumbotron text-center" style={{ backgroundImage: `url(${props.image})` }}>
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    );
};

export default Header;
