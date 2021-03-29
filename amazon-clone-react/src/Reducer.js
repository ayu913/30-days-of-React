export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);


export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user:action.user
      }
    case 'ADD_TO_BASKET':
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

    case 'REMOVE_FROM_BASKET':
      //Logic for Removing item from basket

      var newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      console.log(action.id);
      console.log(index);
      if (index >= 0) {
        console.log("ITem found");
        newBasket.splice(index, 1);
      } else {
        console.warn("No item Found!");
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;