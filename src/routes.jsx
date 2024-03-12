import { createBrowserRouter } from "react-router-dom";
import { UserForm } from "./components/useForm";
import { LoginPage } from "./pages/Login";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <h1>Pagina inicial</h1>
    },
    {
    path: "/login",
    element: <LoginPage />,
    },
])