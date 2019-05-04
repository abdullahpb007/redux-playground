import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  render() {
    if (!this.props.song) return null;
    return (
      <div>
        <h3 className="display-4">{this.props.song.title}</h3>
        <p>{this.props.song.duration}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
