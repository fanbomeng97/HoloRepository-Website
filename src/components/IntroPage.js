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

class IntroPage extends Component {
    render() {
        return (
            <div>
                <SharedHeader
                    activeItem='Introduction'
                />

                    <Header
                        textAlign='center'
                        as='h1'
                        content='Introduction'
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '1em',
                        }}
                    />

                <Segment style={{ padding: '5em 0em'}} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Column width={800}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                HoloRepositoryUI
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                A web-based application that allows practitioners to browse their patients and manage the
                                generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                application is accompanied by an API server that is responsible for communicating with the
                                other components.
                            </p>
                            <Divider />
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                HoloPipelines
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                A cloud-based service that performs the automatic generation of 3D models from 2D image
                                stacks. Pre-trained neural network models are deployed and accessed with this component
                                alongside traditional techniques like Hounsfield value thresholding.
                            </p>
                            <Divider />
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                HoloStorage
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                A cloud-based storage for medical 3D models and associated metadata. Entirely hosted on
                                Microsoft Azure, a FHIR server stores the structured medical data and a Blob Storage server
                                provides for the binary holographic data.
                            </p>
                            <Divider />
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                HoloStorageAccessor
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                An enhanced facade, offering a consistent interface to the HoloStorage and translating
                                the public REST API to internal FHIR queries. To facilitate development of 3rd party
                                components, the interface comes with an interactive OpenAPI documentation.
                            </p>
                            <Divider />
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                HoloStorageConnector
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                A Unity library handling the runtime network connections from HoloLens applications to
                                the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate
                                development of 3rd party applications that plug into the HoloRepository ecosystem.
                            </p>
                            <Divider />
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                HoloRepository demo application
                            </Header>
                            <p style={{ fontSize: '1.2em' }}>
                                A simple application that demonstrates how to dynamically access 3D models stored in the
                                HoloStorage. The scenes can be distributed alongside the Connector library and serve as
                                examples and interactive documentation.
                            </p>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <SharedFooter/>
            </div>
        );
    }
}

export default IntroPage;
