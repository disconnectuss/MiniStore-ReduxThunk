import { useDispatch } from "react-redux"
import { addToBasket } from "../redux/actions/productActions"
import { actionTypes } from "../redux/actions/actionTypes"



const Card = ({item}) => {
  const dispatch = useDispatch()
const handleClick =()=> {
 dispatch(addToBasket(item))
}
  return (
 
     <div className="card text-center" style={{width: '15rem'}}>
        <div className="p-5" style={{height: '250px'}}>
        <img src={item.image} className="card-img-top img-fluid h-100"/>
        </div>
  <div className="card-body text-center">
    <h5 className="card-title ">{item.title.slice(0,20) + '...'}</h5>
    <p className="card-text">{item.description.slice(0,50)+ '...'}</p>
  </div>
  <button onClick={handleClick}
   className="btn btn-primary m-3">Add to Chart</button>
</div>

  )
}

export default Card
