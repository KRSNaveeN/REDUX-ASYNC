import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

 let carttoggling = useSelector((state)=>state.toggle.carttoggle)
  return (
    <Layout>
     {carttoggling && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
