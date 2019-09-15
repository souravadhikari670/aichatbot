import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from "./screens/Home";
import AddDoctor from './screens/AddDoctor'
import AddTest from './screens/AddTest'
import FindDoctor from './screens/FindDoctor'
import FindTests from './screens/FindTests'
import Cardiology from './department/Cardiology'
import Orthopaedics from './department/Orthopaedics'
import Physiology from './department/Physiology'


export default function Router(){
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin/doctor' component={AddDoctor} />
            <Route exact path='/admin/test' component={AddTest} />
            <Route exact path='/find/doctor' component={FindDoctor} />
            <Route exact path='/find/test' component={FindTests} />
            <Route exact path='/Cardiology' component={Cardiology} />
            <Route exact path='/Orthopaedics' component={Orthopaedics} />
            <Route exact path='/Physiology' component={Physiology} />
        </Switch>
    )
}