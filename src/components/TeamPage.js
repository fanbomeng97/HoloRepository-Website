import React, { Component } from "react";
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import "./FontStyle.css";
import {
    Header,
    Segment,
    Image,
    Grid,
    Divider,
    Container
} from "semantic-ui-react";
import { isBrowser, isTablet,isMobile } from "react-device-detect";

class TeamPage extends Component {
    render() {
        return (
            <div>
                <SharedHeader activeItem='Team'/>
                <Segment vertical>
                    <Header
                        textAlign='center'
                        as='h1'
                        content='Team'
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '2em',
                        }}/>
                        <Container textAlign='left'>
                            <Grid style={{ padding: '5em 0em'}}>
                                <Grid.Row>
                                    <p style={{padding: '0em 1em'}}>
                                        (Sorted by alphabetical)
                                    </p>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <Image src= "Images/niels.jpg" circular/>
                                    </Grid.Column>
                                    <Grid.Column width={13}>
                                        <Header id = "normal_2">
                                            Boecker, Niels
                                        </Header>
                                        <p id = "common"><b>Team leader</b></p>
                                        <p id = "common" ><b>Responsible for: </b>HoloRepository UI</p>
                                        <p id = "common"><b>Email:</b> niels.boecker.18@ucl.ac.uk</p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Divider />
                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <Image src= "Images/wenjie.png" circular/>
                                    </Grid.Column>
                                    <Grid.Column width={isBrowser ? 5 : 13}>
                                        <Header id = "normal_2">
                                            Boon, Wenjie
                                        </Header>
                                        <p id = "common"><b>Team member</b></p>
                                        <p id = "common"><b>Responsible for: </b>HoloStorage and Accessor</p>
                                        <p id = "common"><b>Email:</b> wenjie.boon.18@ucl.ac.uk</p>
                                    </Grid.Column>
                                    {isBrowser ?
                                        <Grid.Column width={3}>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular/>
                                        </Grid.Column>: ''}
                                    {isBrowser ?
                                        <Grid.Column width={5}>
                                            <Header id = "normal_2">
                                                Boonyaprasert, Udomkarn
                                            </Header>
                                            <p id = "common"><b>Team member</b></p>
                                            <p id = "common"><b>Responsible for: </b>HoloPipelines</p>
                                            <p id = "common"><b>Email:</b> udomkarn.boonyaprasert.17@ucl.ac.uk</p>
                                        </Grid.Column>: ''}
                                </Grid.Row>
                                <Divider />
                                {isMobile ?
                                    <Grid.Row>
                                        <Grid.Column width={3}>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular/>
                                        </Grid.Column>
                                        <Grid.Column width={13}>
                                            <Header id = "normal_2">
                                                Boonyaprasert, Udomkarn
                                            </Header>
                                            <p id = "common"><b>Team leader</b></p>
                                            <p id = "common"><b>Responsible for: </b>HoloRepository UI</p>
                                            <p id = "common"><b>Email:</b> niels.boecker.18@ucl.ac.uk</p>
                                        </Grid.Column>
                                    </Grid.Row> : ''}
                                {isMobile ? <Divider /> : ''}

                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <Image src= "Images/fanbo.png" circular/>
                                    </Grid.Column>
                                    <Grid.Column width={isBrowser ? 5 : 13}>
                                        <Header id = "normal_2">
                                            Meng, Fanbo
                                        </Header>
                                        <p id = "common"><b>Team member</b></p>
                                        <p id = "common"><b>Responsible for: </b>HoloLens App and StorageConnector</p>
                                        <p id = "common"><b>Email:</b> fanbo.meng.18@ucl.ac.uk</p>
                                    </Grid.Column>

                                    {isBrowser ?
                                        <Grid.Column width={3}>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular/>
                                        </Grid.Column> : ''}
                                    {isBrowser ?
                                        <Grid.Column width={5}>
                                            <Header id = "normal_2">
                                                Wong, Ka Wai
                                            </Header>
                                            <p id = "common"><b>Team member</b></p>
                                            <p id = "common"><b>Responsible for: </b>HoloPipelines</p>
                                            <p id = "common"><b>Email:</b> ka.wong.18@ucl.ac.uk</p>
                                        </Grid.Column> : ''}
                                </Grid.Row>
                                {isMobile ? <Divider /> : ''}
                                {isMobile ?  <Grid.Row>
                                    <Grid.Column width={3}>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular/>
                                    </Grid.Column>
                                    <Grid.Column width={13}>
                                        <Header id = "normal_2">
                                            Wong, Ka Wai
                                        </Header>
                                        <p id = "common"><b>Team member</b></p>
                                        <p id = "common"><b>Responsible for: </b>HoloPipelines</p>
                                        <p id = "common"><b>Email:</b> ka.wong.18@ucl.ac.uk</p>
                                    </Grid.Column>
                                </Grid.Row>: ''}
                            </Grid>
                        </Container>
                </Segment>
                <SharedFooter/>
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
}

export default TeamPage;
