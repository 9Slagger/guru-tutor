import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../views/HomePage'
import PromotionPage from '../views/PromotionPage'
import SupportProjectPage from '../views/SupportProjectPage'
import SignPage from '../views/SigninPage'
import SignupPage from '../views/SignupPage'
import Contact from '../views/ContactPage'
import RoomUniversityPage from '../views/RoomUniversityPage'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signin" component={SignPage} />
    <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/promotion" component={PromotionPage} />
    <Route exact path="/supportproject" component={SupportProjectPage} />
    <Route exact path="/roomuniversity" component={RoomUniversityPage} />
  </Switch>
)

export default Routing
