import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./component/Header";
// import Home from "./component/Home";
import Coins from "./component/Coins";
import Exchange from "./component/Exchange";
import CoinDetails from "./component/CoinDetails";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Exchange/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchange/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
