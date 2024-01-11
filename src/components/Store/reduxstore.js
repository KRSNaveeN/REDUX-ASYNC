
import  {configureStore, createSlice} from '@reduxjs/toolkit';

const carttoggle = {
    carttoggle : true
}

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
    reducer : togglereducer.reducer
})

export const toggleActions = togglereducer.actions;

export default store;