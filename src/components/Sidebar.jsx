// src/components/Sidebar.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSidebar } from '../context/SidebarContext';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isSidebarOpen } = useSidebar();
  const sidebarItems = [
    {
      icon: <HomeIcon />,
      text: 'Home',
      path: '/'
    },
    {
      icon: <ShortcutIcon />,
      text: 'Shorts',
      path: '/shorts'
    },
    {
      icon: <SubscriptionsIcon />,
      text: 'Subscriptions',
      path: '/subscriptions'
    },
    {
      icon: <VideoLibraryIcon />,
      text: 'Library',
      path: '/library'
    },
    {
      icon: <HistoryIcon />,
      text: 'History',
      path: '/history'
    }
  ];

  return (
    <div className={`sidebar ${!isSidebarOpen ? 'sidebar--collapsed' : ''}`}>
      <div className="sidebar__sections">
        {sidebarItems.map((item) => (
          <div
            key={item.path}
            className={`sidebar__item ${location.pathname === item.path ? 'sidebar__item--active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="sidebar__signin">
        <p>Sign in to like videos, comment, and subscribe.</p>
        <button className="sidebar__signinButton">
          <AccountCircleIcon />
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Sidebar;