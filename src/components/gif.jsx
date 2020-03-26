import React, { Component } from 'react';

class Gif extends Component {
  // callback function
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // dont call render if the props id doesnt change
    return nextProps.id !== this.props.id;
  }

  render() {
    const { id } = this.props;

    if (!id) {
      return null;
    }

    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="selected gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
