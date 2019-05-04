import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div key={song.title} className="row">
          <div className="col m-2">
            <h4>{song.title}</h4>
          </div>
          <div className="col m-2">
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              select
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="container">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
