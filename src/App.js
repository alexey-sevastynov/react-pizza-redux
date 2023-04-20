import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";

import Layout from "./components/Layout";
import MainPage from "./page/mainPage/MainPage";
import BasketPage from "./page/basketPage/BasketPage";

function App() {
  const sorts = ["popularity", "price", "alphabet"];
  const categories = ["Meat", "Vegan", "Grill", "Spicy"];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<MainPage categories={categories} sorts={sorts} />}
          />
          <Route path="basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
