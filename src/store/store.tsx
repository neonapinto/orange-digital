import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from './../features/weather/weatherSlice';

//add all the reducers and access them from store.
export const store = configureStore({
    reducer:{
        weather: weatherReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;