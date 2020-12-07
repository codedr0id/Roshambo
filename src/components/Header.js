import React from "react";
import logo from "../images/logo.svg";
import Button from "./Button";
import Rules from "./Rules";

const Header = props => (
    <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <div className="score-box">
            <div className="score-box__content">
                <span className="score-box__title">Score</span>
                <span className="score-box__number">{props.score}</span>
            </div>
        </div>
        <Button small transparent right text="Rules" clicked={props.modalHandler} />
        <Rules active={props.modalActive} closed={props.modalHandler} />
    </header>
)

export default Header; 