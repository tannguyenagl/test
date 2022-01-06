const Textarea = ({ registerReturn, fieldError, type, label, placeholder }) => {
  return (
    <div>
      <label>{label && <div className="label">{label}</div>}</label>
      <textarea
        type={type}
        className="input"
        placeholder={placeholder}
        {...registerReturn}
        autoComplete="autocomplete"
      />
      {fieldError && <p className="error">{fieldError?.message}</p>}
    </div>
  );
};

export default Textarea;
