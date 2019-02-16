import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../../../../components/FormField'
import { CourseFormFields } from '../../components/formFields'

class CourseFormFirst extends Component {
  renderFields(CourseFormFields) {
    return CourseFormFields.map(
      ({ label, name, type, required, placeholder, option, hidden }) => {
        if (type !== 'select') {
          return (
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
        } else {
          return (
            <div className="form-group" key={name}>
              {required ? (
                <label className="title">
                  {label}
                  <span className="text-danger"> *</span>
                </label>
              ) : (
                <label className="title">{label}</label>
              )}
              <div>
                <Field className="form-control" name={name} component="select">
                  {option.map(option => {
                    if (option.hidden) {
                      return (
                        <option key={option.value} hidden value={option.value}>
                          {option.name}
                        </option>
                      )
                    } else {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.name}
                        </option>
                      )
                    }
                  })}
                </Field>
              </div>
            </div>
          )
        }
      }
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

const mapStateToProps = ({ courses, clear }) => {
  if (courses.dataone && courses.dataone.id && !clear)
    return { initialValues: courses.dataone ? courses.dataone : null }
  else return {}
}

const AddCourse = reduxForm({
  validate,
  form: 'Course',
  enableReinitialize: true
})(CourseFormFirst)

export default connect(
  mapStateToProps,
  null
)(AddCourse)
