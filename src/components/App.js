import React, { Component } from "react";
import './App.css';
import HomePage from "./HomePage";
import GroupMemberPage from "./GroupMemberPage";
import IntroPage from "./IntroPage";
import GitHubPage from "./GitHubPage";
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
                        <Route
                            exact
                            path="/github"
                            render={props => (
                                <GitHubPage
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
