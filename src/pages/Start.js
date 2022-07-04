
import MainScreen from "../components/MainScreen/MainScreen";
import Advantages from "../components/Advantages/Advantages";
// import Map from "../components/Map/Map";


const Start = ({translation}) =>{
    return(
        <>
            <MainScreen translation={translation}/>
            <Advantages translation={translation}/>
            {/* <Map /> */}
        </>
    )
}

export default Start