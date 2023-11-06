import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Contact from "./pages/Contact"; 
import Development from "./pages/Development"; 
import Info from "./pages/Info"; 
import Podcast from "./pages/Podcast"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setIsAuthChecked(true);
    });
  }, []);

  // Bu kontrolü buraya ekleyin:
  if (!isAuthChecked) {
    return (
      <div className="loading-overlay">
        <div className="loading-modal">
          {/* Burada yükleme ikonu ekleyebilirsiniz. Örneğin bir SVG ya da dışarıdan bir ikon kütüphanesi (FontAwesome, React Icons vb.) kullanabilirsiniz. */}
          <div className="loading-icon"></div>
          Yükleniyor...
        </div>
      </div>
    );
  }
  

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
                  <p className="text-center text-gray-600 text-lg">
                    İçeriği görmek için kaydolmanız gerekmektedir.
                  </p>
                  <Link to="/auth">
                    <button className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                      Kaydol
                    </button>
                  </Link>
                </div>
              )
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route
            path="/development"
            element={
              user ? (
                <Development />
              ) : (
                <div>
                  <p className="text-center text-gray-600 text-lg">
                    İçeriği görmek için kaydolmanız gerekmektedir.
                  </p>
                  <Link to="/auth">
                    <button className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                      Kaydol
                    </button>
                  </Link>
                </div>
              )
            }
          />
          <Route
            path="/podcast"
            element={
              user ? (
                <Podcast />
              ) : (
                <div>
                  <p className="text-center text-gray-600 text-lg">
                    İçeriği görmek için kaydolmanız gerekmektedir.
                  </p>
                  <Link to="/auth">
                    <button className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                      Kaydol
                    </button>
                  </Link>
                </div>
              )
            }
          />
          <Route path="/info" element={<Info />} />
          <Route
            path="/podcast"
            element={
              user ? (
                <Podcast />
              ) : (
                <div>
                  <p className="text-center text-gray-600 text-lg">
                    İçeriği görmek için kaydolmanız gerekmektedir.
                  </p>
                  <Link to="/auth">
                    <button className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                      Kaydol
                    </button>
                  </Link>
                </div>
              )
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>

      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </div>
  );
}

export default App;
