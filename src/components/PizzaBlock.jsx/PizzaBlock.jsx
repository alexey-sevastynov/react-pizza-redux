import React, { useState } from "react";

import propTypes from "prop-types";
import MyLoader from "../Loader/Loader";

function PizzaBlock({
  id,
  title,
  imageUrl,
  types,
  sizes,
  price,
  isLoaded,
  onClickAddPizza,
  addedCount,
}) {
  const availableNames = ["thin", "traditional"];
  const avaibleSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      title,
      imageUrl,
      type: availableNames[activeType], //useState
      size: sizes[activeSize], //useState
      price,
    };
    onClickAddPizza(obj);
  };

  const oneType = <li className="active">{availableNames[types]}</li>;
  const twoTypes = availableNames.map((type, index) => (
    <li
      key={type}
      onClick={() => onSelectType(index)}
      className={activeType === index ? "active" : ""}
    >
      {type}
    </li>
  ));

  const showTypes = types.length === 1 ? oneType : twoTypes;

  const showSizes = sizes.map((size, index) => (
    <li
      key={size}
      className={activeSize === index ? "active" : ""}
      onClick={() => onSelectSize(index)}
    >
      {size} cm.
    </li>
  ));

  const svgPlus = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
        fill="white"
      />
    </svg>
  );

  if (!isLoaded) {
    return <MyLoader />;
  }
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>{showTypes}</ul>
        <ul>{showSizes}</ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price} UAH</div>
        <button
          className="button button--outline button--add"
          onClick={onAddPizza}
        >
          {svgPlus}
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  title: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  types: propTypes.array.isRequired,
  // sizes: [26,30,40] in array only number. see below code
  sizes: propTypes.arrayOf(propTypes.number).isRequired,
  price: propTypes.number,
  onAddPizza: propTypes.func,
  addedCount: propTypes.number,
};

export default PizzaBlock;
