import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleActions } from '../Store/reduxstore';


const CartButton = (props) => {

 let dispatch = useDispatch();
 
  const toggleHandler = ()=>{
      dispatch(toggleActions.toggle());
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
