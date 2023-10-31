import { actionTypes } from "../actions/actionTypes"


const initialState = {
    basket: [],
    total: 0,
}
const basketReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      //! action
      case actionTypes.ADD_TO_BASKET:
        // finding in basket
        const index = state.basket.findIndex(
          (i) => i.id === payload.id
        );
  
        if (index >= 0) {
          // add to the amount of basket
          const clone = [...state.basket];
  
          clone[index].amount++;
  
          return { ...state, basket: clone };
        } else {
          //  adding to basket if there is not in basket
          const newArr = state.basket.concat({ ...payload, amount: 1 });
  
          return {
            ...state,
            basket: newArr,
            total: state.total + payload.price,
          };
        }
  
      default:
        return state;
    }
  };
  
  export default basketReducer;


