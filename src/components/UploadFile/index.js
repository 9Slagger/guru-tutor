import React from 'react'
import { Field, reduxForm } from 'redux-form'
import axios from 'axios'

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0])

const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  )
}

const FileUpload = props => {
  const { handleSubmit } = props
  const onFormSubmit = async data => {
    const tempdata = await { file: data }
    // console.log(tempdata)
    axios
      .post(
        `http://35.247.150.186/lectures?idsec=5c47054b0016120004518761&quality=1080`,
        tempdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(res => {
        console.log(res.statusText)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label>Attachment</label>
        <Field name="attachment" component={FileInput} type="file" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'fileupload'
})(FileUpload)
