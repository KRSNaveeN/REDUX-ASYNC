import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { listdataActions } from '../Store/Slices.js/Itemsdata';
import { carttotalActions } from '../Store/reduxstore';
import { navActions } from '../Store/Slices.js/navdata';

const CartItem = (props) => {
  const { title, count, description, price } = props.item;
  let total = (count)*(price);
  let obj = props.item;
  const data = useSelector((state)=>state.list);

 let dispatch = useDispatch();
  
const addHandler = async (x)=>{
  dispatch(navActions.sending(true))
  dispatch(navActions.output({msg1 : 'sending', msg2: "adding to cart"}));
  let index = data.findIndex((item) => item.title === title);
  let updatedlist = [...data];
  updatedlist[index] = {...updatedlist[index], count:updatedlist[index].count+1};
  try{
  let response = await fetch("https://reduxtoolkit-asynchandler-default-rtdb.firebaseio.com/data.json",{
    method : 'PUT',
    body : JSON.stringify(updatedlist)
  })
  if(response.ok){
    dispatch(navActions.output({msg1 : 'sucess', msg2 :'sending successful'}));
   dispatch(listdataActions.add(updatedlist));
   dispatch(carttotalActions.addtocart());
  }
}
catch(err){
  dispatch(navActions.output({msg1 : "failed", msg2 : "data sending failed"}))
}
};


const removeHandler = async (x)=>{
  dispatch(navActions.sending(true))
  dispatch(navActions.output({msg1 : 'sending', msg2: "adding to cart"}));
  let index = data.findIndex((item) => item.title === title);
  let updatedlist = [...data];
  updatedlist[index] = {...updatedlist[index], count:updatedlist[index].count-1};
  try{
  let response = await fetch("https://reduxtoolkit-asynchandler-default-rtdb.firebaseio.com/data.json",{
    method : 'PUT',
    body : JSON.stringify(updatedlist)
  })
  if(response.ok){
      dispatch(navActions.output({msg1 : 'sucess', msg2 :'sending successful'}));
     dispatch(listdataActions.remove(updatedlist));
     dispatch(carttotalActions.deletetocart());
  }
}
catch(err){
  dispatch(navActions.output({msg1 : "failed", msg2 : "data sending failed"}))
}
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
          x <span>{count}</span>
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
