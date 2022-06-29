import AboutScreen from '../components/AboutScreen/AboutScreen'
import Advantage from '../components/Advantage/Advantage'
import {Link} from 'react-router-dom'


const About = () =>{
    return(
        <>
          <AboutScreen /> 
          <main id='about-us'>
            <div className="wrapper">

            <Advantage 
                title='Ми в Tarantino`s надзвичайно полюбляємо 2 речі:
                Це фільми маестро Квентіна, та смачно попоїсти'
                path='./Images/about-us/about1.png'
                />

            <Advantage 
                title='І наскільки ми знаємо, таких самих цінувачів є дуже багато.
                Саме для таких людей ми і працюємо вже більше 6 років'
                path='./Images/about-us/about2.png'
                />

            <Advantage 
                title='І за допомогою смачної їжі, гарної музики, та унікальної атмосфери, допомагаємо людям гарно проводити час'
                path='./Images/about-us/about3.png'
                />

                <div className="start-berore-map">
                    <h2>Але найкраще, перевірити це особисто </h2>
                     <Link to="/menu" className="main-screen-href">ПОКАЗАТИ  МЕНЮ</Link>
                </div>




            </div>




          </main>
          
        </>
    )
}

export default About