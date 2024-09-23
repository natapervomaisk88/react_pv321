import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import routes from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Layout />
    </>
  );
}

export default App;
