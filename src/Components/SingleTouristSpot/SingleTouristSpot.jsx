import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const SingleTouristSpot = ({ singleOne, index, Refetch }) => {
    const HandleUpdate = (id) => {
        console.log(id)
    }

    const HandleDelete = (id) => {
        const a = confirm();
        if (a) {
            axios.delete(`http://localhost:5000/user-list/${id}`)
                .then(confirmDelete => {
                    if (confirmDelete.data.deletedCount > 0) {
                        Refetch()
                    }
                })
        }
    }

    return (
        <tr className="hover">
            <th>{index}</th>
            <td>{singleOne.name}</td>
            <td>$ {singleOne.cost}</td>
            <td>{singleOne.country}</td>
            <td className="text-3xl"> <BiEdit className="hover:cursor-pointer" onClick={() => HandleUpdate(singleOne._id)} /></td>
            <td className="text-3xl"> <MdDelete className="hover:cursor-pointer" onClick={() => HandleDelete(singleOne._id)} /> </td>
        </tr>
    );
};

export default SingleTouristSpot;