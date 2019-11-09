import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd/lib";

import Home from "./home";
import Result from "./result";

const { Content } = Layout;

// TODO: Add history={history}
function AppRouter() {
  return (
    <Router>
      <React.Fragment>
        {/* <Header /> */}

        <Content>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/result" exact component={Result} />
          </div>
        </Content>
      </React.Fragment>
    </Router>
  );
}

export default AppRouter;
