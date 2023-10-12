import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} />

        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Home />
              ) : (
                <div>
                  <p>İçeriği görmek için kaydolmanız gerekmektedir.</p>
                  <Link to="/auth">Kaydol</Link>
                </div>
              )
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>

        <Footer />
      </BrowserRouter>

      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </div>
  );
}

export default App;
