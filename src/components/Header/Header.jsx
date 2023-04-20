import React from "react";
import logo from "./icon/logo.png";
import Button from "../Button/Button";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width={38} height={38} src={logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <Button />
        </div>
      </div>
    </div>
  );
}
