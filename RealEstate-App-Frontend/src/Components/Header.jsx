// import { useState, useEffect } from "react";
// import { Dropdown } from "react-bootstrap";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useAuth } from "../Hooks/useAuth";
// import { Link } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);
//   const { isLoggedIn, setIsLoggedIn } = useAuth();

//   useEffect(() => {
//     const token = sessionStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//       try {
//         const userDataFromToken = jwtDecode(token);
//         setUserData(userDataFromToken);
//       } catch (error) {
//         console.error("Error decoding token:", error);
//         toast.error("Invalid token. Please login again.");
//         sessionStorage.removeItem("token");
//         setIsLoggedIn(false);
//         setUserData(null);
//       }
//     } else {
//       setIsLoggedIn(false);
//       setUserData(null);
//     }
//   }, [isLoggedIn, setIsLoggedIn]);

//   // Function to handle authentication change (login/logout)
//   const handleAuthenticationChange = () => {
//     if (isLoggedIn) {
//       sessionStorage.removeItem("token");
//       setIsLoggedIn(false);
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 bg-slate-900 bg-opacity-70 h-16 sm:h-20 md:h-24 lg-xl:h-20 w-full`}
//     >
//       <div className="flex flex-row justify-between items-center mx-8 my-4">
//         <div className="ml-8 text-3xl font-extrabold font-serif">  
//             Property99
//         </div>
//         <div className="flex items-center gap-4">
//           <button className="px-4 py-2 bg-blue-500 rounded-xl">
//           <i className ="fa-solid fa-house"></i>
//           <span className="px-2">Add Property</span> 
//           </button>
//           <span>
//             <Dropdown>
//               <Dropdown.Toggle variant="light" id="dropdown-basic">
//                 <i className="fa-solid fa-circle-user fa-2xl"></i>
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//               {isLoggedIn && (
//                   <div className="products-text">
//                     {userData?.firstName} {userData?.lastName}
//                   </div>
//                 )}
//                 <Dropdown.Item onClick={handleAuthenticationChange}>
//                   <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
//                   {isLoggedIn ? "Logout" : "Login"}
//                 </Dropdown.Item>
//                 <Dropdown.Item as={Link} to="/profile">
//                   <i className="fa-solid fa-user"></i> Profile
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import {jwtDecode} from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Hooks/useAuth";

function Header() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      try {
        const userDataFromToken = jwtDecode(token);
        setUserData(userDataFromToken);
      } catch (error) {
        console.error("Error decoding token:", error);
        toast.error("Invalid token. Please login again.");
        sessionStorage.removeItem("token");
        setIsLoggedIn(false);
        setUserData(null);
      }
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  }, [setIsLoggedIn]);

  const handleAuthenticationChange = () => {
    if (isLoggedIn) {
      sessionStorage.removeItem("token");
      setIsLoggedIn(false);
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="fixed top-0 bg-slate-900 bg-opacity-70 h-16 sm:h-20 md:h-24 lg-xl:h-20 w-full">
      <div className="flex flex-row justify-between items-center mx-8 my-4">
        <div className="ml-8 text-2xl font-bold font-serif ">  
        <a href="/">
          <span className="hidden lg-xl:block xl:block ml-2">PropertyBazaars</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-500 rounded-xl">
            <i className="fa-solid fa-house"></i>
            <span className="px-2">Add Property</span> 
          </button>
          <span>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <i className="fa-solid fa-circle-user fa-2xl"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {isLoggedIn && (
                  <Dropdown.ItemText>
                    <div className="products-text">
                      {userData?.firstName} {userData?.lastName}
                    </div>
                  </Dropdown.ItemText>
                )}
                <Dropdown.Item onClick={handleAuthenticationChange}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                  {isLoggedIn ? "Logout" : "Login"}
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/profile">
                  <i className="fa-solid fa-user"></i> Profile
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
