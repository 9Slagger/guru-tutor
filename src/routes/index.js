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
import AddNewContent from '../views/ManageNewPage/AddNewContent'
import AddPromotionContent from '../views/ManagePromotionPage/AddPromotionContent'
import ManageNewPage from '../views/ManageNewPage'
import ManagePromotionPage from '../views/ManagePromotionPage'
import ProfilePage from '../views/ProfilePage'
import CoursePage from '../views/ManageCoursesPage'
import AddCoursePage from '../views/ManageCoursesPage/AddCoursePage'
import ManageCoursePage from '../views/ManageCoursePage'
import MyClassPage from '../views/MyClassPage'
import ClassPage from '../views/ClassPage'
import UploadFile from '../components/UploadFile'

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
    <Route exact path="/upload" component={UploadFile} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routing
