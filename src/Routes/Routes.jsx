import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<ErrorPage/>
    }
])

export default router