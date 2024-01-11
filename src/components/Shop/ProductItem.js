import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { listdataActions } from '../Store/Slices.js/Itemsdata';
import { carttotalActions } from '../Store/reduxstore';

const ProductItem = (props) => {
  const { title, price, description } = props;
 
  

  const dispatch = useDispatch();

  const additemHandler = ()=>{
    console.log("nj0");
    dispatch(listdataActions.add(props));
    dispatch(carttotalActions.addtocart());
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={additemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
