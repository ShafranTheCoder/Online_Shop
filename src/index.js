import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import Modal from "react-modal";

import "./styles/index.scss";
import * as routes from "./config/routes";
import store, { persistor } from "./store";
import history from "./utils/history";
import LayoutDefault from "./components/layouts/LayoutDefault";
import Notice from "./components/Notice";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

Modal.setAppElement(`#${routes.ROOT}`);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <Switch>
            <LayoutDefault exact path={routes.HOME} component={Home} />

            <LayoutDefault component={NotFound} />
          </Switch>
          <Notice />
        </Fragment>
      </Router>
    );
  }
}

const Loading = props => <div>Loading...</div>;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById(routes.ROOT),
);
