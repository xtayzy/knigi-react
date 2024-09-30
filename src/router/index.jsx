import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/MainPage/index.jsx";
import {BooksPage} from "../pages/BooksPage/index.jsx";
import {AuthorsPage} from "../pages/AuthorsPage/index.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },

    {
        path: "/books",
        element: <BooksPage/>
    },

    {
        path: "/authors",
        element: <AuthorsPage/>
    },
])