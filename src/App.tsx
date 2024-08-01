import './App.css';
import News from './components/News/News.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import SearchBar from './components/Searchbar/Searchbar.tsx';
import Weather from './components/Weather/Weather.tsx';
import TitleWithListOfLinks from './components/TitleWithListOfLinks/TitleWithListOfLinks.tsx';
import { titles, dateTime, news, prices } from './data.ts';
import { image, link, linkText, text } from './data.ts';
import { searchBarData } from './data.ts';
import { weatherData } from './data.ts';
import { popularData } from './data.ts';
import { mapData } from './data.ts';
import { tvData } from './data.ts';
import {airData} from './data.ts';


const App: React.FC = () => {
  
  return (
    <>
      <div className='news-sidebar'>
        <News 
          titles={titles}
          dateTime={dateTime}
          news={news}
          prices={prices}
        />
        <Sidebar
          image={image}
          link={link}
          linkText={linkText}
          text={text}
        />
      </div>
      <SearchBar 
        links={searchBarData.links} 
        text={searchBarData.text} 
      />
      <div className='bottom-row'>
        <div className='weather-popular'>
          <Weather
            temperatureImage={weatherData.temperatureImage}
            temperature={weatherData.temperature}
            morning={weatherData.morning}
            evening={weatherData.evening}
          />
          <TitleWithListOfLinks
            title={popularData.title}
            links={popularData.links}
          />
        </div>
        <div className='map-program'>
          <div className='map'>
            <TitleWithListOfLinks
              title={mapData.title}
              links={mapData.links}
            />
          </div>
          <div className='tv-program'>
            <TitleWithListOfLinks
              title={tvData.title}
              links={tvData.links}
            />
          </div>
        </div>
        <div className='air'>
            <TitleWithListOfLinks
              title={airData.title}
              links={airData.links}
            />
          </div>
      </div>
    </>
  );
};

export default App;

