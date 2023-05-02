import { createSlice } from "@reduxjs/toolkit";


export const RoomNineSlice = createSlice({
    name : 'RoomNineSlice',
    initialState : {
        users : localStorage.getItem("room-nine") ?
        JSON.parse(localStorage.getItem("room-nine")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("room-nine" , JSON.stringify(state.users));


        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("room-nine" , JSON.stringify(state.users));


        }
      

    }
})

export const {addUser , deleteUser} = RoomNineSlice.actions;
export default RoomNineSlice.reducer;