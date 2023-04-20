import React from "react";
import logo from "./icon/logo.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width={38} height={38} src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>This is a very tasty pizza in the World</p>
            </div>
          </div>
        </Link>

        <div className="header__cart">
          <Button />
        </div>
      </div>
    </div>
  );
}
