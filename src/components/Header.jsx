// src/components/Header.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__icon">
          <MenuIcon />
        </div>
        <img 
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo_white.svg"
          alt="YouTube"
          className="header__logo"
          onClick={() => navigate('/')}
        />
      </div>

      <form className="header__center" onSubmit={handleSearch}>
        <div className="header__search">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="header__searchButton">
            <SearchIcon />
          </button>
        </div>
        <div className="header__mic">
          <MicIcon />
        </div>
      </form>

      <div className="header__right">
        <div className="header__icon">
          <VideoCallIcon />
        </div>
        <div className="header__icon">
          <NotificationsNoneIcon />
        </div>
        <div className="header__icon">
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;