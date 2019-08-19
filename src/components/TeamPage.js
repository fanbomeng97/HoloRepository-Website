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
import { isBrowser,isMobile } from "react-device-detect";
import BackgroundImage from "../images/team.jpg";

class TeamPage extends Component {
    render() {
        return (
            <div>
                <SharedHeader activeItem='Team'/>

                <div style={{
                    minHeight: 200,
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    marginTop: '5',
                }}>
                    <Segment style = {{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: 200}}>
                        <Header
                            textAlign='center'
                            content='Team'
                            style={{fontSize: '4em', fontWeight: 'normal', marginTop: 75, color: '#ffffff'}}/>
                    </Segment>
                </div>
                <Segment vertical style={{ padding: '2em 0em', backgroundColor: '#f8f8f8'}}>
                    <Container textAlign='left' >
                        <Segment>
                            <Grid style={{ padding: '1em 1em'}}>
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
                                            <p id = "common"><b>Team member</b></p>
                                            <p id = "common"><b>Responsible for: </b>HoloPipelines</p>
                                            <p id = "common"><b>Email:</b> udomkarn.boonyaprasert.17@ucl.ac.uk</p>
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
                        </Segment>
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
