import './Footer.css';

import React from 'react';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer mt-auto py-3 bg-light">
			<div className="container">
				<span className="text-muted">DoDelivery app. © {currentYear}</span>
			</div>
		</footer>
	);
}

export default Footer;
