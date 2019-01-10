import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../../../../components/FormField'
import { HomecontentFirstFormFields } from '../../components/formFields'

class AddHomecontentFirst extends Component {
  renderFields(HomecontentFirstFormFields) {
    return HomecontentFirstFormFields.map(
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
        {this.renderFields(HomecontentFirstFormFields)}
        <button className="btn btn-block btn-info title" type="submit">
          บันทึก
        </button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  HomecontentFirstFormFields.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = 'กรุณากรอกข้อมูล'
    }
  })
  return errors
}

const mapStateToProps = ({ homecontent }) => {
  if (homecontent.data && homecontent.data.id)
    return { initialValues: homecontent.data ? homecontent.data : null }
  else return {}
}

const AddHomecontentFirstForm = reduxForm({
  validate,
  form: 'HomecontentFirst',
  enableReinitialize: true
})(AddHomecontentFirst)

export default connect(
  mapStateToProps,
  null
)(AddHomecontentFirstForm)
