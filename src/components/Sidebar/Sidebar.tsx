import './Sidebar.css'

interface Sidebar {
    image: string;
    link: string;
    linkText: string;
    text: string;
  }
  
  const Sidebar: React.FC<Sidebar> = ({ image, link, linkText, text }) => {
    // Sidebar component
    return (
      <div className="sidebar">
        <div className='image'><img src={image} alt={text} /></div>
        <div className="link">
          <a href={link}>{linkText}</a>
        </div>
        <div className='text'>{text}</div>
      </div>
    );
  };
  
  export default Sidebar;