import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "routes";
import "./index.scss";

render(
  <Router>
    <Switch>
      {routes.map(({ Component, ...spread }, index) => (
        <Route {...spread} key={index}>
          <Component />
        </Route>
      ))}
    </Switch>
  </Router>,
  document.getElementById("root")
);
