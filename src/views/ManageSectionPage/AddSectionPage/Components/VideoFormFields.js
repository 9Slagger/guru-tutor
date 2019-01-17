import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../../../../components/FormField'
import { LectureFormFields } from '../../components/formFields'

class VideoFormFields extends Component {
  renderFields(LectureFormFields) {
    return LectureFormFields.map(
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
        {this.renderFields(LectureFormFields)}
        <button className="btn btn-block btn-info title" type="submit">
          บันทึก
        </button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  LectureFormFields.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = 'กรุณากรอกข้อมูล'
    }
  })
  return errors
}

const mapStateToProps = ({ newcontent }) => {
  if (newcontent.data && newcontent.data.ID)
    return { initialValues: newcontent.data ? newcontent.data : null }
  else return {}
}

const AddVideoFormFieldsForm = reduxForm({
  validate,
  form: 'VideoFormFields',
  enableReinitialize: true
})(VideoFormFields)

export default connect(
  mapStateToProps,
  null
)(AddVideoFormFieldsForm)
