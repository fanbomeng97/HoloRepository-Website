import React, { Component } from "react";
import HomePage from "./HomePage";
import TeamPage from "./TeamPage";
import IntroPage from "./IntroPage";
import { HashRouter, Route, Switch } from "react-router-dom";
import general from "../data/general.md";
import ui from "../data/ui.md";
import pipeline from "../data/pipeline.md";
import accessor from "../data/accessor.md";
import hololens from "../data/hololens.md";
import connector from "../data/connector.md";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            general: "",
            ui: "",
            pipeline: "",
            accessor: "",
            hololens: "",
            connector: "",
        }
    }

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
                            render={props => (<HomePage
                                {...props}
                            />)}
                        />
                        <Route
                            exact
                            path="/intro"
                            render={props => (<IntroPage
                                {...props}
                                general={this.state.general}
                                ui={this.state.ui}
                                pipeline={this.state.pipeline}
                                accessor={this.state.accessor}
                                hololens={this.state.hololens}
                                connector={this.state.connector}
                            />)}
                        />
                        <Route
                            exact
                            path="/team"
                            render={() => (<TeamPage/>)}
                        />
                    </Switch>
                </HashRouter>
            </div>
        );
    }

    componentWillMount() {
        fetch(general)
            .then((res) => res.text())
            .then((general) => {
                this.setState({ general })
            });
        fetch(ui)
            .then((res) => res.text())
            .then((ui) => {
                this.setState({ ui })
            });
        fetch(pipeline)
            .then((res) => res.text())
            .then((pipeline) => {
                this.setState({ pipeline })
            });
        fetch(accessor)
            .then((res) => res.text())
            .then((accessor) => {
                this.setState({ accessor })
            });
        fetch(hololens)
            .then((res) => res.text())
            .then((hololens) => {
                this.setState({ hololens })
            });
        fetch(connector)
            .then((res) => res.text())
            .then((connector) => {
                this.setState({ connector })
            })
    }
}

export default App;
