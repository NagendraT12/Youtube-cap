import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { useAuth } from './hooks/useAuth';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { VideoPlayer } from './pages/VideoPlayer';
import { Channel } from './pages/Channel';
import { SearchResults } from './pages/SearchResults';
import { Auth } from './pages/Auth';
import { NotFound } from './pages/NotFound';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Layout onThemeToggle={toggleTheme} user={user}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch/:videoId" element={<VideoPlayer />} />
            <Route path="/channel/:channelId" element={<Channel />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;