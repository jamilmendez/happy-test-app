import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, peopleSlice } from "./slices";

export interface AppStore {
  people: Person[];
  favorites: Person[];
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
  }
})