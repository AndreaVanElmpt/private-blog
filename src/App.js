import React, { useState } from 'react';
import {Switch, Route} from "react-router-dom";
import TopMenu from "./components/TopMenu";

import HomePage from "./pages/home/Home";
import Blogposts from "./pages/blogposts/Blogposts"
import Login from "./pages/login/Login"
import './App.css';

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
        <>
            <TopMenu />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/blogposts/:blogId">
                    <Blogposts />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </>
    );
}

export default App;
