import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export default function App() {
  

  return (
   <>
   <RouterProvider router={routes} />
   <ToastContainer />
   </>
  );
}