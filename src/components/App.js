import React, { Component } from "react";
import HomePage from "./HomePage";
import GroupMemberPage from "./GroupMemberPage";
import IntroPage from "./IntroPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <HomePage
                                    {...props}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/home"
                            render={props => (
                                <HomePage
                                    {...props}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/intro"
                            render={props => (
                                <IntroPage
                                    {...props}
                                />
                            )}
                        />
                        <Route
                            exact
                            path="/groupmember"
                            render={props => (
                                <GroupMemberPage
                                    {...props}
                                />
                            )}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
