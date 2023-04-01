import Label from './Label';
import React from 'react';

function TelInput({ label, phone, setPhone }) {
	const TelValueErrorMessage = () => {
		return <p className="fieldError">* Invalid telephone number</p>;
	};

	const isValidPhoneNumber = (phoneNumber) => {
		// Basic validation for US phone numbers
		const regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
		return regex.test(phoneNumber);
	};

	const handleChange = (e) => {
		setPhone(e.target.value);
	};

	return (
		<>
			<div className="col-md-12">
				<Label htmlFor={label}>{label}</Label>
				<input type="tel" className="form-control input-phone-number" id={label} value={phone} onChange={handleChange} placeholder="(123) 456-7890" autoComplete="on" required />
				{phone && !isValidPhoneNumber(phone) ? <TelValueErrorMessage /> : null}
			</div>
		</>
	);
}

export default TelInput;
