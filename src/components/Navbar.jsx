import React, { useState } from "react";
import { BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Firebase kimlik doğrulama işlemleri için kullanılır

const Navbar = ({ user }) => {
  const [language, setLanguage] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const toggleLanguage = () => {
    if (language === "en") {
      setLanguage("tr");
    } else {
      setLanguage("en");
    }
  };

  // Firebase üzerinden çıkış yapma işlemi
  const signOut = async () => {
    try {
      await auth.signOut();
     
      window.location.href = "/auth";
    } catch (error) {
      console.error("Çıkış yaparken bir hata oluştu:", error);
    }
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a className="text-3xl font-bold font-heading" href="#"></a>

          <div className="hidden md:flex space-x-12">
            <ul className="flex items-center space-x-4">
              <li>
                <a className="hover:text-gray-200" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="block py-2 ml-6 hover:text-gray-200" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="block py-2 ml-6 hover:text-gray-200"
                  href="/development"
                >
                  Development
                </a>
              </li>
              <li>
                <a
                  className="block py-2 ml-6 hover:text-gray-200"
                  href="/podcast"
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  className="block py-2 ml-6 hover:text-gray-200"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="block py-2 ml-6 hover:text-gray-200"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>

            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 px-2 py-1 rounded bg-transparent hover:bg-gray-100 focus:bg-gray-300 text-gray-900"
            />

            <button
              onClick={toggleLanguage}
              className="language-switch-btn hover:text-gray-200"
            >
              {language === "en" ? "TR" : "EN"}
            </button>

            {user ? (
              // Kullanıcı giriş yapmışsa çıkış yapma seçeneğini göster
              <div className="flex items-center">
                <Link
                  to="/profile"
                  className="flex items-center hover:text-gray-200"
                >
                  <BsPersonSquare className="h-8 w-8" />
                  <span className="ml-3">{user.displayName}</span>
                </Link>
                <button
                  onClick={signOut}
                  className="text-gray-200 ml-4 cursor-pointer"
                >
                  Çıkış Yap
                </button>
              </div>
            ) : (
              // Kullanıcı giriş yapmamışsa giriş yapma seçeneğini göster
              <Link
                to="/auth"
                className="flex items-center hover:text-gray-200"
              >
                <BsPersonSquare className="h-8 w-8" />
                <span className="ml-3">Giriş Yap / Kaydol</span>
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn text-3xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-gray-900 md:hidden">
          <ul className="text-center py-5">
            <li>
              <a className="block py-2 hover:text-gray-200" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
