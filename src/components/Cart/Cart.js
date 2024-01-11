import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const listitems = useSelector((state)=>state.list);
  console.log(listitems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }} 
         /> */}
        {/* <CartItem/> */}
        {listitems.map((item)=>{
          let total = (item.count)*(item.price);
          if((item.count >0)){
          return <CartItem key={Math.random()} item={{total:total, title: item.title, price :item.price, quantity : item.count}}/>
          }
        })}
      </ul>
    </Card>
  );
};

export default Cart;
