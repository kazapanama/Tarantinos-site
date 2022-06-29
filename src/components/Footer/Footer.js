import './Footer.css'

const Footer = () => {
    return ( 
        <footer>
            
        <div className='f1'>
            <img src="./Images/header/nav-logo.svg" alt='tarantinos logo'/>
            <div className='footer-location'>
                    <span>Майдан Незалежності 7</span>
                    <span>11:00 - 21:00 | ПН - НД</span>
                </div>
        </div>
        <div className='f2'>
        <div className='footer-order'>
                <span>Доставка</span>
                <a href='tel:380-800-7890'>+380 555 35 35</a>
                <span>11:00 - 20:00 | ПН - НД</span>
            </div>

            <div className="social-footer">
                <a href='https://www.facebook.com/tarantinosrv/'><img src ='./Images/header/facebook-icon.svg' alt='facebook icon'/></a>
                <a href='https://www.google.com/maps/uv?pb=!1s0x472f131b97dc4df7%3A0xa524b033ee50b39b!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOHTQ9g8Z0uGGjhmBH6cgFa-JKTVe2PocUhNXoW%3Dw120-h160-k-no!5starantinos%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipOHTQ9g8Z0uGGjhmBH6cgFa-JKTVe2PocUhNXoW&hl=en&sa=X&ved=2ahUKEwjL58bM-cz4AhXQYPEDHeGEDqkQoip6BAhSEAM'><img src ='./Images/header/google-icon.svg' alt='google icon'/></a>
                <a href='https://www.instagram.com/tarantinosrv/?hl=en'><img src ='./Images/header/instagram-icon.svg' alt='instagram icon'/></a>
            </div>

        </div>
           

            
        </footer>
     );
}
 
export default Footer
;