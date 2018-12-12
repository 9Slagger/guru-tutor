import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../views/HomePage'
import PromotionPage from '../views/PromotionPage'
import SupportProjectPage from '../views/SupportProjectPage'
import SignPage from '../views/SigninPage'
import Contact from '../views/ContactPage'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signin" component={SignPage} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/promotion" component={PromotionPage} />
    <Route exact path="/supportproject" component={SupportProjectPage} />
  </Switch>
)

export default Routing
