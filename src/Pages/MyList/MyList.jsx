import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SingleTouristSpot from "../../Components/SingleTouristSpot/SingleTouristSpot";
import { Link } from "react-router-dom";
import { FirebaseAuth } from "../../Services/AuthProvider";

const MyList = () => {
    const { User } = useContext(FirebaseAuth)
    const [touristsSpot, settouristsSpot] = useState([]);
    const [Fetch, setRefetch] = useState(true)
    useEffect(() => {
        axios.get(`http://localhost:5000/user-list/${User.email}`)
            .then(data => {
                settouristsSpot(data.data)
            })
    }, [Fetch])

    const Refetch = () => {
        setRefetch(!Fetch)
    }

    if (touristsSpot.length > 0) {
        return <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Tourist Spot Name</th>
                            <th>Avarage Cost</th>
                            <th>Country Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            touristsSpot.map((singleOne, idx) => <SingleTouristSpot index={idx} singleOne={singleOne} key={singleOne._id} Refetch={Refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }
    else {
        return <div className="text-center mt-6">
            <p className="text-2xl mb-4">You haven't add any Tourists Spot Yet</p>
            <Link to={"/add-new-tourists-spot"}>
                <button className="btn bg-sky-700 hover:bg-sky-800 text-white">Add From Here!</button>
            </Link>
        </div>
    }
};

export default MyList;