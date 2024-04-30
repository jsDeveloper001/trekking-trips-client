import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyList from "../Pages/MyList/MyList";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import TouristSpotDetails from "../Pages/TouristSpotDetails/TouristSpotDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "my-list",
                element: <PrivateRoute><MyList /></PrivateRoute>
            },
            {
                path: "add-new-tourists-spot",
                element: <PrivateRoute><AddTouristSpot /></PrivateRoute>
            },
            {
                path: "all-tourists-spot",
                element: <AllTouristsSpot />,
                loader: () => fetch("http://localhost:5000/all-tourist-spot")
            },
            {
                path: "tourist-spot/:id",
                element: <PrivateRoute><TouristSpotDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/tourist-spot/${params.id}`)
            }
        ]
    }
])

export default router