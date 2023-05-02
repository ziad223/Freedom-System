import { createSlice } from "@reduxjs/toolkit";


export const RoomOneSlice = createSlice({
    name : 'RoomOneSlice',
    initialState : {
        users : localStorage.getItem("room-one") ?
        JSON.parse(localStorage.getItem("room-one")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("room-one" , JSON.stringify(state.users));
        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("room-one" , JSON.stringify(state.users));

        }
      

    }
})

export const {addUser , deleteUser} = RoomOneSlice.actions;
export default RoomOneSlice.reducer;