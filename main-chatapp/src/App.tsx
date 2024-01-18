

import './style.scss'

import Registerpg from './Pages/Registerpg'
import Homepg from './Pages/Homepg'
import Loginpg from './Pages/Loginpg'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <ProtectedRoute>
              <Homepg />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Loginpg />} />
        <Route path="register" element={<Registerpg />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
