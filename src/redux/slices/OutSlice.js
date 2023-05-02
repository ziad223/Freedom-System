import { createSlice } from "@reduxjs/toolkit";


export const OutSlice = createSlice({
    name : 'OutSlice',
    initialState : {
        users : localStorage.getItem("out") ?
        JSON.parse(localStorage.getItem("out")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("out" , JSON.stringify(state.users));

        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("out" , JSON.stringify(state.users));

        }
      

    }
})

export const {addUser , deleteUser} = OutSlice.actions;
export default OutSlice.reducer;
