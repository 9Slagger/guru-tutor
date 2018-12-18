import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../views/HomePage'
import PromotionPage from '../views/PromotionPage'
import SignPage from '../views/SigninPage'
import SignupPage from '../views/SignupPage'
import Contact from '../views/ContactPage'
import DashboardPage from '../views/DashboardPage'
import RoomUniversityPage from '../views/RoomUniversityPage'
import NewsPage from '../views/NewsPage'
import NotFoundPage from '../views/NotFoundPage'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signin" component={SignPage} />
    <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/promotion" component={PromotionPage} />
    <Route exact path="/dashboard" component={DashboardPage} />
    <Route exact path="/roomuniversity" component={RoomUniversityPage} />
    <Route exact path="/news" component={NewsPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routing
