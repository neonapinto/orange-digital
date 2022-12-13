import { FC, useEffect } from 'react'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import Input from '../components/Input/Input'
import { useSelector, useDispatch } from "react-redux";
import { getWeatherInfo, toggleTempDegree, setCity } from '../features/weather/weatherSlice';
import { RootState } from '../store/store';
import {saveData, getData} from '../utils/util';
import { Container } from '../styles/styles';


const Home:FC = () => {
  //fetching the data from reducer
  const {cityWeatherInfo, city, isCelsius} = useSelector((state: RootState) => state.weather);

  const dispatch = useDispatch();
  
  //load the data from the local storage on component mounting
  useEffect(() =>{
    let city = getData('city') ?? '';
    let cityWeatherInfo = getData('cityWeatherInfo') ?? {};
    if(city&& cityWeatherInfo){
        dispatch(setCity(city));
        dispatch(getWeatherInfo());
    }
  },[]);

  //function to check if the weather information for the city is present
  const ifCityWeatherInfo = () =>{
    return Object.keys(cityWeatherInfo).length > 0;
  }

  //on click of get forecast, display the weather info for given city
  const handleCityWeatherInfo = () =>{
    dispatch(getWeatherInfo());
    saveData('city', city);
    saveData('cityWeatherInfo', JSON.stringify(cityWeatherInfo));
  }

  return (
    <Container>
        <h3>Weather Forecast</h3>
        <Input value={city} onChange={(value) => dispatch(setCity(value))}/>
        <Button onClick={handleCityWeatherInfo}>Get Forecast!</Button>
        {ifCityWeatherInfo() && <Card cityWeatherInfo ={cityWeatherInfo} isCelsius={isCelsius}/>}
        {ifCityWeatherInfo() && 
            <Button 
                onClick={()=>dispatch(toggleTempDegree(isCelsius))}>{`Convert to ${isCelsius ? 'Fahrenheit' : 'Celsius'}`}
            </Button>}
    </Container>
  )
}

export default Home