import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';

const Products = (props) => {

  const listitems = useSelector((state)=>state.list);
  console.log("inside product")
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          listitems.map((item)=>{
            // return <ProductItem title={item.title} price={item.price} description={item.description}/>
            return <ProductItem x ={item}/>
          })
        }
      </ul>
    </section>
  );
};

export default Products;
