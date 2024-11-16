import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Body/Home";
import ListBooks from "../pages/Body/ListBooks";
import Structure from "../pages/Structure/structure";
import CreateBooks from "../pages/Body/CreateBooks";
import UpdateBooks from "../pages/Body/UpdateBooks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Structure body={<Home/>}/>
    },
    {
        path: "/books/list",
        element: <Structure body={<ListBooks/>}/>
    },
    {
        path: "/books/create",
        element: <Structure body={<CreateBooks/>}/>
    },
    {
        path: "/books/update/:nome_livro",
        element: <Structure body={<UpdateBooks/>}/>
    },
    {
        path: "*",
        element: <h1>Teu pai, não encontrei</h1>
    }
    
]) 

const Routes = () => {
    return <RouterProvider router={router}/>
}

export default Routes;