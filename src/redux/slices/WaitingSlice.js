import { createSlice } from "@reduxjs/toolkit";


export const WaitingSlice = createSlice({
    name : 'WaitingSlice',
    initialState : {
        users : localStorage.getItem("waiting") ?
        JSON.parse(localStorage.getItem("waiting")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("waiting" , JSON.stringify(state.users));

        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("waiting" , JSON.stringify(state.users));

        }
      

    }
})

export const {addUser , deleteUser} = WaitingSlice.actions;
export default WaitingSlice.reducer;