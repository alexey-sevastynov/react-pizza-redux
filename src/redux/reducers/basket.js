const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (obj) => {
  return obj.reduce((sum, obj) => obj.price + sum, 0);
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOTAL_PRICE":
      return { ...state, totalPrice: action.payload };
    case "SET_TOTAL_COUNT":
      return { ...state, totalCount: action.payload };
    case "ADD_PIZZA_CART": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          //IF state.items[0] === undefined
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
          totalCount: currentPizzaItems.length,
        },
      };

      //   const allPizzas = [].concat.apply([], Object.values(newItems));
      // _________or
      // const allPizzas = Object.values(newItems).flat();

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: getTotalPrice(allPizzas),
      };
    }
    case "CLEAR_CART": {
      return { ...state, items: {}, totalPrice: 0, totalCount: 0 };
    }

    default:
      return state;
  }
};

export default basketReducer;
