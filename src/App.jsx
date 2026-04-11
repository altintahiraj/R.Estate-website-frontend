import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import Home from "./pages/Home";
import ManageListings from "./pages/ManageListings";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";


function App() {
  return (
    <BrowserRouter>
     
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-listings" element={<ManageListings />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
