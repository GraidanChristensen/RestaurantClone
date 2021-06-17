import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Catering from './components/Catering/Catering';
import Hours from './components/Hours/Hours';
import Story from './components/Story/Story';
import Order from './components/Order/Order';

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Menu' component={Menu}/>
        <Route path='/Hours' component={Hours}/>
        <Route path='/Catering' component={Catering}/>
        <Route path='/Story' component={Story}/>
        <Route path='/Order' component={Order}/>
    </Switch>
)