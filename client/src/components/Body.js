import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Register from './Register'
import Login from './Login'
import Todos from './Todos'


function Body() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/todos' component={Todos} />
        </Switch>
    )
}

export default Body
