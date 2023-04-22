import React from "react";

import Categories from "../../components/Categories/Categories";
import SortPopup from "../../components/SortPopup/SortPopup";
import Header from "../../components/Header/Header";
import PizzaBlock from "../../components/PizzaBlock.jsx/PizzaBlock";

import { useSelector } from "react-redux";

function MainPage({ categories, sorts }) {
  const { pizzas } = useSelector(({ pizzas }) => {
    return {
      pizzas: pizzas.items,
    };
  });

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories categories={categories} />
            <SortPopup sorts={sorts} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
