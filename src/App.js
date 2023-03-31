import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";
import Restaurant from "./components/Restaurant";
import Restaurants from "./components/Restaurants";
import SignUpRoute from "./routes/SignUpRoute";
import SignInRoute from "./routes/SignInRoute";
import UserMenuRoute from "./routes/UserMenuRoute";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container">
          <div className="bg-light p-5 rounded">
            <Link
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
              to="/"
            >
              <h1 className="fs-1">Delivery app - Front</h1>
            </Link>
          </div>

          <Routes>
            <Route path="/" element={<Restaurants />} />
            <Route path="/:id" element={<Restaurant />} />
            <Route path="/auth/login" element={<SignInRoute />} />
            <Route path="/signup" element={<SignUpRoute />} />
            <Route path="/usermenu" element={<UserMenuRoute />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
