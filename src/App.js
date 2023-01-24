import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import DisplayCountries from "./components/Countries/displayCountries";
import Countries from "./components/Countries/Country";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <DisplayCountries />
        <Routes>
          <Route path="/country" element={<Countries />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
