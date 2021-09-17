import React from 'react'

import { Link } from 'react-router-dom';

import { routes } from '../../utils/constants';

const {home,courses,events} = routes;

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={home}>Inicio</Link></li>
                    <li><Link to={courses}>Cursos</Link></li>
                    <li><Link to={events}>Eventos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
