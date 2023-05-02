import { createSlice } from "@reduxjs/toolkit";


export const RoomEightSlice = createSlice({
    name : 'RoomEightSlice',
    initialState : {
        users : localStorage.getItem("room-eight") ?
        JSON.parse(localStorage.getItem("room-eight")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("room-eight" , JSON.stringify(state.users));

        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("room-eight" , JSON.stringify(state.users));

        }
      

    }
})

export const {addUser , deleteUser} = RoomEightSlice.actions;
export default RoomEightSlice.reducer;