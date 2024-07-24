import { AppRouter } from "./components/AppRouter";
import { RouterProvider } from "react-router-dom";

const App = () => {
  const router = AppRouter();
  return <RouterProvider router={router.router} />;
};

export default App;
