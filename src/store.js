// Archivo store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { firstCode } from "./components/defaultCode";

// Definir el estado inicial
const initialState = firstCode;

// Crear un slice (reducer + acciones) utilizando createSlice
const stringSlice = createSlice({
  name: "string",
  initialState,
  reducers: {
    saveString: (state, action) => {
      return action.payload;
    },
  },
});

// Obtener el reducer generado automáticamente por createSlice
const stringReducer = stringSlice.reducer;

// Obtener las acciones generadas automáticamente por createSlice
const { saveString } = stringSlice.actions;

// Crear la store con configureStore
const store = configureStore({
  reducer: stringReducer,
});

export { saveString, store };
