function Label({ children, ...props }) {
  return (
    <label {...props} className="form-label">
      {children}
    </label>
  );
}

export default Label;
