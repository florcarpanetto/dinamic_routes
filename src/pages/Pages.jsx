import React from 'react';
import { Route } from 'react-router';
import { routes } from '../utils/constants';

/** 
 * components
*/
import Home from './home/Home';
import Courses from './courses/Courses'
import Events from './events/Events';

const {home,courses,events} = routes;

const Pages = () => {
    return (
        <>
            <Route path={home} exact component={Home}/>
            <Route path={courses} component={Courses}/>
            <Route path={events} component={Events}/>
        </>
    )
}

export default Pages
