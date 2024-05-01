import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTouristSpot = () => {
    const touristSpot = useLoaderData();
    const HandleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const time = e.target.time.value
        const country = e.target.country.value
        const seasonality = e.target.seasonality.value
        const visitors = e.target.visitors.value
        const location = e.target.location.value
        const cost = e.target.cost.value
        const image = e.target.image.value
        const details = e.target.details.value

        const SpotInfo = { name, time, country, seasonality, visitors, location, cost, image, details }
        axios.put(`https://trekking-trips.vercel.app/my-list/update/${touristSpot._id}`, SpotInfo)
            .then(confirm => {
                if (confirm.data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Information has been Updated.",
                        icon: "success"
                    });
                }
                else {
                    Swal.fire({
                        title: "Already Updated!",
                        text: "Your are already Updated.",
                        icon: "warning"
                    })
                }
            })
    }
    return (
        <div className='mt-2'>
            <h2 className='text-4xl text-center font-bold'>Update Tourists Spot</h2>
            <div className='flex justify-center mt-5 h-auto px-5'>
                <div className='border-2 border-orange-600 w-full sm:max-w-3xl rounded-md p-10'>
                    <form onSubmit={HandleUpdate}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                            <input type="text" defaultValue={touristSpot.name} className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter Tourist Spot Name' name='name' required />

                            <input type="number" defaultValue={touristSpot.time} className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter Travel Time (days)' name='time' required />

                            <select name='country' defaultValue={touristSpot.country} className="select select-bordered border-2 p-2 rounded-md focus:outline-blue-400 duration-100 w-full" required>
                                <option disabled selected className='text-gray-200'>Select The Country</option>
                                <option value={"Bangladesh"}>Bangladesh</option>
                                <option value={"Thailand"}>Thailand</option>
                                <option value={"Indonesia"}>Indonesia</option>
                                <option value={"Malaysia"}>Malaysia</option>
                                <option value={"Vietnam"}>Vietnam</option>
                                <option value={"Cambodia"}>Cambodia</option>
                            </select>

                            <select name='seasonality' defaultValue={touristSpot.seasonality} className="select select-bordered border-2 p-2 rounded-md focus:outline-blue-400 duration-100 w-full" required>
                                <option value={"winter"} disabled selected>Select Seasonality</option>
                                <option value={"winter"}>Winter</option>
                                <option value={"summer"}>Summer</option>
                            </select>

                            <input type="number" defaultValue={touristSpot.visitors} className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Total Visitors Per Year' name='visitors' required />

                            <input type="text" defaultValue={touristSpot.location} className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter Location: separate by(,)' name='location' required />

                            <input type="number" defaultValue={touristSpot.cost} className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter Avarage Cost ($)' name='cost' required />

                            <input type="url" defaultValue={touristSpot.image} className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100 w-full' placeholder='Enter Photo URL' name='image' required />
                        </div>
                        <textarea name="details" defaultValue={touristSpot.details} rows="5" className='bg-transparent border-2 mt-4 p-2 rounded-md focus:outline-blue-400 duration-100 w-full' placeholder='Write Something About the tourists Spot....' required></textarea>
                        <button className='btn bg-orange-600 hover:bg-orange-700 duration-500 text-white font-semibold mt-2 w-full'>Update Tourist Spot</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTouristSpot;