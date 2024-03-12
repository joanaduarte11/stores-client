import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function App() {
  

  return (
   <>
   <RouterProvider router={routes} />
   <ToastContainer />
   </>
  );
}