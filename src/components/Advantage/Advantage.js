import './Advantage.css'

const Advantage = ({title,path}) => {
    return(
        <div className='Advantage'>
           
            <img src={path} className="advantage-img" alt="advantage img"/>
            <h3>{title}</h3>
        </div>
    )
}

export default Advantage