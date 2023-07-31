import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./UserContext";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Photo from "./components/Photo/Photo";
import ProtectedRoute from "./components/Helper/ProtectedRoute";

import "./App.css";
import UserProfile from "./components/User/UserProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="/foto/:id" element={<Photo />} />
            <Route path="/perfil/:user" element={<UserProfile />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
