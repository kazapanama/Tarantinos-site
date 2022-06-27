import './Sauses.css'

const Sauses = ({menu}) => {
    
   const {sauses} = menu
    return (
        <section id="sauses">
             <h2 className='burges-title'>Соуси</h2>
             <div className="wrapper">

               {sauses && sauses.map((sause) => {

              return  (
                    
                    <div key={sause.id}>
                    <div className="sause-item" >
                            <div className="sause-title-wrapper">
                            <span>{sause.name}</span>
                            </div>
                            
                            <span className="sause-weight">{sause.weight}г</span>
                            <span className="sause-price">{sause.price}грн</span>
                        
                        </div>
                        <hr />
                    </div>
                        
                   
                )


            })} 


             </div>
        </section>
    )
}

export default Sauses