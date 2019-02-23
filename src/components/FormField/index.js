import React from 'react'

export default ({
  label,
  input,
  type,
  placeholder,
  hidden,
  required,
  meta: { error, touched }
}) => {
  if (hidden) {
    return (
      <div className="form-group">
        <label className="title">{label}</label>
        <input
          className="form-control"
          {...input}
          type="hidden"
          placeholder={placeholder}
        />
      </div>
    )
  } else {
    return (
      <div className="form-group">
        {required ? (
          <label className="title">
            {label}
            <span className="text-danger"> *</span>
          </label>
        ) : (
          <label className="title">{label}</label>
        )}
        <input
          className="form-control"
          {...input}
          type={type}
          placeholder={placeholder}
        />
        {error &&
          touched && <div className="mt-2 text-danger title">{error}</div>}
      </div>
    )
  }
}
