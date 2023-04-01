import './Admin.css';

import { faBowlFood, faShop, faUsers } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import React from "react";

const AdminDashboard = () => {
  return (
		<div className="row">
			<nav className="col-sm-12 col-md-4 col-lg-3 pt-3 pb-3 d-md-block bg-light sidebar">
				<div className="position-sticky sidebar-sticky">
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link to="/admin/add-restaurant" className="admin-nav-link nav-link fw-bold" aria-current="page">
								<FontAwesomeIcon icon={faShop} className="feather feather-home align-text-center" />
								&nbsp;Add new restaurant
							</Link>
							<Link to="/admin" className="admin-nav-link nav-link fw-bold" aria-current="page">
								<FontAwesomeIcon icon={faBowlFood} className="feather feather-home align-text-center" />
								&nbsp;Add new dish
							</Link>
							<Link to="/admin" className="admin-nav-link nav-link fw-bold" aria-current="page">
								<FontAwesomeIcon icon={faUsers} className="feather feather-home align-text-center" />
								&nbsp;Users
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<div className="col-sm-12 col-md-8 ms-sm-auto col-lg-9 px-md-4">
				<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1 className="h2">Dashboard</h1>
				</div>

				{/* Dash Content here */}
			</div>
		</div>
  );
};

export default AdminDashboard;
