import React, { Component } from "react";
import "../Etusivu.css";
import { HaeAlueet } from "../apiClient";
import {
  Link
} from "react-router-dom";



class Keskustelu extends Component {
  state = { alueet: [] };
  componentDidMount() {
    HaeAlueet(data => {
      this.setState({ alueet: data });
    });
  }
  render() {
    let alueet = this.state.alueet.map(alue => (
      <li className="list-group-item" key={alue.alue_id}> 
      <Link to={"/keskustelu/alue/" + alue.alue_id}>{alue.otsikko}</Link>
      </li>
    ));
    return (
      <div>
        <h1 className="otsikko">Tervetuloa foorumin etusivulle</h1>
        <ul className="list-group">{alueet}</ul>
      </div>
    );
  }
}

export default Keskustelu;
