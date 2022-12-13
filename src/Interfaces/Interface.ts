export interface ICityWeatherInfo {
    temperature?: number,
    humidity?: number,
    windspeed?: number
}

export interface IWeatherData {
    [name: string] : ICityWeatherInfo
}

export type IInitialState ={
    data: IWeatherData;
    cityWeatherInfo: ICityWeatherInfo;
    city: string;
    isCelsius: boolean;
}

export interface IInputProps{
    value: string;
    onChange: (value: string) => void;
}

export interface IButtonProps{
    onClick: () => void;
    children: React.ReactNode;
}

