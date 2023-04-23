import React from "react";

import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import MainPage from "./page/mainPage/MainPage";
import BasketPage from "./page/basketPage/BasketPage";

import { useDispatch } from "react-redux";

const categoryNames = ["Meat", "Vegan", "Grill", "Spicy"];

const sortNames = [
  { name: "popular", type: "popular" },
  { name: "price", type: "price" },
  { name: "alphabet", type: "title" },
];

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MainPage categoryNames={categoryNames} sortNames={sortNames} />
            }
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
