import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../../../../components/FormField'
import { SectionFormFields } from '../../components/formFields'

class AddSectionFormFields extends Component {
  renderFields(SectionFormFields) {
    return SectionFormFields.map(
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
        {this.renderFields(SectionFormFields)}
        <button className="btn btn-block btn-info title" type="submit">
          บันทึก
        </button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  SectionFormFields.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = 'กรุณากรอกข้อมูล'
    }
  })
  return errors
}

const mapStateToProps = ({ sections }) => {
  if (sections.dataone && sections.dataone.id)
    return { initialValues: sections.dataone ? sections.dataone : null }
  else return {}
}

const AddSectionFormFieldsForm = reduxForm({
  validate,
  form: 'SectionFormFields',
  enableReinitialize: true
})(AddSectionFormFields)

export default connect(
  mapStateToProps,
  null
)(AddSectionFormFieldsForm)
