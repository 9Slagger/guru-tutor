import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHomeContent, createHomeContentFirst } from '../../../actions'
import PrivateMainLayout from '../../../components/PrivateMainLayout'
import NewContentFormFields from './Components/PromotionContentFormFields'

class AddPromotionContent extends Component {
  saveHomecontentFirst = async values => {
    this.props.createHomeContentFirst(values)
  }

  render() {
    return (
      <PrivateMainLayout>
        <div className="container-fluid">
          <h2 className="text-center">เพิ่มข่าวสาร</h2>
          <NewContentFormFields onSubmit={this.saveHomecontentFirst} />
        </div>
      </PrivateMainLayout>
    )
  }
}

const mapStateToProps = ({ homecontent }) => {
  return { homecontent }
}

const mapDispatchToProps = {
  fetchHomeContent,
  createHomeContentFirst
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPromotionContent)
