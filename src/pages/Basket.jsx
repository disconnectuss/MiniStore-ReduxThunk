
import { useSelector } from 'react-redux';
import BasketItem from '../components/BasketItem';

const Basket = () => {
  const state = useSelector((store) => store.basketState);

  console.log(state);
  return (
    <div className="row">
      <div className="col-md-9">
        {/* no product */}
        {state.basket.length === 0 && (
          <p className='mt-5 text-center'>Ups! Basket is empty..</p>
        )}

        {/* products added */}
        {state.basket.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </div>

      <div className="col-md-3  mt-5">
        <h5 className="mb-4">Total: ${state.total}</h5>

        <button className="btn btn-success">
         Complete
        </button>
      </div>
    </div>
  );
};

export default Basket;