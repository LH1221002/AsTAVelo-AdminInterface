import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Schedule from "views/Schedule/Schedule.js";
import LoginPage from "LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/schedule" component={Schedule} />
            <Route path="/" component={LoginPage} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
