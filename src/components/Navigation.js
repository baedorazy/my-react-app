import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/join">Join</Link>
            <Link to="/myname">Myname</Link>
            <Link to={{
                pathname: "/about",
                state: {
                    fromNavigation: true
                }
            }}>About</Link>
        </nav>);
}
export default Navigation;