import React from "react";
import "./style.css";

function Navbar(props) {    
    return (
        <nav className="navbar navbar-expand-lg text-center sticky-top">
            <div className="navbar-item col-md-4">
                <a className="navbar-brand" href="/">Clicky Game</a>
            </div>
            <div className="navbar-item col-md-4">
                <span className="navbar-text">Click an image to begin!</span>
            </div>
            <div className="navbar-item col-md-4">
                <span className="navbar-text">Score: {props.score} | Top Score: {props.topscore}</span>
            </div>
        </nav>
    );
}

export default Navbar;