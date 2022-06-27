import './Map.css'

const Map = () => {
    return ( 
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.326563127793!2d26.249251515212677!3d50.621050049085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f131b97dc4df7%3A0xa524b033ee50b39b!2zVGFyYW50aW5v4oCZcw!5e0!3m2!1sen!2sua!4v1656307472995!5m2!1sen!2sua" 
            title="map" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" 
            width="100%"
            height="100%"/>

           
        </div>
     );
}
 
export default Map;