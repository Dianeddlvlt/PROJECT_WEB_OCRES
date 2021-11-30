import React from 'react';
import Classes from '../components/Classes';
import { NavLink } from "react-router-dom";

class Methodologie extends React.Component {


    render() {
        return (

            <div>
                <h1>Methodologie</h1>

                <Classes />
                <NavLink to="/">Accueil</NavLink>

            </div>
        )
    }
}

export default Methodologie;