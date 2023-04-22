const setSortBy = (sortName) => ({
  type: "SET_SORT_BY",
  payload: sortName,
});

const setCategory = (categoryIndex) => ({
  type: "SET_CATEGORY",
  payload: categoryIndex,
});
