import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import SearchedResults from "./Components/SearchedResults";
import CreateProperty from "./Components/CreateProperty";
import EditProperty from "./Components/EditProperty";
import Login from "./UserPages/LoginPage";
import SignUp from "./UserPages/CreateUser";
import ForgotPassword from "./UserPages/ForgetPassword";
import ResetPassword from "./UserPages/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/results" element={<SearchedResults />} />
          <Route path="/create" element={<CreateProperty />} />
          <Route path="/edit/:id" element={<EditProperty />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
