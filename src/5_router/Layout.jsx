import React from "react";
import { Outlet, NavLink, Link } from "react-router";

/**
 * Navbar component for navigation links using Bootstrap 5.3.
 * Uses <Link> instead of <a> to prevent full page reloads.
 */
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Router Demo
        </NavLink>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/user/123" className="nav-link text-warning">
            Profile: 123
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Layout = () => {
  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="p-4 bg-white shadow-sm rounded">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center p-4 mt-5 text-muted border-top">
        &copy; 2026 React Router JS Demo (Bootstrap 5.3)
      </footer>
    </div>
  );
};

export default Layout;
