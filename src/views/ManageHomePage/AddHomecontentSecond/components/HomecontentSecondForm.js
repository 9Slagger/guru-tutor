import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../../../../components/FormField'
import { HomecontentSecondFormFields } from '../../components/formFields'

class AddHomecontentSecond extends Component {
  renderFields(HomecontentSecondFormFields) {
    return HomecontentSecondFormFields.map(
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
        {this.renderFields(HomecontentSecondFormFields)}
        <button className="btn btn-block btn-info title" type="submit">
          บันทึก
        </button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  HomecontentSecondFormFields.forEach(({ name, required }) => {
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

const AddHomecontentSecondForm = reduxForm({
  validate,
  form: 'HomecontentSecond',
  enableReinitialize: true
})(AddHomecontentSecond)

export default connect(
  mapStateToProps,
  null
)(AddHomecontentSecondForm)
