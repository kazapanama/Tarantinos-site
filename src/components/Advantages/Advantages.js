import './Advantages.css'
import '../MainScreen/MainScreen.css'
import {Link} from 'react-router-dom'

import Advantage from '../Advantage/Advantage'

const Advantages = ({translation}) => {
    return(
        <section id='advantages'>
            <div className="wrapper">
                <h2><strong>{translation.main_name}</strong>{translation.main_is}</h2>
                
                <Advantage 
                title={translation.main_a1}
                path='./Images/start/Advantage1.jpg'
                />

                <Advantage 
                title={translation.main_a2}
                path='./Images/start/Advantage2.jpg'
                />

                <Advantage 
                title={translation.main_a3}
                path='./Images/start/Advantage3.jpg'
                />

                <Advantage 
                title={translation.main_a4}
                path='./Images/start/Advantage4.jpg'
                />

                <Advantage 
                title={translation.main_a5}
                path='./Images/start/Advantage5.jpg'
                />

              
                
                <div className="start-berore-map">
                    <h2>{translation.main_prebutton}</h2>
                     <Link to="/menu" className="main-screen-href">{translation.main_button}</Link>
                </div>
                


            </div>
        </section>
   
        )

}

export default Advantages