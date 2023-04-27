import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({ type: "SET_LOADED", payload: false });
  axios
    .get(
      `https://pizzas-api-ait8.onrender.com/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy}&_order=desc`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
