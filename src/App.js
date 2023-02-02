import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Help from "./Components/Help"
import Blog from "./Components/Blog"
import Pricing from "./Components/Pricing"
import NoPage from "./Components/NoPage"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChartJs-POC" element={<Home />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </div>
  );
}

export default App;
