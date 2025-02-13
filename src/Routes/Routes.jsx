import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import CountrySpots from "../Pages/CountrySpots/CountrySpots";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyList from "../Pages/MyList/MyList";
import Register from "../Pages/Register/Register";
import TouristSpotDetails from "../Pages/TouristSpotDetails/TouristSpotDetails";
import UpdateTouristSpot from "../Pages/UpdateTouristSpot/UpdateTouristSpot";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://trekking-trips.vercel.app/country")
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/my-list",
                element: <PrivateRoute><MyList /></PrivateRoute>
            },
            {
                path: "/my-list/update/:Id",
                element: <PrivateRoute><UpdateTouristSpot /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://trekking-trips.vercel.app/tourist-spot/${params.Id}`)
            },
            {
                path: "/add-new-tourists-spot",
                element: <PrivateRoute><AddTouristSpot /></PrivateRoute>
            },
            {
                path: "/all-tourists-spot",
                element: <AllTouristsSpot />
            },
            {
                path: "/tourist-spot/:id",
                element: <PrivateRoute><TouristSpotDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://trekking-trips.vercel.app/tourist-spot/${params.id}`)
            },
            {
                path: "/tourist-spot/country/:countryName",
                element: <CountrySpots />,
                loader: ({ params }) => fetch(`https://trekking-trips.vercel.app/tourist-spot/country/${params.countryName}`)
            },

        ]
    }
])

export default router