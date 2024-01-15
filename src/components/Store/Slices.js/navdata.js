import { createSlice } from "@reduxjs/toolkit";
const navdata = {
    sending : false,
    output : {msg1:'', msg2:''},
}

const navreducer =  createSlice({
    name : 'navreduce',
    initialState:navdata,
    reducers : {
        sending(state,action){
            state.sending = action.payload;
        },
        output(state,action){
            state.output.msg1 = action.payload.msg1;
            state.output.msg2 = action.payload.msg2;
        }
    }
})

export const navActions = navreducer.actions;
export default navreducer;