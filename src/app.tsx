import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripsDetails } from "./pages/trips-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />
  },
  {
    path: "/trip/:tripId",
    element: <TripsDetails/>
  },
])

export function App() {
  return <RouterProvider router={router}/>
}

