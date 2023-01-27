import {configureStore} from "@reduxjs/toolkit";
import  modalReducer from "./features/modalSlice";

const store = configureStore({
     reducer: {
          modal: modalReducer
     }
})

export default store;


