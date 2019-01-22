import React from 'react'

export default ({
  label,
  input,
  type,
  placeholder,
  hidden,
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
        {error &&
          touched && <div className="mt-2 text-danger title">{error}</div>}
      </div>
    )
  } else {
    return (
      <div className="form-group">
        <label className="title">{label}</label>
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
