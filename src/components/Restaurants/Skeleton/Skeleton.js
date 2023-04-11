import './Skeleton.css';

import React from 'react';
import WaveSkeleton from './WaveSkeleton';

function RestaurantSkeleton() {
	return (
		<div className="row gy-3">
			<div className="col-md-6">
				<div className="restaurant-skeleton">
					<WaveSkeleton height={250} />
				</div>
			</div>
			<div className="col-md-6">
				<div className="restaurant-skeleton">
					<WaveSkeleton height={250} />
				</div>
			</div>
		</div>
	);
}


export default RestaurantSkeleton;
