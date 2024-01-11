import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { listdataActions } from '../Store/Slices.js/Itemsdata';
import { carttotalActions } from '../Store/reduxstore';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  let obj = props.item;

 let dispatch = useDispatch();
  
const addHandler = (x)=>{
   dispatch(listdataActions.add(x));
   dispatch(carttotalActions.addtocart());
};


const removeHandler = (x)=>{
     dispatch(listdataActions.remove(x));
     dispatch(carttotalActions.deletetocart());
}

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>removeHandler(obj)}>-</button>
          <button onClick={()=>addHandler(obj)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
