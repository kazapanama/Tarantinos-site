import './ArrowToTop.css'
import { useEffect,useState } from 'react';








const ArrowToTop = () => {


    const [scrollY, setScrollY] = useState(0);
    

    function logit() {
        setScrollY(window.pageYOffset);
        
      }
    
      useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", logit);
        };
      });
    

    

    return ( 
        
        


            <div className={scrollY > 600 ? 'arrowToTop see' :'arrowToTop'}>
                <a href="#menuList"> <img src='.\Images\menu\icons\arrow.svg' alt="arrow-icon" className='arrowTop'/></a>
            </div>
       
            
        
        

     );
}
 
export default ArrowToTop;