import { useSelector } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import Navigation from '../UI/Navigation';

const MainHeader = (props) => {
  // const sending = useSelector((state)=>state.navbar.sending);
  return (<>
  <div>
    <Navigation/>
  </div>
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  </>
  
  );
};

export default MainHeader;
