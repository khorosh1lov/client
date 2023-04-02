import './Skeleton.css';

import React from 'react';
import Skeleton from 'react-loading-skeleton';

function RestaurantSkeleton() {
	return (
		<div className="row gy-3">
			<div className="col-md-6">
				<div className="restaurant-skeleton">
					<Skeleton height={300} />
					<div className="p-3">
						<Skeleton height={30} />
						<Skeleton height={30} />
						<Skeleton height={30} />
						<Skeleton height={30} />
						<Skeleton height={30} />
						<Skeleton height={30} />
						<Skeleton height={30} />
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="restaurant-skeleton">
					<Skeleton height={300} />
					<div className="p-3">
						<Skeleton height={30} />
						<Skeleton height={30} />
						<Skeleton height={30} />
						<Skeleton height={30} />
						<Skeleton height={30} />
						<Skeleton height={30} />
						<Skeleton height={30} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default RestaurantSkeleton;
