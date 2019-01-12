import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchOnePromotionContent,
  createPromotionContent,
  editPromotionContent
} from '../../../actions'
import PrivateMainLayout from '../../../components/PrivateMainLayout'
import NewContentFormFields from './Components/PromotionContentFormFields'

class AddPromotionContent extends Component {
  savePromotionContent = values => {
    this.props.createPromotionContent(values)
  }

  componentDidMount() {
    if (this.props.match.path.indexOf('edit') > 0)
      this.props.fetchOnePromotionContent(this.props.match.params.id)
  }

  editPromotionContent = values => {
    this.props.editPromotionContent(this.props.match.params.id, values)
  }

  render() {
    const { match } = this.props
    return (
      <PrivateMainLayout>
        {match.path.indexOf('add') > 0 ? (
          <div className="container-fluid">
            <h2 className="text-center">เพิ่มโปรโมชัน</h2>
            <NewContentFormFields onSubmit={this.savePromotionContent} />
          </div>
        ) : (
          <div className="container-fluid">
            <h2 className="text-center">แก้ไขโปรโมชัน</h2>
            <NewContentFormFields onSubmit={this.editPromotionContent} />
          </div>
        )}
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

const mapDispatchToProps = {
  fetchOnePromotionContent,
  createPromotionContent,
  editPromotionContent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPromotionContent)
