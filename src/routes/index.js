import { Route, Switch } from 'react-router-dom'

import AddCoursePage from '../views/ManageCoursesPage/AddCoursePage'
import AddHomeContentThird from '../views/ManageHomePage/AddHomeContentThird'
import AddHomecontentFirst from '../views/ManageHomePage/AddHomeContentFirst'
import AddHomecontentSecond from '../views/ManageHomePage/AddHomecontentSecond'
import AddNewContent from '../views/ManageNewPage/AddNewContent'
import AddPromotionContent from '../views/ManagePromotionPage/AddPromotionContent'
import ClassPage from '../views/ClassPage'
import Contact from '../views/ContactPage'
import CoursePage from '../views/ManageCoursesPage'
import DashboardPage from '../views/DashboardPage'
import HomePage from '../views/HomePage'
import ManageCoursePage from '../views/ManageCoursePage'
import ManageHomePage from '../views/ManageHomePage'
import ManageNewPage from '../views/ManageNewPage'
import ManagePromotionPage from '../views/ManagePromotionPage'
import ManageUserbyCoursePage from '../views/ManageUserbyCoursePage'
import MyClassPage from '../views/MyClassPage'
import NewsPage from '../views/NewsPage'
import NotFoundPage from '../views/NotFoundPage'
import PermissionUserPage from '../views/PermissionUserPage'
import ProfilePage from '../views/ProfilePage'
import PromotionPage from '../views/PromotionPage'
import React from 'react'
import RoomHighschoolPage from '../views/RoomHighschoolPage'
import RoomUniversityPage from '../views/RoomUniversityPage'
import SignPage from '../views/SigninPage'
import SignupPage from '../views/SignupPage'
import UploadFile from '../components/UploadFile'
import UsersPage from '../views/UsersPage'
import WatchCousePage from '../views/WatchCousePage'
import WatchVideoPage from '../views/WatchVideoPage'
import TestPage from '../views/TestPage'
import CartPage from '../views/CartPage'
import MyOrderPage from '../views/MyOrderPage'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/test" component={TestPage} />
    <Route exact path="/myorder" component={MyOrderPage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/signin" component={SignPage} />
    <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/promotion" component={PromotionPage} />
    <Route exact path="/dashboard" component={DashboardPage} />
    <Route exact path="/roomhighschool" component={RoomHighschoolPage} />
    <Route exact path="/roomuniversity" component={RoomUniversityPage} />
    <Route exact path="/news" component={NewsPage} />
    <Route exact path="/profile" component={ProfilePage} />
    <Route exact path="/dashboard/users" component={UsersPage} />
    <Route exact path="/myclass" component={MyClassPage} />
    <Route exact path="/myclass/class" component={ClassPage} />
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
      path="/dashboard/managehome/homecontentfirst/edit/:id"
      component={AddHomecontentFirst}
    />
    <Route
      exact
      path="/dashboard/managehome/homecontentsecond/edit/:id"
      component={AddHomecontentSecond}
    />
    <Route
      exact
      path="/dashboard/managehome/homecontentthird/add"
      component={AddHomeContentThird}
    />
    <Route
      exact
      path="/dashboard/adduserforcourse/:id"
      component={ManageUserbyCoursePage}
    />
    <Route
      exact
      path="/dashboard/managehome/homecontentthird/edit/:id"
      component={AddHomeContentThird}
    />
    <Route exact path="/dashboard/managenew" component={ManageNewPage} />
    <Route exact path="/dashboard/managenew/add" component={AddNewContent} />
    <Route
      exact
      path="/dashboard/managenew/edit/:id"
      component={AddNewContent}
    />
    <Route
      exact
      path="/dashboard/managepromotion/add"
      component={AddPromotionContent}
    />
    <Route
      exact
      path="/dashboard/managepromotion/edit/:id"
      component={AddPromotionContent}
    />
    <Route
      exact
      path="/dashboard/managenew/edit/:id"
      component={AddPromotionContent}
    />
    <Route
      exact
      path="/dashboard/managepromotion"
      component={ManagePromotionPage}
    />
    <Route exact path="/dashboard/course" component={CoursePage} />
    <Route exact path="/dashboard/course/add" component={AddCoursePage} />
    <Route exact path="/dashboard/course/edit/:id" component={AddCoursePage} />
    <Route exact path="/dashboard/course/:id" component={ManageCoursePage} />
    <Route exact path="/watch/course/:id" component={WatchCousePage} />
    <Route exact path="/watch/mycourse/:id" component={WatchCousePage} />
    <Route exact path="/watch/video/:id" component={WatchVideoPage} />
    <Route exact path="/upload" component={UploadFile} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routing
