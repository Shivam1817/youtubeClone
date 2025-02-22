import { HashRouter as Router, Routes, Route } from 'react-router-dom';import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SearchPage from './pages/SearchPage';
import WatchPage from './pages/WatchPage';
import './App.css';
import { SidebarProvider } from './context/SidebarContext';

function App() {
  return (
  <SidebarProvider>
    <Router>
      <div className="app">
        <Header />
        <div className="app__main">
          <Sidebar />
          <div className="app__content">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/search/:searchQuery" element={<SearchPage />} />
              <Route path="/watch/:videoId" element={<WatchPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </SidebarProvider>
  );
}

export default App;