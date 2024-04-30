import { useLoaderData } from "react-router-dom";
import TouristSpot from "../../Components/TouristSpot/TouristSpot";

const AllTouristsSpot = () => {
    const allTouristSpot = useLoaderData();
    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                allTouristSpot.map(touristSpot => <TouristSpot touristSpot={touristSpot} key={touristSpot._id}></TouristSpot>)
            }
        </div>
    );
};

export default AllTouristsSpot;