import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';

const Products = (props) => {
  const listitems = useSelector((state)=>state.list);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {/* <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        /> */}
        {
          listitems.map((item)=>{
            return <ProductItem title={item.title} price={item.price} description={item.description}/>
          })
        }
      </ul>
    </section>
  );
};

export default Products;
