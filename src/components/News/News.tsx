import './News.css'
interface NewsItem {
    image: string;
    link: string;
    text: string;
  }

interface PriceItem {
  USD: string;
  EUR: string;
  Oil: string;
}                                    
  
  interface News {
    titles: string[];
    dateTime: string;
    news: NewsItem[];
    prices: PriceItem;
  }
  
  const News: React.FC<News> = ({ titles, dateTime, news, prices }) => {
    // News component
    return (
      <div className="news">
        <div className='news-titles-date'>
          <div className='news-titles'>
            {titles.map((title, index) => (
              <a key={index} href="#">
                {title}
              </a>
            ))}
          </div>
          <div>{dateTime}</div>
        </div>

        <div className='news-list'>
          {news.map((item, index) => (
            <div  className='news-item' key={index}>
              <img src={item.image} alt={`News ${index}`} />
              <a href={item.link}>
                {item.text}
              </a>
            </div>
          ))}
        </div>
  
        <div className="prices">
          <div className='price'>USD: {prices['USD']}</div>
          <div className='price'>EUR: {prices['EUR']}</div>
          <div className='price'>EUR: {prices['Oil']}</div>
        </div>
      </div>
    );
  };
  
  export default News;