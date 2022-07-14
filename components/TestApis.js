import React, { Component } from "react";
import axios from "axios";
import pokeApi from "../apis/pokeApi";

export class TestApis extends Component {
  fetOfet = async () => {
    // const reslution = await axios.get("/pokemon.json");
    // console.log(reslution.data);

    const reslution = await pokeApi.get();
    console.log(reslution.data);
  };

  render() {
    return (
      <div>
        TestApis
        <button onClick={this.fetOfet}>api</button>
      </div>
    );
  }
}

export default TestApis;
