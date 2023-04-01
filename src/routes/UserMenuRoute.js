import { Navigate, useLocation } from "react-router-dom";

function UserMenuRoute() {
  const location = useLocation();
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  if (localStorage.getItem("isLoggedIn") === "true") {
    return (
      <section className="mt-5">
        <div className="col-md-8">
          <h2 className="mb-5">User Profile</h2>
          <h3 className="mb-5">Hello, {userName} </h3>
          <p className="mb-5">E-mail: {userEmail}</p>
          <p className="mb-5">Orders history</p>
        </div>
      </section>
    );
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}

export default UserMenuRoute;
