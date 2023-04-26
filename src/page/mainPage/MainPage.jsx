import React from "react";

import axios from "axios";

import Categories from "../../components/Categories/Categories";
import SortPopup from "../../components/SortPopup/SortPopup";
import Header from "../../components/Header/Header";
import PizzaBlock from "../../components/PizzaBlock.jsx/PizzaBlock";

import { fetchPizzas } from "../../redux/actions/pizzas";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../../redux/actions/filters";
import MyLoader from "../../components/Loader/Loader";
import { addPizzaToCart } from "../../redux/actions/basket";

function MainPage({ categoryNames, sortNames, onClickSortType }) {
  //______________useDispatch
  const dispatch = useDispatch();
  //______________useSelector from ../reducer/stateInitial...
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const basketPizzas = useSelector(({ basket }) => basket.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    //one times render
    // if (!pizzas.length) {
    //   dispatch(fetchPizzas());
    // }
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const handleAddPizzaToBasket = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            categoryNames={categoryNames}
            onClickCategory={onSelectCategory}
          />
          <SortPopup
            activeSortType={sortBy}
            sortNames={sortNames}
            onClickSortType={onSelectSortType}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? pizzas.map((pizza) => (
                <PizzaBlock
                  key={pizza.id}
                  isLoaded={true}
                  onClickAddPizza={handleAddPizzaToBasket}
                  addedCount={
                    basketPizzas[pizza.id] &&
                    basketPizzas[pizza.id].items.length
                  }
                  {...pizza}
                />
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
