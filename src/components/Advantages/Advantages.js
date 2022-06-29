import './Advantages.css'
import '../MainScreen/MainScreen.css'
import {Link} from 'react-router-dom'

import Advantage from '../Advantage/Advantage'

const Advantages = () => {
    return(
        <section id='advantages'>
            <div className="wrapper">
                <h2><strong>Tarantinos</strong> це:</h2>
                
                <Advantage 
                title='Смак справжнього бургера'
                path='./Images/start/Advantage1.jpg'
                />

                <Advantage 
                title='Особлива атмосфера'
                path='./Images/start/Advantage2.jpg'
                />

                <Advantage 
                title='Та велике різноманіття'
                path='./Images/start/Advantage3.jpg'
                />

                <Advantage 
                title='Утворюють щось неймовіне'
                path='./Images/start/Advantage4.jpg'
                />

                <Advantage 
                title='Неймовірно унікальне'
                path='./Images/start/Advantage5.jpg'
                />

              
                
                <div className="start-berore-map">
                    <h2>Але найкраще, перевірити це особисто </h2>
                     <Link to="/menu" className="main-screen-href">ПОКАЗАТИ  МЕНЮ</Link>
                </div>
                


            </div>
        </section>
   
        )

}

export default Advantages