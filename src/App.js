import React from "react";
import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Layout from "./components/Layout";

import MainPage from "./page/mainPage/MainPage";
import BasketPage from "./page/basketPage/BasketPage";

import { connect, useDispatch } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

const categories = ["Meat", "Vegan", "Grill", "Spicy"];

const sorts = [
  { name: "popularity", type: "popular" },
  { name: "price", type: "price" },
  { name: "alphabet", type: "alphabet" },
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //____________AXIOS
    axios
      .get("http://localhost:3001/pizzas")

      .then(({ data }) => dispatch(setPizzas(data)));

    console.log("+");

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
            element={<MainPage categories={categories} sorts={sorts} />}
          />
          <Route path="basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// class App extends React.Component {
//   state = {
//     pizzas: [],
//   };

//   sorts = [
//     { name: "popularity", type: "popular" },
//     { name: "price", type: "price" },
//     { name: "alphabet", type: "alphabet" },
//   ];
//   categories = ["Meat", "Vegan", "Grill", "Spicy"];

//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/db.json")
//       .then(({ data }) => this.props.showPizzas(data.pizzas));
//   }

//   render() {
//     return (
//       <>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route
//               index
//               element={
//                 <MainPage
//                   categories={this.categories}
//                   sorts={this.sorts}
//                   pizzas={this.props.items}
//                 />
//               }
//             />
//             <Route path="basket" element={<BasketPage />} />
//           </Route>
//         </Routes>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     //showPizzas called in componentDidMount()!!!
//     showPizzas: (items) => dispatch(setPizzas(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
