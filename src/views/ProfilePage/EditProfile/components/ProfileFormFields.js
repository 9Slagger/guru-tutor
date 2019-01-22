import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../../../../components/FormField'
import { ProfileFields } from '../../components/formFields'

class ProfileFormFields extends Component {
  renderFields(ProfileFields) {
    return ProfileFields.map(
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
              hidden={hidden && hidden}
              component={FormField}
            />
          )
        } else {
          return (
            <div className="form-group" key={name}>
              <label>{label}</label>
              <div>
                <Field className="form-control" name={name} component="select">
                  {option.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
          )
        }
      }
    )
  }

  onEdit = () => {
    this.props.edit()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        {this.renderFields(ProfileFields)}
        <button className="btn btn-info title mr-3" type="submit">
          บันทึก
        </button>
        <button className="btn btn-dark" onClick={this.onEdit}>
          ยกเลิก
        </button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  ProfileFields.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = 'กรุณากรอกข้อมูล'
    }
  })
  return errors
}

const mapStateToProps = ({ auth }) => {
  if (auth.data[0] && auth.data[0].ID) {
    return { initialValues: auth.data[0] ? auth.data[0] : null }
  } else return {}
}

const AddCourse = reduxForm({
  validate,
  form: 'Profile',
  enableReinitialize: true
})(ProfileFormFields)

export default connect(
  mapStateToProps,
  null
)(AddCourse)
