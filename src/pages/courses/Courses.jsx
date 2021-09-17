import React from 'react';

import { routes, COURSES } from '../../utils/constants';
import { Link, Route } from 'react-router-dom';
import Course from './components/Course';


const {events} = routes;

const Courses = () => {
    return (
        <div>
            {COURSES.map((course) =>{
                return (
                    <Route exact path={`${routes.courses}${course.url}`} render={() => {
                        return <Course title={course.title} description={course.description}/>
                    }}/>
                )
            })}
            <h3>Mira los eventos actuales: <Link to={events}>aquí</Link></h3> 
        </div>
    )
}

export default Courses
