import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react'

import FormField from '../../../../components/FormField'
import { SearchUserFormFields } from '../../components/formFields'
import { connect } from 'react-redux'

class SearchUser extends Component {
  renderFields(SearchUserFormFields) {
    return SearchUserFormFields.map(
      ({ label, name, type, required, placeholder }) => (
        <Field
          key={name}
          label={label}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          component={FormField}
        />
      )
    )
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form className="form-inline mb-1" onSubmit={handleSubmit}>
        {this.renderFields(SearchUserFormFields)}
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  SearchUserFormFields.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = 'กรุณากรอกข้อมูล'
    }
  })
  return errors
}

const mapStateToProps = () => {
  return {}
}

const SearchUserForm = reduxForm({
  validate,
  form: 'SearchUser'
})(SearchUser)

export default connect(
  mapStateToProps,
  null
)(SearchUserForm)
