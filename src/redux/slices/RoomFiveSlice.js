import { createSlice } from "@reduxjs/toolkit";


export const RoomFiveSlice = createSlice({
    name : 'RoomFiveSlice',
    initialState : {
        users : localStorage.getItem("room-five") ?
        JSON.parse(localStorage.getItem("room-five")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("room-five" , JSON.stringify(state.users));

        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("room-five" , JSON.stringify(state.users));

        }
      

    }
})

export const {addUser , deleteUser} = RoomFiveSlice.actions;
export default RoomFiveSlice.reducer;