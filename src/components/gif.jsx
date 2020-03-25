import React, { Component } from 'react';

class Gif extends Component {
  // callback function
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="selected gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
