import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import SplashPage from "./components/SplashPage";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
// import Footer from "./components/Footer";
import AlbumDetail from "./components/AlbumDetail";
import HomePage from "./components/Home";
import Search from "./components/Search";
import SongPlayer from "./components/SongPlayer";
import Open from "./components/Open";


function App() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // if (sessionUser) {
  //   return (
  //     <>
  //       <Navigation isLoaded={isLoaded} />
  //       {isLoaded}
  //     </>
  //   );
  // } else {
  return (
    <>
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            {/* <Navigation isLoaded={isLoaded} /> */}
            <SplashPage />
            {/* <Footer /> */}
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <ProtectedRoute path="/home">
            <Navigation isLoaded={isLoaded} />
            <HomePage />
          </ProtectedRoute>
          <ProtectedRoute path="/album/:id">
            <Navigation isLoaded={isLoaded} />
            <AlbumDetail />
            <SongPlayer />
          </ProtectedRoute>
          <ProtectedRoute path="/open">
            <Open />
          </ProtectedRoute>
          <ProtectedRoute path="/search">
            <Navigation isLoaded={isLoaded} />
            {/* <SongPlayer /> */}
            <Search />
          </ProtectedRoute>
          <Redirect to="/home" />
        </Switch>
      )}
    </>
  );
  // }
}


export default App;
