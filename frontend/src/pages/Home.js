import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/chimie">Chimie</NavLink>
                <NavLink to="/maths">Maths</NavLink>
                <NavLink to="/methodologie">Méthodologie</NavLink>
                <NavLink to="/physique">Physique</NavLink>
                <NavLink to="/programmation">Programmation</NavLink>
            </div>
        );
    }
}
//<Matieres />
export default Home;