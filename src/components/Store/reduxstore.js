
import  {configureStore, createSlice} from '@reduxjs/toolkit';
import listtdataslice from './Slices.js/Itemsdata';
import navreducer from './Slices.js/navdata';

const carttoggle = {
    carttoggle : true
}

const cartTotal= {
    carttotal : 0
}

const carttotalreducer = createSlice({
    name : 'cartTotal',
    initialState : cartTotal,
    reducers : {
        addtocart(state){
            state.carttotal++;
        },
        deletetocart(state)
        {
            state.carttotal--;
        },
        carttottal(state,action){
            state.carttotal = action.payload;
        }
    }
});

const togglereducer = createSlice({
    name : 'togglecart',
    initialState : carttoggle,
    reducers : {
        toggle(state){
            state.carttoggle = !state.carttoggle;
        }
    }
});

let store = configureStore({
    reducer :{toggle : togglereducer.reducer, list : listtdataslice.reducer, cartvalue : carttotalreducer.reducer, navbar : navreducer.reducer}
})

export const toggleActions = togglereducer.actions;
export const carttotalActions = carttotalreducer.actions;

export default store;