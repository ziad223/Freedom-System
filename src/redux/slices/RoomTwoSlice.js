import { createSlice } from "@reduxjs/toolkit";


export const RoomTwoSlice = createSlice({
    name : 'RoomTwoSlice',
    initialState : {
        users : localStorage.getItem("room-two") ?
        JSON.parse(localStorage.getItem("room-two")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("room-two" , JSON.stringify(state.users));

        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("room-two" , JSON.stringify(state.users));

        }
      

    }
})

export const {addUser , deleteUser} = RoomTwoSlice.actions;
export default RoomTwoSlice.reducer;