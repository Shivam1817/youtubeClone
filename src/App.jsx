import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import SearchPage from './pages/SearchPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__main">
          <Sidebar />
          <div className="app__content">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/search/:searchQuery" element={<SearchPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;