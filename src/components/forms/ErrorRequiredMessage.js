function ErrorRequiredMessage({ value, label }) {
  return value.isTouched && value.value.length < 1 ? (
    <p className="fieldError">* {label} is required field</p>
  ) : null;
}

export default ErrorRequiredMessage;
