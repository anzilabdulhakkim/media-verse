import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Videos/Video';
import Loader from './Component/Loader/Loader';
import useDebounce from './useDebounce/useDebounce';

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [executedSearchTerm, setExecutedSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearInterval(timer);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar
            setSidebar={setSidebar}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setExecutedSearchTerm={setExecutedSearchTerm}
            debouncedSearchTerm={debouncedSearchTerm}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home sidebar={sidebar} searchTerm={executedSearchTerm} />
              }
            />
            <Route path="/video/:categoryId/:videoId" element={<Video />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;