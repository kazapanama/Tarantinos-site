import './MainScreen.css'
import { Link } from 'react-router-dom'


const MainScreen = ({translation}) => {
    return(
        <div className='main-screen'>
            <h1>{translation.main_title}</h1>
            <Link to="/menu" className="main-screen-href">{translation.main_button}</Link>
        </div>
    )
}

export default MainScreen