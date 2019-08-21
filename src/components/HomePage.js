import React, { Component } from "react";
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import BackgroundImage from "../images/background.png";
import "./FontStyle.css";
import {Header, Segment, Grid, Container, Button, Icon, Image, Divider} from "semantic-ui-react";
import {Link} from "react-router-dom";
import { isBrowser, isTablet } from "react-device-detect";

const headerStyle = {
    fontSize: isBrowser ? '2.1em' : '1.5em',
    fontWeight: 'normal',
    padding: isBrowser ? "0em 1em": "0em 1.5em"
};

class HomePage extends Component {
    render() {
        return (
            <div>
                <SharedHeader activeItem='Home'/>
                <div style={{
                        minHeight: 700,
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        marginTop: '5',
                    }}>
                    <Segment style = {{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: 700}}>
                        <Container textAlign='center'>
                            <p style={{
                                    fontSize: isBrowser || isTablet ? '6em' : '3em',
                                    fontWeight: 'normal',
                                    color: 'white',
                                    marginTop: 150
                                }}>
                                HoloRepository
                            </p>
                            <p style={{
                                    fontSize: isBrowser || isTablet ? '1.8em' : '1.2em',
                                    fontWeight: 'normal',
                                    color: 'white'
                                }}>
                                A system for transforming medical imaging studies such as CT or MRI scans into
                                3-dimensional holograms, storing data on a cloud-based platform and making it available
                                for other systems.
                            </p>
                            <Button primary size='huge' as={Link} to={{ pathname : '/intro' , state : { element: 'title' }}} style={{marginTop: 50}}>
                                Start Explore
                                <Icon name='right arrow' />
                            </Button>
                        </Container>
                    </Segment>
                </div>

                <Segment style={{ padding: '3em 0em', backgroundColor: '#f8f8f8'}} vertical >
                    <Grid container stackable verticalAlign='middle' textAlign='justified'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header style={headerStyle}>
                                    HoloRepository UI
                                </Header>
                                <p id = "grayFont">
                                    A web-based application that allows practitioners to browse their patients and manage the
                                    generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                    application is accompanied by an API server that is responsible for communicating with the
                                    other components.
                                </p>
                                <div style = {{padding: "0em 2em"}}>
                                    <Button as={Link} to={{ pathname : '/intro' , state : { element: 'ui' }}} style={{backgroundColor: '#ffc375', marginTop: 10}}>
                                        <p style={{color: '#ffffff'}}>Explore more <Icon name='right arrow' /></p>
                                    </Button>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={8} align='middle'>
                                <Image src= "Images/ui.png" size = 'large'/>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider/>
                        <Grid.Row style={{ marginBottom: 20}}>
                            <Grid.Column width={8} align='middle' >
                                <Image src= "Images/pipeline.png" size = 'large'/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header style={headerStyle}>
                                    HoloPipelines
                                </Header>
                                <p id = "grayFont">
                                    A cloud-based service that performs the automatic generation of 3D models from 2D image
                                    stacks. Pre-trained neural network models are deployed and accessed with this component
                                    alongside traditional techniques like Hounsfield value thresholding.
                                </p>
                                <div style = {{padding: "0em 2em"}}>
                                    <Button as={Link} to={{ pathname : '/intro' , state : { element: 'pipeline' }}} style={{backgroundColor: '#a9dc7f', marginTop: 10}}>
                                        <p style={{color: '#ffffff'}}>Explore more <Icon name='right arrow' /></p>
                                    </Button>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider/>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header style={headerStyle}>
                                    HoloStorage and Accessor
                                </Header>
                                <p id = "grayFont">
                                    A cloud-based storage for medical 3D models and associated metadata. Entirely hosted on
                                    Microsoft Azure, a FHIR server stores the structured medical data and a Blob Storage server
                                    provides for the binary holographic data.
                                </p>
                                <p id = "grayFont">
                                    An enhanced facade, offering a consistent interface to the HoloStorage and translating
                                    the public REST API to internal FHIR queries. To facilitate development of 3rd party
                                    components, the interface comes with an interactive OpenAPI documentation.
                                </p>
                                <div style = {{padding: "0em 2em"}}>
                                    <Button as={Link} to={{ pathname : '/intro' , state : { element: 'accessor' }}} style={{backgroundColor: '#8bbfe7', marginTop: 10}}>
                                        <p style={{color: '#ffffff'}}>Explore more <Icon name='right arrow' /></p>
                                    </Button>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={8} align='middle'>
                                <Image src= "Images/accessor.png" size = 'large'/>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider/>
                        <Grid.Row>
                            <Grid.Column width={8} align='middle'>
                                <Image src= "Images/lens.png" size = 'large'/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header style={headerStyle}>
                                    HoloLens App and Storage Connector
                                </Header>
                                <p id = "grayFont">
                                    A simple application that demonstrates how to dynamically access 3D models stored in the
                                    HoloStorage. The scenes can be distributed alongside the Connector library and serve as
                                    examples and interactive documentation.
                                </p>
                                <p id = "grayFont">
                                    A Unity library handling the runtime network connections from HoloLens applications to
                                    the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate
                                    development of 3rd party applications that plug into the HoloRepository ecosystem.
                                </p>
                                <div style = {{padding: "0em 2em"}}>
                                    <Button as={Link} to={{ pathname : '/intro' , state : { element: 'hololens' }}} style={{backgroundColor: '#d1bcd2', marginTop: 10}} >
                                        <p style={{color: '#ffffff'}}>Explore more <Icon name='right arrow' /></p>
                                    </Button>
                                </div>
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

export default HomePage;
