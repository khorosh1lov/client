import "react-phone-number-input/style.css";

import Label from "./Label";

//import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";


function TelInput({ label, phone, setPhone }) {
  const TelValueErrorMessage = () => {
    return <p className="fieldError">* Invalid telephone number</p>;
  };

  return (
    <>
      <div className="col-md-8">
        <Label htmlFor={label}>{label}</Label>
        {/* <PhoneInput
          className="form-control input-phone-number"
          international={false}
          defaultCountry="US"
          placeholder="Enter phone number"
          id={label}
          value={phone}
          onChange={setPhone}
          autoComplete="on"
          required
        /> */}
        {/* {phone && !isValidPhoneNumber(phone) ? <TelValueErrorMessage /> : null} */}
      </div>
    </>
  );
}

export default TelInput;
