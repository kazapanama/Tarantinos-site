
import './App.css';

import {useState,useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Navigation from './components/Navigation/Navigation';
import Start from './pages/Start';
import Menu from './pages/Menu';
import About from './pages/About';

import Footer from './components/Footer/Footer'

function App() {

  const [mobMenu,setMobMenu] = useState(false)
  const [language,setLanguage] = useState('UA')
  const [menu, setMenu] = useState({})
  const [translation,setTranlation] = useState({})

  useEffect( () => {
   
  const fetchMenu = async () => {
    const response = await fetch(`./data/${language}-menu.json`)
    const json = await response.json()

    setMenu(json)
    
  }

  

  fetchMenu()
  

  },[language])

  useEffect( () => {

    const fetchTranslation = async () => {
      const response = await fetch(`./data/${language}-translation.json`)
      const json = await response.json()
  
      setTranlation(json)
      
    }

    fetchTranslation()
  },[language])



  useEffect (()=>{
    disableScroll(mobMenu);
  },[mobMenu])


  const disableScroll = (mobMenu) => {
    mobMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
  }





  return (
    <>
    <Navigation mobMenu={mobMenu} setMobMenu={setMobMenu} setLanguage={setLanguage} language={language} translation={translation}/>
    <ScrollToTop />
    <Routes>
        <Route path='/' element={<Start translation={translation}/>} />  
        <Route path='/menu' element={<Menu menu={menu} translation={translation}/>} />  
        <Route path='/about' element={<About translation={translation}/>} />  
    </Routes>
    <Footer translation={translation}/>
    </>
    
   
    
  );
}

export default App;
