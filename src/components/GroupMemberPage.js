import React, { Component } from "react";
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import {
    Header,
    Segment,
    Image,
    Grid,
    Divider
} from "semantic-ui-react";

class GroupMemberPage extends Component {
    render() {
        return (
            <div>
                <SharedHeader activeItem='Group members'/>
                <Segment vertical>
                    <Header
                        textAlign='center'
                        as='h1'
                        content='Group Members'
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '2em',
                        }}/>
                    <Grid container style={{ padding: '5em 0em'}}>
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
                                <p style={{ fontSize: '1.2em' }}>Team leader</p>
                                <p style={{ fontSize: '1.2em' }}><b>Email:</b> niels.boecker.18@ucl.ac.uk</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider />

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src= "Images/wenjie.png" circular/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Boon, Wenjie
                                </Header>
                                <p style={{ fontSize: '1.2em' }}><b>Team member</b></p>
                                <p style={{ fontSize: '1.2em' }}>
                                    A web-based application that allows practitioners to browse their patients and manage the
                                    generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                    application is accompanied by an API server that is responsible for communicating with the
                                    other components.
                                </p>
                                <p style={{ fontSize: '1.2em' }}><b>Email:</b> wenjie.boon.18@ucl.ac.uk</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider />

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Boonyaprasert, Udomkarn
                                </Header>
                                <p style={{ fontSize: '1.2em' }}><b>Team member</b></p>
                                <p style={{ fontSize: '1.2em' }}>
                                    A web-based application that allows practitioners to browse their patients and manage the
                                    generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                    application is accompanied by an API server that is responsible for communicating with the
                                    other components.
                                </p>
                                <p style={{ fontSize: '1.2em' }}><b>Email:</b> udomkarn.boonyaprasert.17@ucl.ac.uk</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider />

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src= "Images/fanbo.png" circular/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Meng, Fanbo
                                </Header>
                                <p style={{ fontSize: '1.2em' }}><b>Team member</b></p>
                                <p style={{ fontSize: '1.2em' }}>
                                    A web-based application that allows practitioners to browse their patients and manage the
                                    generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                    application is accompanied by an API server that is responsible for communicating with the
                                    other components.
                                </p>
                                <p style={{ fontSize: '1.2em' }}><b>Email:</b> fanbo.meng.18@ucl.ac.uk</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider />

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular/>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Wong, Ka Wai
                                </Header>
                                <p style={{ fontSize: '1.2em' }}><b>Team member</b></p>
                                <p style={{ fontSize: '1.2em' }}>
                                    A web-based application that allows practitioners to browse their patients and manage the
                                    generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                    application is accompanied by an API server that is responsible for communicating with the
                                    other components.
                                </p>
                                <p style={{ fontSize: '1.2em' }}><b>Email:</b> ka.wong.18@ucl.ac.uk</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <SharedFooter/>
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
}

export default GroupMemberPage;
