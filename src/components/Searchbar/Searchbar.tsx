import './Searchbar.css';
import { useState } from 'react';

interface SearchBarProps {
    links: { label: string; href: string }[];
    text: string;
}


const SearchBar: React.FC<SearchBarProps> = ({ links, text }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search input:', searchInput);
  };
  
  return (
    <div className="searchbar">
        <ul className='searchbar-links'>
        {links.map((link, index) => (
            <li key={index}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                </a>
            </li>
        ))}
        </ul>
        <div className='image-form'>
            <img  height="32" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Search" />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleInputChange}
                    placeholder="Найти..."
                />
                <button type="submit">Найти!</button>
            </form>
        </div>
        <div className="text">Найдется все! Например: {text}</div>
    </div>
  );
};

export default SearchBar;

  