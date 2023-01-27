import {createSlice} from "@reduxjs/toolkit";

const initialState = {
     phoneNumber: null,
}

const modalSlice = createSlice({
     name: 'modal',
     initialState,
     reducers: {
          addPhoneNumber: (state, action) => {
               state.phoneNumber = action.payload;
          }
     }
})

export const {openModal, addPhoneNumber} = modalSlice.actions;
export default modalSlice.reducer;