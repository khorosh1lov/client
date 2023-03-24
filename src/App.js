import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React from 'react';
import Restaurant from './components/Restaurant';
import Restaurants from './components/Restaurants';

function App() {
	return (
		<Router>
			<main className="container">
				<div className="bg-light p-5 rounded">
					<Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" to="/">
						<h1 class="fs-1">Delivery app - Front</h1>
					</Link>

					<hr></hr>

					<Link className="btn btn-lg btn-primary" to="/restaurants" role="button">
						Get All Restaurants
					</Link>
				</div>

				<Routes>
					<Route path="/restaurants" element={<Restaurants />} />
					<Route path="/restaurants/:id" element={<Restaurant />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
