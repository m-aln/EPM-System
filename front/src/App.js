import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import Verification from "./Pages/Verification"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Landing}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={Signup}></Route>
        <Route path="/Verification" Component={Verification}></Route> 


        {/* <Route path="/" Component={Test}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
