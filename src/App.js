
import './App.css';

import{BrowserRouter, Route, Routes} from 'react-router-dom'

//pages
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import About from './pages/About/About'
import NavBar from './components/NavBar';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
