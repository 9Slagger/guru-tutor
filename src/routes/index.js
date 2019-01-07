import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../views/HomePage'
import PromotionPage from '../views/PromotionPage'
import SignPage from '../views/SigninPage'
import SignupPage from '../views/SignupPage'
import Contact from '../views/ContactPage'
import DashboardPage from '../views/DashboardPage'
import RoomHighschoolPage from '../views/RoomHighschoolPage'
import RoomUniversityPage from '../views/RoomUniversityPage'
import NewsPage from '../views/NewsPage'
import UsersPage from '../views/UsersPage'
import NotFoundPage from '../views/NotFoundPage'
import PermissionUserPage from '../views/PermissionUserPage'
import ManageHomePage from '../views/ManageHomePage'
import AddHomecontentFirst from '../views/ManageHomePage/AddHomeContentFirst'
import AddHomecontentSecond from '../views/ManageHomePage/AddHomecontentSecond'
import AddHomeContentThird from '../views/ManageHomePage/AddHomeContentThird'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signin" component={SignPage} />
    <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/promotion" component={PromotionPage} />
    <Route exact path="/dashboard" component={DashboardPage} />
    <Route exact path="/roomhighschool" component={RoomHighschoolPage} />
    <Route exact path="/roomuniversity" component={RoomUniversityPage} />
    <Route exact path="/news" component={NewsPage} />
    <Route exact path="/dashboard/users" component={UsersPage} />
    <Route
      exact
      path="/dashboard/userpermission"
      component={PermissionUserPage}
    />
    <Route exact path="/dashboard/managehome" component={ManageHomePage} />
    <Route
      exact
      path="/dashboard/managehome/homecontentfirst/add"
      component={AddHomecontentFirst}
    />
    <Route
      exact
      path="/dashboard/managehome/homecontentsecond/add"
      component={AddHomecontentSecond}
    />
    <Route
      exact
      path="/dashboard/managehome/homecontentthird/add"
      component={AddHomeContentThird}
    />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routing
