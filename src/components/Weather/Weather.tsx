import './Weather.css';

interface WeatherProps {
    temperatureImage: string;
    temperature: string;
    morning: string;
    evening: string;
}

const Weather: React.FC<WeatherProps> = ({ temperatureImage, temperature, morning, evening }) => {
  // Weather component
    return (
        <div className="weather">
            <h2 className='weather-title'>Погода</h2>
            <div className='weather-content'>
              <div className='weather-image'>
                  <img src={temperatureImage} alt="Картинка погоды" />
              </div>
              <div className="temperature">
                  {temperature}
              </div>
              <div className='morning-evening'>
                <div className='morning'>{morning}</div>
                <div className='evening'>{evening}</div>
              </div>
            </div>
        </div>
    );
};

export default Weather;
