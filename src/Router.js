import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from "./screens/Home";
import Admin from "./screens/Admin";
import FindDoctor from './screens/FindDoctor'
import Cardiology from './department/Cardiology'
import Orthopaedics from './department/Orthopaedics'
import Physiology from './department/Physiology'


export default function Router(){
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/finddoctor' component={FindDoctor} />
            <Route exact path='/Cardiology' component={Cardiology} />
            <Route exact path='/Orthopaedics' component={Orthopaedics} />
            <Route exact path='/Physiology' component={Physiology} />
        </Switch>
    )
}