import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../views/HomePage'
import PromotionPage from '../views/PromotionPage'
import SignPage from '../views/SigninPage'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signin" component={SignPage} />
    <Route exact path="/promotion" component={PromotionPage} />
  </Switch>
)

export default Routing
