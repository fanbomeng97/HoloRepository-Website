import React, { Component } from "react";
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import {
    Header,
    Segment,
    Image,
    Grid,
    Divider,
    Container
} from "semantic-ui-react";

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
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            Boecker, Niels
                                        </Header>
                                        <p style={{ fontSize: '1.2em' }}><b>Team leader</b></p>
                                        <p style={{ fontSize: '1.2em' }}><b>Responsible for: </b>HoloRepository UI</p>
                                        <p style={{ fontSize: '1.2em' }}><b>Email:</b> niels.boecker.18@ucl.ac.uk</p>
                                    </Grid.Column>
                                </Grid.Row>

                                <Divider />

                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <Image src= "Images/wenjie.png" circular/>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            Boon, Wenjie
                                        </Header>
                                        <p style={{ fontSize: '1.2em' }}><b>Team member</b></p>
                                        <p style={{ fontSize: '1.2em' }}><b>Responsible for: </b>HoloStorage and Accessor</p>
                                        <p style={{ fontSize: '1.2em' }}><b>Email:</b> wenjie.boon.18@ucl.ac.uk</p>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular/>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            Boonyaprasert, Udomkarn
                                        </Header>
                                        <p style={{ fontSize: '1.2em' }}><b>Team member</b></p>
                                        <p style={{ fontSize: '1.2em' }}><b>Responsible for: </b>HoloPipelines</p>
                                        <p style={{ fontSize: '1.2em' }}><b>Email:</b> udomkarn.boonyaprasert.17@ucl.ac.uk</p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Divider />
                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <Image src= "Images/fanbo.png" circular/>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            Meng, Fanbo
                                        </Header>
                                        <p style={{ fontSize: '1.2em' }}><b>Team member</b></p>
                                        <p style={{ fontSize: '1.2em' }}><b>Responsible for: </b>HoloLens App and StorageConnector</p>
                                        <p style={{ fontSize: '1.2em' }}><b>Email:</b> fanbo.meng.18@ucl.ac.uk</p>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular/>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            Wong, Ka Wai
                                        </Header>
                                        <p style={{ fontSize: '1.2em' }}><b>Team member</b></p>
                                        <p style={{ fontSize: '1.2em' }}><b>Responsible for: </b>HoloPipelines</p>
                                        <p style={{ fontSize: '1.2em' }}><b>Email:</b> ka.wong.18@ucl.ac.uk</p>
                                    </Grid.Column>
                                </Grid.Row>
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
