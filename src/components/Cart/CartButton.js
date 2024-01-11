import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleActions } from '../Store/reduxstore';


const CartButton = (props) => {

 let dispatch = useDispatch();
let carttotal = useSelector((state)=>state.cartvalue.carttotal);
console.log(carttotal);

  const toggleHandler = ()=>{
      dispatch(toggleActions.toggle());
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{carttotal}</span>
    </button>
  );
};

export default CartButton;
