import { useContext } from 'react';
import { FirebaseAuth } from '../../Services/AuthProvider';
import axios from 'axios';


const AddTouristSpot = () => {
    const { User } = useContext(FirebaseAuth)
    const userEmail = User.email
    const userName = User.displayName

    // console.log(data)

    const AddNewTouristSpot = (e) => {
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


        const SpotInfo = { name, time, country, seasonality, visitors, location, cost, image, details, userEmail, userName }

        axios.post("http://localhost:5000/add-tourist-spot", SpotInfo)
            .then(confirm => {
                if (confirm.data.insertedId) {
                    alert("added")
                }
            })


    }
    return (
        <div className='mt-2'>
            <h2 className='text-4xl text-center font-bold'>Add New Tourists Spot</h2>
            <div className='flex justify-center mt-5 h-auto px-5'>
                <div className='border-2 border-blue-600 w-full sm:max-w-3xl rounded-md p-3'>
                    <form onSubmit={AddNewTouristSpot}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                            <input type="text" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter Tourist Spot Name' name='name' required />

                            <input type="number" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter Travel Time (days)' name='time' required />

                            <select name='country' className="select select-bordered border-2 p-2 rounded-md focus:outline-blue-400 duration-100 w-full" required>
                                <option value={"Bangladesh"} disabled selected className='text-gray-200'>Select The Country</option>
                                <option value={"Bangladesh"}>Bangladesh</option>
                                <option value={"Thailand"}>Thailand</option>
                                <option value={"Indonesia"}>Indonesia</option>
                                <option value={"Malaysia"}>Malaysia</option>
                                <option value={"Vietnam"}>Vietnam</option>
                                <option value={"Cambodia"}>Cambodia</option>
                            </select>

                            <select name='seasonality' className="select select-bordered border-2 p-2 rounded-md focus:outline-blue-400 duration-100 w-full" required>
                                <option value={"winter"} disabled selected>Select Seasonality</option>
                                <option value={"winter"}>Winter</option>
                                <option value={"summer"}>Summer</option>
                            </select>

                            <input type="number" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Total Visitors Per Year' name='visitors' required />

                            <input type="text" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter Location: separate by(,)' name='location' required />

                            <input type="number" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100' placeholder='Enter Avarage Cost ($)' name='cost' required />

                            <input type="url" className='bg-transparent border-2 p-2 rounded-md focus:outline-blue-400 duration-100 w-full' placeholder='Enter Photo URL' name='image' required />
                        </div>
                        <textarea name="details" rows="5" className='bg-transparent border-2 mt-4 p-2 rounded-md focus:outline-blue-400 duration-100 w-full' placeholder='Write Something About the tourists Spot....' required></textarea>
                        <button className='btn bg-blue-600 hover:bg-blue-700 duration-500 text-white font-semibold mt-2 w-full'>Add Spot</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTouristSpot;