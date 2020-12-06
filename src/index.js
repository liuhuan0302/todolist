import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import {mainRouter} from "./router";
import App from './App'
ReactDOM.render(
  <Router>     
    <ul>
      {
        mainRouter.map(route=>{
            return(
              <li>
                <Link to={route.pathname}>{route.pathname.slice(1)}</Link>
              </li>
            )
        })
      }
    </ul>
    <Switch>

      {
        mainRouter.map(route=>{
            console.log(route)
            return <Route key={route.pathname} path={route.pathname} component={route.component} />
        })
      }
    </Switch>
  </Router>,
  document.getElementById('root')
);

