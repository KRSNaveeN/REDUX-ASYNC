import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { listdataActions } from '../Store/Slices.js/Itemsdata';
import { carttotalActions } from '../Store/reduxstore';
import { useEffect } from 'react';
import { navActions } from '../Store/Slices.js/navdata';


const ProductItem = (props) => {
  const { title, price, description } = props.x;
  
  const dispatch = useDispatch();

  const data = useSelector((state)=>state.list);

  // useEffect(()=>{
  //        datafetcher();
  // },[data]);

const datafetcher = async ()=>{
  dispatch(navActions.sending(true))
  dispatch(navActions.output({msg1 : 'sending', msg2: "adding to cart"}));
  console.log("posting to firebase");

  let index =  data.findIndex((items)=>title === items.title);
  let newlist = [...data];
  newlist[index] = {...newlist[index], count : newlist[index].count+1 };
  try{
  let response = await fetch("https://reduxtoolkit-asynchandler-default-rtdb.firebaseio.com/data.json",{
    method : 'PUT',
    // body : JSON.stringify(data)
    body : JSON.stringify(newlist)
  });
  // dispatch(navActions.sending(false));
  let ans = await response.json();
  // let da = await response.json();
  // console.log(response);
   
  if(response.ok)
  {
    console.log("response sucess")
    dispatch(navActions.output({msg1 : 'sucess', msg2 :'sending successful'}));
    dispatch(listdataActions.add(newlist));
    dispatch(carttotalActions.addtocart());
    
  }
  else{
    
    throw new Error("failed");
  }
}
catch(err){
  dispatch(navActions.output({msg1 : "failed", msg2 : "data sending failed"}));
  // alert(err);
  console.log(err)

}


}

  // const additemHandler =  ()=>{
  //   dispatch(listdataActions.add(props.x));
  //   dispatch(carttotalActions.addtocart());
   
   
  // }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          {/* <button onClick={additemHandler}>Add to Cart</button> */}
          <button onClick={datafetcher}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
