import { createSlice } from "@reduxjs/toolkit";


export const RoomThreeSlice = createSlice({
    name : 'RoomThreeSlice',
    initialState : {
        users : localStorage.getItem("room-three") ?
        JSON.parse(localStorage.getItem("room-three")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("room-three" , JSON.stringify(state.users));

        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("room-three" , JSON.stringify(state.users));

        }
      

    }
})

export const {addUser , deleteUser} = RoomThreeSlice.actions;
export default RoomThreeSlice.reducer;