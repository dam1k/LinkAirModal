import {createSlice} from "@reduxjs/toolkit";

const initialState = {
     phoneNumber: null,
     calling_code: null
}

const modalSlice = createSlice({
     name: 'modal',
     initialState,
     reducers: {
          addPhoneNumber: (state, action) => {
               state.phoneNumber = action.payload.phoneNumber;
               state.calling_code = action.payload.calling_code;
          }
     }
})

export const {openModal, addPhoneNumber} = modalSlice.actions;
export default modalSlice.reducer;