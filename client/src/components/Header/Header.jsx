// Header.jsx
import './Header.css';
import { moon } from '../../assets'; // Use named import with curly braces

const Header = () => {
  return (
    <main className='main'>
      <header className="header">
        <h1>TODO LIST!</h1>
      </header>

      <div className="content">
        <input className="search" placeholder="Search..." />
        <select id="dropdown">
          <option value="ALL" disabled>Select an option</option>
          <option value="ALL">ALL</option>
          <option value="LATEST">LATEST</option>
          <option value="OLDEST">OLDEST</option>
        </select>

        <button className="theme">
          <img src={moon} alt="Theme Icon" />
        </button>
      </div>
    </main>
  );
};

export default Header;
