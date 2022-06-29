
import './App.css';

import {useState,useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Navigation from './components/Navigation/Navigation';
import Start from './pages/Start';
import Menu from './pages/Menu';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer'

function App() {

  const [mobMenu,setMobMenu] = useState(false)
  const [language,setLanguage] = useState('UA')
  const [menu, setMenu] = useState({})

  useEffect( () => {
   
  const fetchMenu = async () => {
    const response = await fetch(`./data/${language}-menu.json`)
    const json = await response.json()

    setMenu(json)
    
    
  }

  

  fetchMenu()

  },[language])

  useEffect (()=>{
    disableScroll(mobMenu);
  },[mobMenu])


  const disableScroll = (mobMenu) => {
    mobMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
  }





  return (
    <>
    <Navigation mobMenu={mobMenu} setMobMenu={setMobMenu}/>
    <ScrollToTop />
    <Routes>
        <Route path='/' element={<Start/>} />  
        <Route path='/menu' element={<Menu menu={menu}/>} />  
        <Route path='/about' element={<About/>} />  
        <Route path='*' element={<NotFound />} />  
    </Routes>
    <Footer />
    </>
    
   
    
  );
}

export default App;
