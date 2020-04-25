import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to={{
                pathname: "/about",
                state: {
                    fromNavigation: true
                }
            }}>About</Link>
        </nav>);
}
// react안에서만 Link를 사용 할 수 있음. 어찌보면 당연
export default Navigation;