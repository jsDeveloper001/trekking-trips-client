import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TouristSpot from "../../Components/TouristSpot/TouristSpot";

const AllTouristsSpot = () => {
    const [touristsSpot, settouristsSpot] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        axios.get("https://trekking-trips.vercel.app/all-tourist-spot")
            .then(data => {
                settouristsSpot(data.data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                loading ?
                    <div className='text-center'><span className="loading loading-spinner loading-lg  text-warning"></span></div>
                    :
                    touristsSpot.length > 0 ?
                        <div>
                            {/* <div className="mx-auto w-3/12 mb-6">
                                <button className="btn flex w-full bg-blue-600 hover:bg-blue-700 text-white">Short By Avarage</button>
                            </div> */}
                            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                {
                                    touristsSpot.map(touristSpot => <TouristSpot touristSpot={touristSpot} key={touristSpot._id}></TouristSpot>)
                                }
                            </div>
                        </div>
                        :
                        <div className="text-center mt-6">
                            <p className="text-2xl mb-4">No Data found for Tourists Spot</p>
                            <Link to={"/add-new-tourists-spot"}>
                                <button className="btn bg-sky-700 hover:bg-sky-800 text-white">Add From Here!</button>
                            </Link>
                        </div>
            }
        </div>
    );
};

export default AllTouristsSpot;