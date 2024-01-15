import { useSelector } from "react-redux";
import classes from './Navigation.module.css'

const Navigation = ()=>{
    const sending = useSelector((state)=>state.navbar.sending);
    const output = useSelector((state)=>state.navbar.output);
    console.log(sending,output);
    return <>
      {sending && <div className={classes.display}>  <h4>{output.msg1}</h4> <h4>{output.msg2}</h4></div>}  
    </>
};

export default Navigation;