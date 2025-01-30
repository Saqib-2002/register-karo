import Banner from "./components/Banner";
import Company from "./components/Company";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./components/Services";
import About from "./components/About";
import Choose from "./components/Choose";
import Video from "./components/Video";
import HappyClients from "./components/HappyClients";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Company />
      <Services />
      <About />
      <Choose />
      <Video />
      <HappyClients />
      <Cards />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
