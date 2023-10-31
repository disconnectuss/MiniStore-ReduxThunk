import { actionTypes } from "../actions/actionTypes";


const initialState = {
    products: [],
    isLoading: true,
    isError: false,
}
const productReducer = (state= initialState, action)=> {
    switch(action.type){
        case actionTypes.SET_PRODUCTS :
            console.log('its ok', action.payload)
            return {...state, products: action.payload, isLoading:false};
        case actionTypes.SET_ERRORS :
            console.log('error!!', action.payload)
            return {...state, errors: action.payload, isError: true};


            default: return state
    }

}
export default productReducer