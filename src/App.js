import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { userList } from "./components/userList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { BrouserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="userList" element={<userList />} />
        <Route path="EmployeeDetails" element={<EmployeeDetails />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
