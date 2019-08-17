import React, { Component } from "react";
import SharedHeader from "../shared/Header";
import SharedFooter from "../shared/Footer";
import BackgroundImage from "../images/background.jpg";
import {
    Header,
    Segment,
    Image,
    Grid,
    Button
} from "semantic-ui-react";

class HomePage extends Component {
    render() {
        return (
            <div>
                <SharedHeader
                    activeItem='Home'
                />

                <Segment
                    inverted
                    textAlign='center'
                    style={{
                        minHeight: 900,
                        padding: '1em 0em',
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    vertical
                >
                    <Header
                        textAlign='center'
                        as='h1'
                        content='HoloRepository'
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '3em',
                        }}
                    />
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Column width={80}>
                            <Header
                                textAlign='center'
                                as='h3'
                                content='A system for transforming medical imaging studies such as CT or MRI scans into 3-dimensional holograms, storing data on a cloud-based platform and making it available for other systems.'
                                style={{
                                    fontSize: '1.8em',
                                    fontWeight: 'normal',
                                    marginBottom: 0,
                                    marginTop: '3em',
                                    color: 'white'
                                }}
                            />
                        </Grid.Column>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '8em 0em'}} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    We Help Companies and Companions
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    We can give your company superpowers to do things that they never thought possible.
                                    Let us delight your customers and empower your needs... through pure data analytics.
                                </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    We Make Bananas That Can Dance
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                    bioengineered.
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    We Help Companies and Companions
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    We can give your company superpowers to do things that they never thought possible.
                                    Let us delight your customers and empower your needs... through pure data analytics.
                                </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    We Make Bananas That Can Dance
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                    bioengineered.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <SharedFooter/>
            </div>
        );
    }
}

export default HomePage;
