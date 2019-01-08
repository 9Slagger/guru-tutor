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
    // console.log('initialValues', initialValues)
    // console.log(Match.params.id)
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
  console.log(homecontent.data)
  return { initialValues: homecontent.data }
}

const AddHomecontentFirstForm = reduxForm({
  validate,
  form: 'HomecontentFirst'
})(AddHomecontentFirst)

export default connect(
  mapStateToProps,
  null
)(AddHomecontentFirstForm)
