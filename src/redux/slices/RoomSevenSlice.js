import { createSlice } from "@reduxjs/toolkit";


export const RoomSixSlice = createSlice({
    name : 'RoomSixSlice',
    initialState : {
        users : localStorage.getItem("room-seven") ?
        JSON.parse(localStorage.getItem("room-seven")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("room-seven" , JSON.stringify(state.users));

        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("room-seven" , JSON.stringify(state.users));

        }
      

    }
})

export const {addUser , deleteUser} = RoomSixSlice.actions;
export default RoomSixSlice.reducer;