import React, { Component } from "react";
import SharedHeader from "../shared/Header";
import SharedFooter from "../shared/Footer";
import {
    Header,
    Segment,
    Image,
    Grid,
    Button,
    Divider
} from "semantic-ui-react";
import BackgroundImage from "../images/background.jpg";

class GroupMemberPage extends Component {
    render() {
        return (
            <div>
                <SharedHeader
                    activeItem='Group members'
                />
                <Header
                    textAlign='center'
                    as='h1'
                    content='Group Members'
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '1em',
                    }}
                />

                <Grid container style={{ padding: '5em 0em'}}>
                    <Grid.Row>
                        <p style={{padding: '0em 1em'}}>
                            (Sorted by alphabetical)
                        </p>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image bordered rounded size='large' src= "Images/niels.jpg" />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Boecker, Niels
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                A web-based application that allows practitioners to browse their patients and manage the
                                generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                application is accompanied by an API server that is responsible for communicating with the
                                other components.
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Divider />

                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image bordered rounded size='large' src= "Images/wenjie.png" />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Boon, Wenjie
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                A web-based application that allows practitioners to browse their patients and manage the
                                generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                application is accompanied by an API server that is responsible for communicating with the
                                other components.
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Divider />

                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Boonyaprasert, Udomkarn
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                A web-based application that allows practitioners to browse their patients and manage the
                                generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                application is accompanied by an API server that is responsible for communicating with the
                                other components.
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Divider />

                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image bordered rounded size='large' src= "Images/fanbo.png" />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Meng, Fanbo
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                A web-based application that allows practitioners to browse their patients and manage the
                                generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                application is accompanied by an API server that is responsible for communicating with the
                                other components.
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Divider />

                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Wong, Ka Wai
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                A web-based application that allows practitioners to browse their patients and manage the
                                generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                application is accompanied by an API server that is responsible for communicating with the
                                other components.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <SharedFooter/>
            </div>
        );
    }
}

export default GroupMemberPage;
