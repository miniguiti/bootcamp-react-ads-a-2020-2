// Router: permite a aplicação trabalhar com as rotas
// Switch: permite que as rotas sejam alteradas
// Route: defini o que o usuário vai ver na URL

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginRedirect from './pages/LoginRedirect'
import NotFound from './pages/NotFound'
import Logout from './pages/Logout'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginRedirect} />
                <Route exact path="/ate" component={Logout} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Routes;