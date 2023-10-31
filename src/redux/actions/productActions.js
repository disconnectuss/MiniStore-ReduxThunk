import axios from "axios";
import { actionTypes } from "./actionTypes";


// sync action
// function syncAction(){
//     return{
//         type: "sync",
//     }
// }
// async actions
// export function getProducts(){
//     return async function (dispatch){ //dispatch parameter comes from thunk

//         dispatch(); 
//     }}
export function addToBasket(product){
    return {
        type: actionTypes.ADD_TO_BASKET,
        payload:product,
    }

}
// async logic functions( arrow functions)
export const getProducts =() => (dispatch) => {
    axios.get('https://fakestoreapi.com/products')
    .then ((res)=> dispatch({
        type: actionTypes.SET_PRODUCTS,
        payload: res.data,
    }))
    .catch((err)=> ({
        type: actionTypes.SET_ERRORS
    }))

}