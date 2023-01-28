import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import DisplayCountries from "./components/Countries/displayCountries";
import Countries from "./components/Countries/Country";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/*" element={<DisplayCountries />} />
          <Route path=":countryId" element={<Countries />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
