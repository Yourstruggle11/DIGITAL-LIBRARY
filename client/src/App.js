import React, {lazy, Suspense} from "react";
import { useSelector } from "react-redux";


// import components
import NavBar from "./components/NavBar";
import Preloader from "./components/Preloader"




import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router'

//import all screens
const RootHomePageScreen = lazy(()=> import("./screen/RootHomePageScreen"))
const HomePageScreen = lazy(()=> import("./screen/HomePageScreen"))
const AdminDashboardScreen = lazy(() => import("./screen/AdminDashboardScreen"))
const AdminHomePageScreen = lazy(()=> import("./screen/AdminHomePageScreen"))
const AdminLoginScreen = lazy(() => import("./screen/AdminLoginScreen"))
const AdminSignupScreen = lazy(() => import("./screen/AdminSignupScreen"))
const UploadScreen = lazy(() => import("./screen/UploadScreen"))
const NotfoundPageScreen = lazy(() => import("./screen/NotfoundPageScreen"))
const PdfDocumentScreen = lazy(() => import("./screen/PdfDocumentScreen"))
const ImageDocumentScreen = lazy(() => import("./screen/ImageDocumentScreen"))
const VideoDocumentScreen = lazy(() => import("./screen/VideoDocumentScreen"))
const ActivationScreen = lazy(() => import("./screen/ActivationScreen"))
const ContactUsScreen = lazy(() => import("./screen/ContactUsScreen"))
const AboutUsScreen = lazy(() => import("./screen/AboutUsScreen"))
const ForgotPasswordScreen = lazy(() => import("./screen/ForgotPasswordScreen"))
const MatchOtpScreen = lazy(() => import("./screen/MatchOtpScreen"))
const UpdatePasswordScreen = lazy(() => import("./screen/UpdatePasswordScreen"))


function App() {

  const {adminInfo} = useSelector((state)=> state.adminLogin);
  const { otpForResetPassword } = useSelector((state) => state.sendRecoveryEmail);
  

  // console.log(adminInfo);
  // const URL = window.location.pathname;
  // console.log(window.location.pathname);
  return (
    <Router>
      <Route>
        <NavBar />
      </Route>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<Preloader />}>
          <RootHomePageScreen /> {/*DONE*/}
          </Suspense>
        </Route>
        <Route exact path="/home">
        <Suspense fallback={<Preloader />}>
          <HomePageScreen/>       {/*DONE*/}
        </Suspense>
        </Route>
        <Route exact path="/home/pdf">
        <Suspense fallback={<Preloader />}>
          <PdfDocumentScreen/>       {/*DONE*/}
        </Suspense>
        </Route>
        <Route exact path="/home/image">
        <Suspense fallback={<Preloader />}>
          <ImageDocumentScreen/>       {/*DONE*/}
        </Suspense>
        </Route>
        <Route exact path="/home/video">
        <Suspense fallback={<Preloader />}>
          <VideoDocumentScreen/>       {/*DONE*/}
        </Suspense>
        </Route> 
        <Route exact path="/adminDashboard">
        {!adminInfo?<Redirect to="/" /> :
        <Suspense fallback={<Preloader/>}>
          <AdminDashboardScreen/>
        </Suspense>}             {/*DONE*/}
        </Route>
         <Route exact path="/admin">
         {!adminInfo?<Redirect to="/" /> :
        <Suspense fallback={<Preloader />}>
          <AdminHomePageScreen/> 
        </Suspense>}              {/*DONE*/}
        </Route> 
        <Route exact path="/adminSignup">
        <Suspense fallback={<Preloader />}>
          <AdminSignupScreen/>        {/*DONE*/} {/* VALIDATION DONE */}
        </Suspense>
        </Route>
        <Route exact path="/activation">
        <Suspense fallback={<Preloader />}>
          <ActivationScreen/>             {/*DONE*/}
        </Suspense>
        </Route> 
        <Route exact path="/adminLogin">
        <Suspense fallback={<Preloader />}>
          <AdminLoginScreen/>         {/*DONE*/}  {/* VALIDATION DONE */}
          </Suspense>
        </Route>
        <Route exact path="/uploads">
        {!adminInfo?<Redirect to="/" /> :
        <Suspense fallback={<Preloader />}>
          <UploadScreen/>            {/*DONE*/}  {/* VALIDATION DONE */}
        </Suspense>}
        </Route>
        <Route exat path="/contact">
        <Suspense fallback={<Preloader />}>
          <ContactUsScreen/>       {/*DONE*/}
        </Suspense>
        </Route>
        <Route exat path="/About">
        <Suspense fallback={<Preloader />}>
          <AboutUsScreen/>       {/*DONE*/}
        </Suspense>
        </Route>
        <Route exat path="/forgotpassword">
        {otpForResetPassword? <Redirect to="/checkpoint"/>:
        <Suspense fallback={<Preloader />}>
          <ForgotPasswordScreen/>       {/*DONE*/}
        </Suspense>}
        </Route>
        <Route exat path="/checkpoint">
          {!otpForResetPassword? <Redirect to="/forgotpassword"/>:
        <Suspense fallback={<Preloader />}>
          <MatchOtpScreen/>       {/*DONE*/}
        </Suspense>}
        </Route>
        <Route exat path="/update-password">
        <Suspense fallback={<Preloader />}>
          <UpdatePasswordScreen/>       {/*DONE*/}
        </Suspense>
        </Route>
        <Route >
        <Suspense fallback={<Preloader />}>
          <NotfoundPageScreen/>       {/*DONE*/}
        </Suspense>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
