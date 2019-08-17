import React, { Component } from "react";
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import {Header, Segment} from "semantic-ui-react";

class GitHubPage extends Component {
    render() {
        return (
            <div>
                <SharedHeader
                    activeItem='github'
                />
                    <Header
                        textAlign='center'
                        as='h1'
                        content='GitHub'
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '1em',
                        }}
                    />
                <SharedFooter/>
            </div>
        );
    }
}

export default GitHubPage;
