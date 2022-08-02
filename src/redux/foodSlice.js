import { createSlice } from '@reduxjs/toolkit'
import { newFood, foodData } from '../data/dataCategoriesFoodLocal'

const food = createSlice({
    name: 'foods',
    initialState: newFood,
    reducers: {
        increment: (state, action) => state + action.payload,
        decrement: (state, action) => state - action.payload,
        updateFoodFavourite: (state, action) => {
            console.log(state);
            const foodFavourite = action.payload;
            const food = action.payload.food;
            const foodIndex = state.food.findIndex(item => item.id === foodFavourite.id);
            if (foodIndex >= 0) {
                state[foodIndex].isFavourite = !state[foodIndex].foodFavourite
            }
        }
    }
});

const { reducer, actions } = food;
export const { increment, updateFoodFavourite } = actions;
export default reducer