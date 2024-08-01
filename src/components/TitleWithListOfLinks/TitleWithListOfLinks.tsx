import './TitleWithListOfLinks.css';

interface TitleWithListOfLinksData {
    title: string;
    links: { url: string; text: string }[];
}
  
const TitleWithListOfLinks: React.FC<TitleWithListOfLinksData> = ({ title, links }) => {
    // TitleWithListOfLinks component
    return (
        <>
            <h2 className='title'>{title}</h2>
            <div className='links'>
                {links.map((link, index) => (
                    <a key={index} href={link.url}>
                        {link.text}
                    </a>
                ))}
            </div>
        </>
    );
};
  
export default TitleWithListOfLinks;
