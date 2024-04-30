import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TouristSpot = ({ touristSpot }) => {
    // useEffect(()=>{
    //     axios.get("")
    //     .then(data => console.log(data.data))
    // }, [])
    return (
        <div>
            <div className='border-2 p-4 rounded-lg'>
                <img src={touristSpot.image} alt="Tourist Spot Image" className='w-full h-52 rounded-lg' />
                <h2 className='text-xl font-bold my-3'>{touristSpot.name}</h2>
                <p className='text-lg'>Cost: ${touristSpot.cost}</p>
                <Link to={`/tourist-spot/${touristSpot._id}`}><button className='mt-4 btn w-full bg-green-500 hover:bg-green-600 text-white'>View Details</button></Link>
            </div>
        </div>
    );
};

export default TouristSpot;