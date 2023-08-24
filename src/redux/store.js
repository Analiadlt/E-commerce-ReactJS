import { configureStore } from "@reduxjs/toolkit";
import petShopReducer from "./petShopSlice";

export const store = configureStore({
  reducer: {
    petShop: petShopReducer,
  },
});
