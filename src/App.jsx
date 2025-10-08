import { RouterProvider } from "react-router";
import { router } from "./Routes/index.jsx";

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
