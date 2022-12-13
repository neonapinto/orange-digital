import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../Interfaces/Interface";
import { findVal } from "../../utils/util";
import data from './../../data/data.json';


const initialState: IInitialState = {
    data,
    cityWeatherInfo: {},
    city: "",
    isCelsius: false,
};

/**
 * Weather slice in the reducer for handling all 
 * weather states
 * I have added all the weather data in the reducer
 * to showcase the state management for the application
 * I have used redux toolkit as its easier to maintain
 */

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        //get the city weather info for the city user input
        getWeatherInfo: (state) =>{
            if(findVal(state.data, state.city)){
                state.cityWeatherInfo = findVal(state.data, state.city);
            }
            else{
                state.cityWeatherInfo = {}
            }
        },
        //set the city based on user input
        setCity: (state, action) =>{
            state.city = action.payload;
        },
        //toggle the temperature degree based on the user preference
        toggleTempDegree: (state, action) =>{
            state.isCelsius = !action.payload;
        }
    }
})

export const {getWeatherInfo, setCity, toggleTempDegree}  = weatherSlice.actions;
export default weatherSlice.reducer;
