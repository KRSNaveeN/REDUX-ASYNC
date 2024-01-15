import { useEffect } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { listdataActions } from '../Store/Slices.js/Itemsdata';
import { carttotalActions } from '../Store/reduxstore';

const Cart = (props) => {
    let dispatch = useDispatch();
    const listitems = useSelector((state)=>state.list);

    const fetchingData = async () =>{
      try{
    let response  = await fetch("https://reduxtoolkit-asynchandler-default-rtdb.firebaseio.com/data.json");
    if(response.ok){
      let ans = await response.json();
      let x = Object.values(ans);
      console.log("reload", Object.values(ans));
      let county =0;
      x.forEach((item)=> county = (county+item.count));
      dispatch(listdataActions.listitem(x));
      dispatch(carttotalActions.carttottal(county));
    }
  }
  catch(err){

    console.log(err);
  }
  }

  useEffect(()=>{
      fetchingData();
  },[]);

  console.log("inside cart0")
  console.log(listitems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {listitems.map((item)=>{
          // let total = (item.count)*(item.price);
          if((item.count >0)){
          return <CartItem key={Math.random()} item={{ title: item.title, price :item.price, count : item.count, description : item.description}}/>
          }
        })}
      </ul>
    </Card>
  );
};

export default Cart;
