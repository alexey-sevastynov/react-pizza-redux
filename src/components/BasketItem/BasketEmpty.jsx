import React from "react";
import iconEmtyBasket from "./empty-cart.png";

function BasketEmpty() {
  return (
    <div className="cart cart--empty">
      <h2>Basket empty !</h2>
      <p>
        You probably haven't ordered pizza yet.
        <br />
        To order pizza, go to the main page.
      </p>
      <img src={iconEmtyBasket} alt="Empty cart" />
      <a href="/" className="button button--black">
        <span>Come back</span>
      </a>
    </div>
  );
}

export default BasketEmpty;
