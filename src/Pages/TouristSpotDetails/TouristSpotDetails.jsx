import { useLoaderData } from 'react-router-dom';

const TouristSpotDetails = () => {
    const TouristSpot = useLoaderData()
    return (
        <div>
            <h2>{TouristSpot.name}</h2>
        </div>
    );
};

export default TouristSpotDetails;