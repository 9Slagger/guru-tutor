import React, { Component } from 'react'

class PlayVideo extends Component {
  render() {
    const { link } = this.props
    const shortlink = link.split('=')
    return (
      <div className="text-center">
        <iframe
          title={shortlink}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${shortlink[1]}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    )
  }
}

export default PlayVideo
