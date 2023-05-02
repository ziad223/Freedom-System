import { createSlice } from "@reduxjs/toolkit";


export const RoomFourSlice = createSlice({
    name : 'RoomFourSlice',
    initialState : {
        users : localStorage.getItem("room-four") ?
        JSON.parse(localStorage.getItem("room-four")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("room-four" , JSON.stringify(state.users));

        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("room-four" , JSON.stringify(state.users));

        }
      

    }
})

export const {addUser , deleteUser} = RoomFourSlice.actions;
export default RoomFourSlice.reducer;