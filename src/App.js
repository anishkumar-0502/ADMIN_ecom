import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Auth/login';
import Register from './Pages/Auth/Register';
import Dashboard from './Pages/Dashboard';
import Viewproduct from './Pages/Products/Viewproduct';
import Addproduct from './Pages/Products/Addproduct';
import ViewCategory from './Pages/Category/ViewCategory';
import Addcategory from './Pages/Category/Addcategory';
import Allusers from './Pages/Users/Allusers';
import Adduser from './Pages/Users/adduser';
import Addrole from './Pages/Roles/Addrole';
import Allrole from './Pages/Roles/Allrole';
import Profilesetting from './Pages/Settings/Profilesetting';
import Orderdetail from './Pages/Orders/Orderdetail';
import Orderlist from './Pages/Orders/Orderlist';
import Ordertracking from './Pages/Orders/Ordertracking';
function App() {
    const storedToken = sessionStorage.getItem('authToken');
    const storedAdminData = sessionStorage.getItem('adminData');

    // Parse the admin data safely if available
    const [, setAdminData] = useState(null);
    const [loggedIn, setLoggedIn] = useState(!!storedToken);

    useEffect(() => {
        if (storedToken) {
            setLoggedIn(true);

            // Safely parse admin data from sessionStorage
            if (storedAdminData) {
                try {
                    const parsedAdminData = JSON.parse(storedAdminData);
                    setAdminData(parsedAdminData);
                } catch (error) {
                    console.error("Error parsing admin data:", error);
                }
            }
        }
    }, [storedToken, storedAdminData]);

    const handleLogin = (token, userData) => {
        setLoggedIn(true);
        sessionStorage.setItem('authToken', token); // Save token in sessionStorage
        sessionStorage.setItem('adminData', JSON.stringify(userData)); // Save user data in sessionStorage
    };

    const handleLogout = () => {
        
        setLoggedIn(false);
        sessionStorage.removeItem('authToken'); // Remove token from sessionStorage
        sessionStorage.removeItem('adminData'); // Remove user data from sessionStorage
    };
    
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={loggedIn ? <Navigate to="/dashboard" /> : <Login handleLogin={handleLogin} />}
                />
                <Route path="/register" element={<Register />} />
                <Route
  path="/dashboard"
  element={<Dashboard handleLogout={handleLogout} />}
/>

                <Route
                    path="/Viewproduct"
                    element={loggedIn ? <Viewproduct handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/Addproduct"
                    element={loggedIn ? <Addproduct handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/ViewCategory"
                    element={loggedIn ? <ViewCategory handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/Addcategory"
                    element={loggedIn ? <Addcategory handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/Allusers"
                    element={loggedIn ? <Allusers handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/adduser"
                    element={loggedIn ? <Adduser handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/Addrole"
                    element={loggedIn ? <Addrole handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/Allrole"
                    element={loggedIn ? <Allrole handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/Profilesetting"
                    element={loggedIn ? <Profilesetting handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/Orderdetail"
                    element={loggedIn ? <Orderdetail handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/Orderlist"
                    element={loggedIn ? <Orderlist handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
                <Route
                    path="/Ordertracking"
                    element={loggedIn ? <Ordertracking handleLogout={handleLogout} /> : <Navigate to="/" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


