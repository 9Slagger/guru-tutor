import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class HomeContentForm extends Component {
  render() {
    return (
      <div>
        <form>
          <Field name="employed" id="employed" component="input" type="text" />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'simple'
})(HomeContentForm)
