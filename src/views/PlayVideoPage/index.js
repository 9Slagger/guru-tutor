import React, { Component } from 'react'
import plyr from 'plyr'

class PlayVideo extends Component {
  componentDidMount() {
    const options = {
      toggleInvert: true,
      seekTime: 10,
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen'
      ]
    }
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
    return (
      <div className="text-center">
        <div className="container">
          <video
            controls
            poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
            id="plyr-player"
          >
            <source
              src={`https://apiv2.akkarapong.xyz/api/v2${this.props.link}`}
              type="video/mp4"
              size="1080"
            />
          </video>
        </div>
      </div>
    )
  }
}

export default PlayVideo
