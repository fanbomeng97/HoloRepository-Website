import React, { Component } from "react";
import HomePage from "./HomePage";
import GroupMemberPage from "./GroupMemberPage";
import IntroPage from "./IntroPage";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (<HomePage/>)}
                        />
                        <Route
                            exact
                            path="/home"

                            render={() => (<HomePage/>)}
                        />
                        <Route
                            exact
                            path="/intro"
                            render={() => (<IntroPage/>)}
                        />
                        <Route
                            exact
                            path="/group"
                            render={() => (<GroupMemberPage/>)}
                        />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
