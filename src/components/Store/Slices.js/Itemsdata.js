import { createSlice } from "@reduxjs/toolkit";

const listdata = [{title:'Test',
price:6,
count : 0,
description:'This is a first product - amazing!'}, {title:'Harry',price:8,count :0, description:'good book'}];

const listtdataslice = createSlice({
    name : 'listdatareducer',
    initialState : listdata,
    reducers : {
       add(state,action)
       {
        let index = state.findIndex((item)=> item.title == action.payload.title);
              state[index].count++;
       },
       remove(state,action){
        let index = state.findIndex((item)=>item.title == action.payload.title);
        
              state[index].count--;
       }
    }
});
export const listdataActions = listtdataslice.actions

export default listtdataslice;