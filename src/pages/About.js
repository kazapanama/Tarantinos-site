import AboutScreen from '../components/AboutScreen/AboutScreen'
import Advantage from '../components/Advantage/Advantage'
import {Link} from 'react-router-dom'


const About = ({translation}) =>{
    return(
        <>
          <AboutScreen translation={translation}/> 
          <main id='about-us'>
            <div className="wrapper">

            <Advantage 
                title={translation.about_a1}
                path='./Images/about-us/about1.png'
                />

            <Advantage 
                title={translation.about_a2}
                path='./Images/about-us/about2.png'
                />

            <Advantage 
                title={translation.about_a3}
                path='./Images/about-us/about3.png'
                />

                <div className="start-berore-map">
                    <h2>{translation.main_prebutton}</h2>
                     <Link to="/menu" className="main-screen-href">{translation.main_button}</Link>
                </div>




            </div>




          </main>
          
        </>
    )
}

export default About