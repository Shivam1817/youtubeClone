import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar__section">
        <div className="sidebar__item sidebar__item--selected" onClick={() => navigate('/')}>
          <HomeIcon />
          <span>Home</span>
        </div>
        <div className="sidebar__item">
          <ExploreOutlinedIcon />
          <span>Shorts</span>
        </div>
        <div className="sidebar__item">
          <SubscriptionsOutlinedIcon />
          <span>Subscriptions</span>
        </div>
        <hr className="sidebar__divider" />
        <div className="sidebar__item">
          <VideoLibraryOutlinedIcon />
          <span>Library</span>
        </div>
        <div className="sidebar__item">
          <HistoryOutlinedIcon />
          <span>History</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;