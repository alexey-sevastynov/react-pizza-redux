import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";

import Layout from "./components/Layout";
import MainPage from "./page/mainPage/MainPage";
import BasketPage from "./page/basketPage/BasketPage";
import { useEffect, useState } from "react";

function App() {
  const sorts = ["popularity", "price", "alphabet"];
  const categories = ["Meat", "Vegan", "Grill", "Spicy"];

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/db.json").then((response) =>
      response.json().then((json) => {
        setPizzas(json.pizzas);
      })
    );
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MainPage categories={categories} sorts={sorts} pizzas={pizzas} />
            }
          />
          <Route path="basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
