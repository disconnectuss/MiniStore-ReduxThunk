import { useSelector } from "react-redux"
import Loading from "../components/Loading"
import Card from "../components/Card"




const MainPage = () => {
    //!! not to use two useSelector and access all reducers !!
    const { productState, basketState } = useSelector((store) => ({
        productState: store.productState,
        basketState: store.basketState,
    }))
    
  return (
    <div>
        {/* loading spinner  */}
      {productState.isLoading && <Loading />}
      {/* if products are true */}
      <div className="d-flex flex-wrap justify-content-center gap-5 p-5 ">
         {productState.products.map((item)=> (
       <Card key={item.id} item={item}/>))}
       
      </div>
    </div>
  )
}

export default MainPage
