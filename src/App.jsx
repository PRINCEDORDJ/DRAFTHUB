import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Favorites from "./pages/Favorites";
import Template from "./pages/Template";
import Create from "./pages/Create";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <div className="sticky top-0 ">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Templates />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/my-templates" element={<Template />} />
            <Route path="/create" element={<Create />} />
            <Route path="/create/:id" element={<Create />}/>
          </Routes>
        </Router>
      </div>
     
 </>
  );
};

export default App;
