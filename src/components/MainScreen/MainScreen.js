import './MainScreen.css'
import { Link } from 'react-router-dom'


const MainScreen = () => {
    return(
        <div className='main-screen'>
            <h1>НАЙСМАЧНІШІ У МІСТІ РІВНЕ</h1>
            <Link to="/menu" className="main-screen-href">ПОКАЗАТИ  МЕНЮ</Link>
        </div>
    )
}

export default MainScreen