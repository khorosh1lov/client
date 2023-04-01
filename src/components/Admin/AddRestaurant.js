import React, { useState } from "react";

import { API_BASE_URL } from "../../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from "axios";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AddRestaurant = () => {
	const [formValues, setFormValues] = useState({
			name: '',
			address: {
				street: '',
				city: '',
				state: '',
				zip: '',
			},
			contactInfo: {
				phone: '',
				email: '',
			},
			cuisine: '',
			workingDays: '',
			workingHours: {
				from: '',
				to: '',
			},
			logo: '',
			headerImage: '',
  	});

  	const handleChange = (event) => {
		const { name, value } = event.target;
		const nameParts = name.split('.');

		/* if (nameParts.length === 3) {
			setFormValues((prevValues) => ({
				...prevValues,
				[nameParts[0]]: {
					...prevValues[nameParts[0]],
					[nameParts[1]]: {
						...prevValues[nameParts[0]][nameParts[1]],
						[nameParts[2]]: value,
					},
				},
			}));
		}   */
		if (nameParts.length === 2) {
			setFormValues((prevValues) => ({
				...prevValues,
				[nameParts[0]]: {
					...prevValues[nameParts[0]], // TODO: potential issue here
					[nameParts[1]]: value,
				},
			}));
		} else {
			setFormValues({ ...formValues, [name]: value });
		}
  	};


  const handleSubmit = async (event) => {
    event.preventDefault();
	
    try {
      const response = await axios.post(`${API_BASE_URL}/`, formValues);

      if (response.status === 200) {
        alert('Restaurant added successfully:', response.status);
      } else {
        alert('Error adding restaurant:', response.status);
      }
    } catch (error) {
      console.error(error);
      alert('Error adding restaurant');
    }
  };

  return (
		<div className="container">
			<section className="d-flex justify-content-center ">
				<div className="col-md-12">
					<div className="mt-5">
						<div className="mb-2">
							<Link to="/admin" className="admin-nav-link nav-link fw-bold" aria-current="page">
								<FontAwesomeIcon icon={faArrowLeft} />
								&nbsp;Back to Dashboard
							</Link>
						</div>
						<h1 className="mb-5">Add a new restaurant</h1>
						<form onSubmit={handleSubmit} className="row g-3">
							<div className="col-md-6 mb-3">
								<label htmlFor="name" className="form-label">
									Name:
								</label>
								<input type="text" id="name" name="name" className="form-control" value={formValues.name} onChange={handleChange} required />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="cuisine" className="form-label">
									Cuisine:
								</label>
								<input type="text" id="cuisine" name="cuisine" className="form-control" value={formValues.cuisine} onChange={handleChange} required />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="street" className="form-label">
									Street address:
								</label>
								<input type="text" id="street" name="street" className="form-control" value={formValues.street} onChange={handleChange} required />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="city" className="form-label">
									City:
								</label>
								<input type="text" id="city" name="city" className="form-control" value={formValues.city} onChange={handleChange} required />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="state" className="form-label">
									State:
								</label>
								<input type="text" id="state" name="state" className="form-control" value={formValues.state} onChange={handleChange} required />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="zip" className="form-label">
									Zip-code:
								</label>
								<input type="text" id="zip" name="zip" className="form-control" value={formValues.zip} onChange={handleChange} required />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="phone" className="form-label">
									Phone number:
								</label>
								<input type="text" id="phone" name="phone" className="form-control" value={formValues.phone} onChange={handleChange} required />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="email" className="form-label">
									Email:
								</label>
								<input type="email" id="email" name="email" className="form-control" value={formValues.email} onChange={handleChange} required />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="workingDays" className="form-label">
									Working Days:
								</label>
								<input type="text" id="workingDays" name="workingDays" className="form-control" value={formValues.workingDays} onChange={handleChange} placeholder="Enter days separated by commas" />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="workingHoursFrom" className="form-label">
									Working Hours From:
								</label>
								<input type="time" id="workingHoursFrom" name="workingHours.from" className="form-control" value={formValues.workingHours.from} onChange={handleChange} />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="workingHoursTo" className="form-label">
									Working Hours To:
								</label>
								<input type="time" id="workingHoursTo" name="workingHours.to" className="form-control" value={formValues.workingHours.to} onChange={handleChange} />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="logo" className="form-label">
									Logo URL:
								</label>
								<input type="url" id="logo" name="logo" className="form-control" value={formValues.logo} onChange={handleChange} />
							</div>
							<div className="col-md-6 mb-3">
								<label htmlFor="headerImage" className="form-label">
									Header Image URL:
								</label>
								<input type="url" id="headerImage" name="headerImage" className="form-control" value={formValues.headerImage} onChange={handleChange} />
							</div>
							<div className="mb-3">
								<button type="submit" className="btn btn-success btn-lg mb-3">
									Add Restaurant
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
  );
};

export default AddRestaurant;
