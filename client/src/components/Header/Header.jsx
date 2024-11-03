import './Header.css';
import { moon } from '../../assets';

const Header = ({ onSearch, onSortChange, toggleTheme }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <header className='header'>
      <h1>TODO LIST!</h1>
      <div className="content">
        <input 
          className="search" 
          placeholder="Search..." 
          onChange={handleSearchChange} 
        />
        <select id="dropdown" onChange={handleSortChange}>
          <option value="ALL" disabled>Select an option</option>
          <option value="ALL">ALL</option>
          <option value="LATEST">LATEST</option>
          <option value="OLDEST">OLDEST</option>
        </select>
        <button className="theme" onClick={toggleTheme}>
          <img src={moon} alt="Theme Icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
