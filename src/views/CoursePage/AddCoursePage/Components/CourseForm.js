import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../../../../components/FormField'
import { CourseFormFields } from '../../components/formFields'

class CourseForm extends Component {
  renderFields(CourseFormFields) {
    return CourseFormFields.map(
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
        {this.renderFields(CourseFormFields)}
        <button className="btn btn-block btn-info title" type="submit">
          บันทึก
        </button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  CourseFormFields.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = 'กรุณากรอกข้อมูล'
    }
  })
  return errors
}

const mapStateToProps = ({ homecontent }) => {
  if (homecontent.data && homecontent.data.ID)
    return { initialValues: homecontent.data ? homecontent.data : null }
  else return {}
}

const AddCourseForm = reduxForm({
  validate,
  form: 'HomecontentFirst',
  enableReinitialize: true
})(CourseForm)

export default connect(
  mapStateToProps,
  null
)(AddCourseForm)
