import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Movies from './components/Movies'
// import Pagination from './components/Pagination'
import Favorites from './components/Favorites'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path = '/' element ={<>
      <Banner/>
      <Movies/>
      {/* <Pagination/> */}
      </>}/>
      <Route path = '/favorites' element ={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
