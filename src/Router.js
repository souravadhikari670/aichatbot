import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from "./screens/Home";
import AddDoctor from './screens/AddDoctor'
import AddTest from './screens/AddTest'
import FindDoctor from './screens/FindDoctor'
import FindTests from './screens/FindTests'
import Cardiology from './department/Cardiology'
import Orthopaedics from './department/Orthopaedics'
import Dental from './department/Dental'
import Gastroenterology from './department/Gastroenterology'
import Neurology from './department/Neurology'
import Psychiatry from './department/Psychiatry'
import Surgery from './department/Surgery'
import Opthalmology from './department/Opthalmology'
import Otolaryngology from './department/Otolaryngology'

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
            <Route exact path='/Dental' component={Dental} />
            <Route exact path='/Gastroenterology' component={Gastroenterology} />
            <Route exact path='/Neurology' component={Neurology} />
            <Route exact path='/Psychiatry' component={Psychiatry} />
            <Route exact path='/Surgery' component={Surgery} />
            <Route exact path='/Opthalmology' component={Opthalmology} />
            <Route exact path='/Otolaryngology' component={Otolaryngology} />
        </Switch>
    )
}