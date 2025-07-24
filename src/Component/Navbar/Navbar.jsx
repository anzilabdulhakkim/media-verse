import { useState, useEffect } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/media-verse-bgb.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/media-verse-logo.png';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';

function Navbar({
  setSidebar,
  searchTerm,
  setSearchTerm,
  setExecutedSearchTerm,
  debouncedSearchTerm,
}) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedSearchTerm) {
        try {
          const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${debouncedSearchTerm}&type=video&key=${API_KEY}`
          );
          const data = await response.json();
          setSuggestions(data.items || []);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [debouncedSearchTerm]);

  const handleSearch = () => {
    setExecutedSearchTerm(searchTerm);
    setSuggestions([]);
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar(prev => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} className="search-btn">
            <img src={search_icon} alt="Search" />
          </button>
        </div>
        {suggestions.length > 0 && (
          <div className="suggestions-dropdown">
            {suggestions.map(suggestion => (
              <div
                key={suggestion.id.videoId}
                className="suggestion-item"
                onClick={() => {
                  setSearchTerm(suggestion.snippet.title);
                  setSuggestions([]);
                }}
              >
                {suggestion.snippet.title}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
