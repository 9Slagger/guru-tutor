import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../../../../components/FormField'
import { LectureFormFields } from '../../components/formFields'

class VideoFormFields extends Component {
  renderFields(LectureFormFields) {
    return LectureFormFields.map(
      ({ label, name, type, required, placeholder, option }) => {
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
              <label>{label}</label>
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

const mapStateToProps = ({ lectures }) => {
  if (lectures.dataone && lectures.dataone.id)
    return { initialValues: lectures.dataone ? lectures.dataone : null }
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
