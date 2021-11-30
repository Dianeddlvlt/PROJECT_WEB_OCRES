import React from 'react';
import Classes from '../components/Classes';
import { NavLink } from "react-router-dom";

class Maths extends React.Component {


  render() {
    return (
      <div>
        <h1>Mathematiques</h1>

        <Classes />
        <NavLink to="/">Accueil</NavLink>

      </div>
    )
  }
}

export default Maths;
