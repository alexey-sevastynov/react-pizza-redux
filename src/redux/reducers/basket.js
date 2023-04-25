const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOTAL_PRICE":
      return { ...state, totalPrice: action.payload };
    case "SET_TOTAL_COUNT":
      return { ...state, totalCount: action.payload };
    case "ADD_PIZZA_CART": {
      const newItems = {
        ...state.items,
        [action.payload.id]:
          //IF state.items[0] === undefined
          !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id], action.payload],
      };

      //   const allPizzas = [].concat.apply([], Object.values(newItems));
      // _________or
      const allPizzas = Object.values(newItems).flat();

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: allPizzas.reduce((sum, obj) => obj.price + sum, 0),
      };
    }

    default:
      return state;
  }
};

export default basketReducer;
