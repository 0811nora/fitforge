import { createHashRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Preference from "../pages/Preference.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "preference",
        element: <Preference />,
      },
    ],
  },
]);

export default router;
