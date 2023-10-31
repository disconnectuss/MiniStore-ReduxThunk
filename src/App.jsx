import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Basket from "./pages/Basket"
import Header from "./components/Header"
import { actionTypes } from "./redux/actions/actionTypes" // no error but safer :)
import { getProducts } from "./redux/actions/productActions"

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
   
    dispatch(getProducts())
    // axios
    // .get('https://fakestoreapi.com/products')
    // .then((res)=>dispatch({
    //   type: actionTypes.SET_PRODUCTS,
    //   payload: res.data,
    // }))
    // .catch((err)=>dispatch({
    //   type: actionTypes.SET_ERRORS,
    //   payload: err,
    // }))
  }, [])


  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/basket" element={<Basket/>}/>
   </Routes>
   </BrowserRouter>

  )
}

export default App
