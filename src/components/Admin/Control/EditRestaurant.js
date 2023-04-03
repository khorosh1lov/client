import React, { useEffect, useState } from 'react';

import { API_BASE_URL } from '../../../config';
import Input from '../../forms/Input';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditRestaurant = () => {
	const [formValues, setFormValues] = useState(null);
	const { id } = useParams();
	console.log('Restaurant ID:', id);

	useEffect(() => {
		const fetchRestaurant = async () => {
			try {
				const response = await axios.get(`${API_BASE_URL}/${id}`);
				console.log('Fetched restaurant data:', response.data);
				setFormValues({ ...response.data });
			} catch (error) {
				console.error('Error fetching restaurant:', error);
			}
		};

		fetchRestaurant();
	}, [id]);
	

	if (!formValues) {
		console.log('Form values state:', formValues);
		return <div>Loading...</div>;
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		const nameParts = name.split('.');

		if (nameParts.length > 1) {
			setFormValues((prev) => {
				const updatedNestedField = {
					...prev[nameParts[0]],
					[nameParts[1]]: value,
				};
				return { ...prev, [nameParts[0]]: updatedNestedField };
			});
		} else {
			setFormValues((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleFileChange = (e) => {
		const { name, files } = e.target;
		if (files.length > 0) {
			const file = files[0];
			const reader = new FileReader();
			reader.onload = (e) => {
				setFormValues((prev) => ({ ...prev, [name]: e.target.result }));
			};
			reader.readAsDataURL(file);
		} else {
			setFormValues((prev) => ({ ...prev, [name]: '' }));
		}
	};

	const handleDirectImageUrlChange = (e) => {
		const { name, value } = e.target;
		const targetName = name.replace('directImageUrl', '').toLowerCase();

		if (targetName === 'logo') {
			setFormValues((prev) => ({ ...prev, logo: value }));
		} else if (targetName === 'header') {
			setFormValues((prev) => ({ ...prev, headerImage: value }));
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.put(`${API_BASE_URL}/${id}`, formValues);

			if (response.status === 200) {
				alert('Restaurant updated successfully');
			} else {
				alert('Error updating restaurant');
			}
		} catch (error) {
			console.error(error);
			alert('Error updating restaurant');
		}
	};

	return (
		<section className="d-flex justify-content-left">
			<div className="col-sm-12 col-md-10 col-lg-8">
				<div className="mt-2">
					<h2 className="mb-5">Edit Restaurant</h2>
					<form onSubmit={handleSubmit} encType="multipart/form-data" className="row g-3">
						<div className="col-md-6 col-sm-12 mb-3">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input type="text" id="name" name="name" className="form-control" value={formValues.name} onChange={handleChange} required placeholder="Ex. American" />
						</div>

						<div className="col-md-6 col-sm-12 mb-3">
							<label htmlFor="cuisine" className="form-label">
								Cuisine
							</label>
							<input type="text" id="cuisine" name="cuisine" className="form-control" value={formValues.cuisine} onChange={handleChange} required placeholder="Ex. American" />
						</div>
						<div className="col-12 mb-3">
							<label htmlFor="addressStreet" className="form-label">
								Street address
							</label>
							<input type="text" id="addressStreet" name="address.street" className="form-control" value={formValues.address.street} onChange={handleChange} placeholder="Ex. 1234 Main street" />
						</div>
						<div className="col-lg-8 col-md-5 col-sm-12 mb-3">
							<label htmlFor="addressCity" className="form-label">
								City
							</label>
							<input type="text" id="addressCity" name="address.city" className="form-control" value={formValues.address.city} onChange={handleChange} placeholder="Ex. Seattle" />
						</div>
						<div className="col-lg-2 col-md-4 col-sm-12 mb-3">
							<label htmlFor="addressState" className="form-label">
								State
							</label>
							<input type="text" id="addressState" name="address.state" className="form-control" value={formValues.address.state} onChange={handleChange} placeholder="Ex. WA" />
						</div>
						<div className="col-lg-2 col-md-3 col-sm-12 mb-3">
							<label htmlFor="addressZip" className="form-label">
								Zip
							</label>
							<input type="text" id="addressZip" name="address.zip" className="form-control" value={formValues.address.zip} onChange={handleChange} placeholder="Ex. 98001" />
						</div>
						<div className="col-md-6 col-sm-12 mb-3">
							<label htmlFor="contactInfoPhone" className="form-label">
								Phone
							</label>
							<input type="text" id="contactInfoPhone" name="contactInfo.phone" className="form-control" value={formValues.contactInfo.phone} onChange={handleChange} placeholder="(425) 123-4567" />
						</div>
						<div className="col-md-6 col-sm-12 mb-3">
							<label htmlFor="contactInfoEmail" className="form-label">
								Email
							</label>
							<input type="email" id="contactInfoEmail" name="contactInfo.email" className="form-control" value={formValues.contactInfo.email} onChange={handleChange} placeholder="example@mail.com" />
						</div>
						<div className="col-md-12 mb-3">
							<label htmlFor="workingDays" className="form-label">
								Working Days
							</label>
							<input type="text" id="workingDays" name="workingDays" className="form-control" value={formValues.workingDays} onChange={handleChange} placeholder="Enter days separated by commas" />
						</div>
						<div className="col-md-6 col-sm-12 mb-3">
							<label htmlFor="workingHoursFrom" className="form-label">
								Working Hours, From
							</label>
							<input type="time" id="workingHoursFrom" name="workingHours.from" className="form-control" value={formValues.workingHours.from} onChange={handleChange} />
						</div>
						<div className="col-md-6 col-sm-12 mb-3">
							<label htmlFor="workingHoursTo" className="form-label">
								To
							</label>
							<input type="time" id="workingHoursTo" name="workingHours.to" className="form-control" value={formValues.workingHours.to} onChange={handleChange} />
						</div>
						<div className="col-md-6 col-sm-12 mb-3">
							<label htmlFor="logo" className="form-label">
								Logo upload
							</label>
							<input type="file" id="logo" name="logo" className="form-control" onChange={handleFileChange} />
						</div>
						<div className="col-md-6 col-sm-12 mb-3">
							<label htmlFor="directImageUrlLogo" className="form-label">
								or direct link
							</label>
							<input type="text" id="directImageUrlLogo" name="directImageUrlLogo" className="form-control" onChange={handleDirectImageUrlChange} placeholder="direct image URL" />
						</div>
						<div className="col-md-6 col-sm-12 mb-3">
							<label htmlFor="headerImage" className="form-label">
								Header Image upload
							</label>
							<input type="file" id="headerImage" name="headerImage" className="form-control" onChange={handleFileChange} />
						</div>
						<div className="col-md-6 col-sm-12 mb-3">
							<label htmlFor="directImageUrlHeader" className="form-label">
								or direct link:
							</label>
							<input type="text" id="directImageUrlHeader" name="directImageUrlHeader" className="form-control" onChange={handleDirectImageUrlChange} placeholder="direct image URL" />
						</div>
						<div className="mb-3">
							<button type="submit" className="btn btn-success btn-lg mb-3">
								Update Restaurant
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default EditRestaurant;
