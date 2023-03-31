import { Navigate, Outlet, useLocation } from 'react-router-dom';

import React from 'react';

const ProtectedRoute = ({ isAdmin }) => {
	const location = useLocation();

	if (isAdmin) {
		return <Outlet />;
	} else {
		return <Navigate to="/" state={{ from: location }} />;
	}
};

export default ProtectedRoute;
