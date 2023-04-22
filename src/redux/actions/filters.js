//______ACTION CREATOR
export const setSortBy = (sortName) => ({
  type: "SET_SORT_BY",
  payload: sortName,
});

//______ACTION
// export const setSort = () => ({
//   type: "SET_SORT",
// });

export const setCategory = (categoryIndex) => ({
  type: "SET_CATEGORY",
  payload: categoryIndex,
});
