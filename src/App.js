import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";

import Layout from "./components/Layout";
import MainPage from "./page/mainPage/MainPage";
import BasketPage from "./page/basketPage/BasketPage";
import { useEffect, useState } from "react";

function App() {
  const sorts = [
    { name: "popularity", type: "popular" },
    { name: "price", type: "price" },
    { name: "alphabet", type: "alphabet" },
  ];
  const categories = ["Meat", "Vegan", "Grill", "Spicy"];

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    //____________AXIOS
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => setPizzas(data.pizzas));

    //_____________FETCH
    // fetch("http://localhost:3000/db.json").then((response) =>
    //   response.json().then((json) => {
    //     setPizzas(json.pizzas);
    //   })
    // );
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
