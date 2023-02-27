import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { 
        users: [],
        
    },
    // reducers accepte deux actions etat initail et etat finale et le but de créé la nouvelle etat
    reducers: {
        //store user's data in redux store
        setUserData: (state, {payload}) => {
            state.users = [...state.users, payload]
        },
    }
})

export const {setUserData} = userSlice.actions;
export default userSlice.reducer;
