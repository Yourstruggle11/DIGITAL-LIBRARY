import React, {lazy, Suspense} from "react";
import {  useSelector } from "react-redux";


// import components
import SuperadminNavbar from "./components/SuperadminNavbar";
import Preloader from "./components/Preloader"



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router'

//import all screens
const SuperAdminLoginScreen = lazy(() => import("./screen/SuperAdminLoginScreen"))
const SuperAdminHomePageScreen = lazy(() => import("./screen/SuperAdminHomePageScreen"))
const SuperAdminPdfReviewPageScreen = lazy(() => import("./screen/SuperAdminPdfReviewPageScreen"))
const SuperAdminImageReviewPageScreen = lazy(() => import("./screen/SuperAdminImageReviewPageScreen"))
const SuperAdminVideoReviewPageScreen = lazy(() => import("./screen/SuperAdminVideoReviewPageScreen"))
const NotfoundPageScreen = lazy(() => import("./screen/NotfoundPageScreen"))

function App() {
  // const SuperAdminInfo = JSON.parse(localStorage.getItem("superAdminInfo"));
  const {SuperAdminInfo} = useSelector((state) => state.superAdminLogin)


  // console.log(SuperAdminInfo);


  return (
    <Router>
      <Route>
       <SuperadminNavbar/>
      </Route>
      <Switch>
      
      <Route exact path="/">
        {SuperAdminInfo?  <Redirect to="/superadmin" /> :<Suspense fallback={<Preloader />}> <SuperAdminLoginScreen/> </Suspense>  }
        </Route>
        <Route exact path="/superadmin">
        {!SuperAdminInfo?<Redirect to="/" /> :
          <Suspense fallback={<Preloader />}> <SuperAdminHomePageScreen/> </Suspense> } 
        </Route>
        <Route exact path="/superadmin/pdfReview">
        {!SuperAdminInfo?<Redirect to="/" /> :
          <Suspense fallback={<Preloader />}> <SuperAdminPdfReviewPageScreen/> </Suspense> }
        </Route>
        <Route exact path="/superadmin/imageReview">
        {!SuperAdminInfo?<Redirect to="/" /> :
          <Suspense fallback={<Preloader />}> <SuperAdminImageReviewPageScreen/> </Suspense>} {/*DONE*/}
        </Route>
        <Route exact path="/superadmin/videoReview">
        {!SuperAdminInfo?<Redirect to="/" /> :
          <Suspense fallback={<Preloader />}> <SuperAdminVideoReviewPageScreen/> </Suspense>} {/* DONE*/}
        </Route>
        <Route >
          <Suspense fallback={<Preloader />}> <NotfoundPageScreen/> </Suspense>       {/* DONE*/}
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
