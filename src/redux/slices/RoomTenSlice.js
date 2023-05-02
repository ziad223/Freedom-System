import { createSlice } from "@reduxjs/toolkit";


export const RoomTenSlice = createSlice({
    name : 'RoomTenSlice',
    initialState : {
        users : localStorage.getItem("room-ten") ?
        JSON.parse(localStorage.getItem("room-ten")) :[],

    },
    reducers : {

        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("room-ten" , JSON.stringify(state.users));

        },
          
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !==action.payload);
            localStorage.setItem("room-ten" , JSON.stringify(state.users));

        }
      

    }
})

export const {addUser , deleteUser} = RoomTenSlice.actions;
export default RoomTenSlice.reducer;