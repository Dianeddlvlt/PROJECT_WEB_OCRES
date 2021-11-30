import React from 'react';
import Classes from '../components/Classes';
import { NavLink } from "react-router-dom";

class Programmation extends React.Component {


    render() {
        return (

            <div>
                <h1>Programmation</h1>
                <Classes />
                <NavLink to="/">Accueil</NavLink>

            </div>
        )
    }
}

export default Programmation;