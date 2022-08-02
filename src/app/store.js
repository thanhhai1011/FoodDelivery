import { configureStore } from '@reduxjs/toolkit';
import foodReducer from '../redux/foodSlice';
import favouriteReducer from './favouriteSlice';

const rootReducer = {
    foods: foodReducer,
    favourites: favouriteReducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;