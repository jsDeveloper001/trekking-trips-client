import { IoLocationSharp } from 'react-icons/io5';
import { useLoaderData } from 'react-router-dom';

const TouristSpotDetails = () => {
    const TouristSpot = useLoaderData()
    return (
        <div className='mt-3 p-10 grid md:grid-cols-2 grid-cols-1 items-center gap-5'>
            <img src={TouristSpot.image} alt="banner image" className='w-full rounded-lg' />
            <div>
                <h2 className='text-xl font-bold my-3'>{TouristSpot.name}</h2>
                <div className='grid grid-cols-3'>
                    <p className='text-lg font-semibold'>Cost: ${TouristSpot.cost}</p>
                    <h2><span className='font-bold'>Travel Time:</span> {TouristSpot.time} Days</h2>
                </div>
                <div className='grid grid-cols-2 mt-3'>
                    <h2><span className='font-bold'>Country:</span> {TouristSpot.country}</h2>
                    <h2 className='font-bold'>Seasonaliry: {TouristSpot.seasonality}</h2>
                    <h2 className='flex items-center mt-3'><span className='font-bold text-lg'><IoLocationSharp /></span> {TouristSpot.location}</h2>
                </div>
                <p className='mt-3'><span className='font-bold'>About:</span> {TouristSpot.details}</p>
            </div>
        </div>
    );
};

export default TouristSpotDetails;