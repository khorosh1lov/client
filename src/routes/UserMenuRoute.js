import { Navigate, useLocation } from "react-router-dom";

function UserMenuRoute() {
  const location = useLocation();
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  if (localStorage.getItem("isLoggedIn") === "true") {
    return (
		<div className="container">
			<section className="row mt-5">
				<div className="col-md-12">
					<h2 className="mb-3">User Profile</h2>
					<h3 className="mb-5 fw-bold">Hello, {userName}! </h3>
					<p className="mb-2">E-mail: {userEmail}</p>
					<p className="mb-2 fw-bold">Orders history</p>
				</div>
			</section>
		</div>
	);
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}

export default UserMenuRoute;
