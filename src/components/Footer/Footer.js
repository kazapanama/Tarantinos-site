import './Footer.css'

const Footer = ({translation}) => {
    return ( 
        <footer>
            
        <div className='f1'>
            <img src="./Images/header/nav-logo.svg" alt='tarantinos logo' title="tarantinos logo"/>
            <div className='footer-location'>
                    <span>{translation.footer_adress}</span>
                    <span>{translation.nav_hours}</span>
                </div>
        </div>
        <div className='f2'>
        <div className='footer-order'>
                <span>{translation.nav_order}</span>
                <a href='tel:067-360-6003'>067 360 60 03</a>
                <span>{translation.nav_hours}</span>
            </div>

            <div className="social-footer">
                <a href='https://www.facebook.com/tarantinosrv/'><img src ='./Images/header/facebook-icon.svg' alt='facebook icon' title="facebook icon"/></a>
                <a href='https://www.google.com/maps/uv?pb=!1s0x472f131b97dc4df7%3A0xa524b033ee50b39b!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOHTQ9g8Z0uGGjhmBH6cgFa-JKTVe2PocUhNXoW%3Dw120-h160-k-no!5starantinos%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipOHTQ9g8Z0uGGjhmBH6cgFa-JKTVe2PocUhNXoW&hl=en&sa=X&ved=2ahUKEwjL58bM-cz4AhXQYPEDHeGEDqkQoip6BAhSEAM'><img src ='./Images/header/google-icon.svg' alt='google icon' title="google icon"/></a>
                <a href='https://www.instagram.com/tarantinosrv/'><img src ='./Images/header/instagram-icon.svg' alt='instagram icon'/></a>
            </div>

        </div>
           

            
        </footer>
     );
}
 
export default Footer
;