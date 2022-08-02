import { createSlice } from '@reduxjs/toolkit';
import { favouriteFood } from '../data/dataCategoriesFoodLocal';

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: favouriteFood,
    reducers: {}
});

const { reducer: favouriteReducer } = favouriteSlice;
export default favouriteReducer;
