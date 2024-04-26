import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import { register } from "swiper/element-bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
