import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPokes } from "../actions";

export class PokesList extends Component {
  componentDidMount() {
    this.props.fetchPokes();
  }

  render() {
    return <div>PokesList</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state.pokes, "state hi");
  return { pokes: state };
};

const mapDispatchToProps = { fetchPokes };

export default connect(mapStateToProps, mapDispatchToProps)(PokesList);
