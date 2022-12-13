import React, { FC, useMemo } from 'react'
import { CardContainer } from '../../styles/styles';

const Card:FC<any> = ({cityWeatherInfo, isCelsius}) => {
    /**
     * The use of memo isnt very important here, but wanted to showcase the use case for it.
     * we can skip this step unless there is a huge computation happeneing. 
     * @param temperature 
     * @returns  value in celsius.
     */
    const convertToCelsius = (temperature : number) =>{
        return ((temperature - 32) * .5556 ).toFixed(1);
    }

    const Celsius = useMemo(() => convertToCelsius(cityWeatherInfo.temperature), [cityWeatherInfo.temperature])
    
  return (
    <CardContainer>
        <p>
          <span>Temperature:</span>
          <span>{isCelsius ? Celsius + 'C' : cityWeatherInfo.temperature + 'F'}&deg;</span>
        </p>
        <p>
          <span>Humidity:</span>
          <span>{cityWeatherInfo.humidity}%</span>
        </p>
        <p>
          <span>Wind Speed:</span>
          <span>${cityWeatherInfo.windspeed}km/h</span>
        </p>
    </CardContainer>
  )
}

export default Card