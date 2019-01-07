import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../../../../components/FormField'
import { HomecontentFirstFormFields as HomecontentThirdFormFields } from '../../components/formFields'

class AddHomecontentThird extends Component {
  renderFields(HomecontentThirdFormFields) {
    return HomecontentThirdFormFields.map(
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
      <form onSubmit={handleSubmit}>
        {this.renderFields(HomecontentThirdFormFields)}
        <button className="btn btn-block btn-info title" type="submit">
          บันทึก
        </button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  HomecontentThirdFormFields.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = 'กรุณากรอกข้อมูล'
    }
  })
  return errors
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

const AddHomecontentThirdForm = reduxForm({
  validate,
  form: 'HomecontentFirst'
})(AddHomecontentThird)

export default connect(
  mapStateToProps,
  null
)(AddHomecontentThirdForm)
