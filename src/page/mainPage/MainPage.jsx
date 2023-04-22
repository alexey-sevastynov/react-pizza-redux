import React from "react";

import Categories from "../../components/Categories/Categories";
import SortPopup from "../../components/SortPopup/SortPopup";
import Header from "../../components/Header/Header";
import PizzaBlock from "../../components/PizzaBlock.jsx/PizzaBlock";

import { useDispatch, useSelector } from "react-redux";

import { setCategory } from "../../redux/actions/filters";

function MainPage({ categories, sorts }) {
  //______________useDispatch
  const dispatch = useDispatch();
  //______________useSelector
  const pizzas = useSelector(({ pizzas }) => pizzas.items);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              categories={categories}
              onClickItem={(index) => dispatch(setCategory(index))}
            />
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
