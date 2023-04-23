import React from "react";

import axios from "axios";

import Categories from "../../components/Categories/Categories";
import SortPopup from "../../components/SortPopup/SortPopup";
import Header from "../../components/Header/Header";
import PizzaBlock from "../../components/PizzaBlock.jsx/PizzaBlock";

import { fetchPizzas } from "../../redux/actions/pizzas";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/actions/filters";
import MyLoader from "../../components/Loader/Loader";

function MainPage({ categoryNames, sorts }) {
  //______________useDispatch
  const dispatch = useDispatch();
  //______________useSelector from ../reducer/stateInitial...
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  console.log(category, sortBy);
  React.useEffect(() => {
    //one times render
    // if (!pizzas.length) {
    //   dispatch(fetchPizzas());
    // }
    dispatch(fetchPizzas());
  }, [category]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            categoryNames={categoryNames}
            onClickCategory={(index) => dispatch(setCategory(index))}
          />
          <SortPopup sorts={sorts} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? pizzas.map((pizza) => (
                <PizzaBlock key={pizza.id} isLoaded={true} {...pizza} />
              ))
            : Array(pizzas.length)
                .fill(0)
                .map((_, index) => <MyLoader key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
