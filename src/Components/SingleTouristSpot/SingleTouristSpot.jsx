import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleTouristSpot = ({ singleOne, index, Refetch }) => {
    const HandleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://trekking-trips.vercel.app/user-list/${id}`)
                    .then(confirmDelete => {
                        if (confirmDelete.data.deletedCount > 0) {
                            Refetch()
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Tourist Spot Deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <tr className="hover">
            <th>{index}</th>
            <td>{singleOne.name}</td>
            <td>$ {singleOne.cost}</td>
            <td>{singleOne.country}</td>
            <td className="text-3xl"> <Link to={`/my-list/update/${singleOne._id}`}><BiEdit className="hover:cursor-pointer" /></Link></td>
            <td className="text-3xl"> <MdDelete className="hover:cursor-pointer" onClick={() => HandleDelete(singleOne._id)} /> </td>
        </tr>
    );
};

export default SingleTouristSpot;