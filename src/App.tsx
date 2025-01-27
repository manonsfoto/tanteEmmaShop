import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="details/:item_id" element={<Details />} />
      </Route>
    )
  );

  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
