import React from 'react';
import Classes from '../components/Classes';
import { NavLink } from "react-router-dom";

class Chimie extends React.Component {


    render() {
        return (
            <div>
                <h1>Chimie</h1>
                <Classes />
                <NavLink to="/">Accueil</NavLink>

            </div>
        )
    }
}

export default Chimie;