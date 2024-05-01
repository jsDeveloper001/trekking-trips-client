import { useLoaderData } from 'react-router-dom';
import TouristSpot from '../../Components/TouristSpot/TouristSpot';

const CountrySpots = () => {
    const TouristSpots = useLoaderData()
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {TouristSpots.map(touristSpot => <TouristSpot touristSpot={touristSpot} key={touristSpot._id}></TouristSpot>)}
        </div>
    );
};

export default CountrySpots;