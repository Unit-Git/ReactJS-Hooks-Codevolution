export const StoreReducer = {
  count: 0,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
