import './Advantage.css'

const Advantage = ({title,path}) => {
    return(
        <div className='Advantage'>
           
            <img src={path} />
            <h3>{title}</h3>
        </div>
    )
}

export default Advantage