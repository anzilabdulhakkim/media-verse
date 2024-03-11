import {useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Videos/Video'
import { useState } from 'react'
import Loader from './Component/Loader/Loader'

function App() {
  const [sidebar,setSidebar]=useState(true)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setIsLoading(true);
      let timer = setTimeout(() => {
          setIsLoading(false);
          return () => clearInterval(timer);
      }, 2000);
  }, []);
  

  return (
    <>
    {isLoading ? <Loader /> :
    (<div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>)
    }
    </>
  )
}

export default App
