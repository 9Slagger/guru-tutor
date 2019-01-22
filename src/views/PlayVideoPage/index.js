import React, { Component } from 'react'
import plyr from 'plyr'

class PlayVideo extends Component {
  componentDidMount() {
    const options = {}
    this.player = plyr.setup('#plyr-player', options)
  }
  componentWillUnmount() {
    if (this.player.length > 0) {
      for (const playerEl of this.player) {
        playerEl.destroy()
      }
    }
  }
  render() {
    const { link } = this.props

    return (
      <div className="text-center">
        <div className="container">
          <video
            controls
            poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
            id="plyr-player"
          >
            <source src={link} type="video/mp4" size="576" />
            <source src={link} type="video/mp4" size="720" />
            <source src={link} type="video/mp4" size="1080" />
            <source src={link} type="video/mp4" size="1440" />
          </video>
        </div>
      </div>
    )
  }
}

export default PlayVideo
