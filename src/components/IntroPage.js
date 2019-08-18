import React, { Component } from "react";
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import "./FontStyle.css";
import BackgroundImage from "../images/intro.jpg";
import {
    Header,
    Segment,
    Container,
    Card,
    Label
} from "semantic-ui-react";

class IntroPage extends Component {
    render() {
        return (
            <div>
                <SharedHeader activeItem='Introduction'/>
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
                            content='Introduction'
                            style={{fontSize: '4em', fontWeight: 'normal', marginTop: 75, color: '#ffffff'}}/>
                    </Segment>
                </div>
                <Segment style={{ padding: '3em 0em', backgroundColor: '#f8f8f8'}} vertical>
                    <Container textAlign='justified'>

                        <Segment fluid >
                            <Label ribbon style={{ padding: '0.5em 1em'}}>
                                Background
                            </Label>
                            <Header id = "normal_2" style={{ padding: '0.5em 1em'}}>
                                Background
                            </Header>

                            <p id = "common_padding" >
                                Recent technical advancements in the realm of augmented reality (AR) and the availability
                                of consumer head-mounted display (HMD) devices such as the Microsoft HoloLens have opened
                                a wealth of opportunities for healthcare applications, particularly in medical imaging.
                                Several approaches have been proposed to transform imaging studies, such as CT or MRI
                                scans, into three-dimensional models which can be inspected and manipulated in an AR
                                experience [1–4]. Generally, all studies agree that the technology is very promising
                                and may even revolutionise the practice of medicine [5]. However, virtually every
                                existing workflow relies on significant manual guidance to conduct steps like segmentation
                                or conversion to polygonal models.
                            </p>

                            <p id = "common_padding" >
                                Neural networks can help automate many tedious tasks and are increasingly used in medical
                                imaging. Architectures such as the 3D U-Net [6] generate models which autonomously create
                                segmentation maps, even with relatively little training data. However, translating these
                                advancements from theory to clinical practice has unique challenges: The source code may
                                not be available, documentation may be missing or require too much technical knowledge.
                                Furthermore, different operating systems, software packages and dependencies obstruct
                                successful usage [7].
                            </p>
                            <p id = "common_padding" >
                                With the HoloRepository project, we intend to build the technical base for a seamless
                                workflow that allows practitioners to generate 3D models from imaging studies and access
                                them in an AR setting with as little manual involvement as possible. Pre-trained neural
                                networks can be packaged into shareable Docker containers and accessed with a unified
                                interface. Additionally, the Fast Healthcare Interoperability Resources (FHIR) standard,
                                which is rapidly being adapted and also has a significant impact on the field of radiology [8],
                                will connect the 3D models with existing patient health records.
                            </p>
                        </Segment>

                        <Segment fluid >
                            <Label ribbon style={{ backgroundColor: '#ffc375'}}>
                                HoloRepository UI
                            </Label>
                            <Header id = "normal_2" style={{ padding: '0.5em 1em'}}>
                                HoloRepositoryUI
                            </Header>
                            <p id = "common_padding">
                                A web-based application that allows practitioners to browse their patients and manage the
                                generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                application is accompanied by an API server that is responsible for communicating with the
                                other components.
                            </p>
                        </Segment>

                        <Segment fluid >
                            <Label ribbon style={{ backgroundColor: '#a9dc7f'}}>
                                HoloPipelines
                            </Label>
                            <Header id = "normal_2" style={{ padding: '0.5em 1em'}}>
                                HoloPipelines
                            </Header>
                            <p id = "common_padding">
                                A cloud-based service that performs the automatic generation of 3D models from 2D image
                                stacks. Pre-trained neural network models are deployed and accessed with this component
                                alongside traditional techniques like Hounsfield value thresholding.
                            </p>
                        </Segment>

                        <Segment fluid >
                            <Label ribbon style={{ backgroundColor: '#8bbfe7'}}>
                                HoloStorage and Accessor
                            </Label>
                            <Header id = "normal_2" style={{ padding: '0.5em 1em'}}>
                                HoloStorage
                            </Header>
                            <p id = "common_padding">
                                A cloud-based storage for medical 3D models and associated metadata. Entirely hosted on
                                Microsoft Azure, a FHIR server stores the structured medical data and a Blob Storage server
                                provides for the binary holographic data.
                            </p>

                            <Header id = "normal_2" style={{ padding: '0.5em 1em'}}>
                                HoloStorageAccessor
                            </Header>
                            <p id = "common_padding">
                                An enhanced facade, offering a consistent interface to the HoloStorage and translating
                                the public REST API to internal FHIR queries. To facilitate development of 3rd party
                                components, the interface comes with an interactive OpenAPI documentation.
                            </p>
                        </Segment>

                        <Segment fluid >
                            <Label ribbon style={{ backgroundColor: '#d1bcd2'}}>
                                HoloLens App and StorageConnector
                            </Label>
                            <Header id = "normal_2" style={{ padding: '0.5em 1em'}}>
                                HoloStorageConnector
                            </Header>
                            <p id = "common_padding">
                                A Unity library handling the runtime network connections from HoloLens applications to
                                the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate
                                development of 3rd party applications that plug into the HoloRepository ecosystem.
                            </p>
                            <Header id = "normal_2" style={{ padding: '0.5em 1em'}}>
                                HoloRepository demo application
                            </Header>
                            <p id = "common_padding">
                                A simple application that demonstrates how to dynamically access 3D models stored in the
                                HoloStorage. The scenes can be distributed alongside the Connector library and serve as
                                examples and interactive documentation.
                            </p>
                        </Segment>

                        <Card fluid style={{ marginTop: '3em'}}>
                            <Card.Content>
                                <Card.Header>References</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <p>[1]	Smith CM. Medical Imaging in Mixed Reality: A holographics software pipeline.
                                    University College London, 2018.</p>
                                <p>[2]	Pratt P, Ives M, Lawton G, Simmons J, Radev N, Spyropoulou L, et al. Through the
                                    HoloLensTM looking glass: augmented reality for extremity reconstruction surgery using
                                    3D vascular models with perforating vessels. Eur Radiol Exp
                                    2018;2:2. doi:10.1186/s41747-017-0033-2.</p>
                                <p>[3]	Affolter R, Eggert S, Sieberth T, Thali M, Ebert LC. Applying augmented reality
                                    during a forensic autopsy—Microsoft HoloLens as a DICOM viewer. Journal of Forensic
                                    Radiology and Imaging 2019;16:5–8. doi:10.1016/j.jofri.2018.11.003.</p>
                                <p>[4]	Page M. Visualization of Complex Medical Data Using Next-Generation Holographic
                                    Techniques 2017.</p>
                                <p>[5]	Beydoun A, Gupta V, Siegel E. DICOM to 3D Holograms: Use Case for Augmented
                                    Reality in Diagnostic and Interventional Radiology. SIIM Scientific Session Posters
                                    and Demonstrations 2017:4.</p>
                                <p>[6]	Çiçek Ö, Abdulkadir A, Lienkamp SS, Brox T, Ronneberger O. 3D U-Net: Learning
                                    Dense Volumetric Segmentation from Sparse Annotation. ArXiv:160606650 [Cs] 2016.</p>
                                <p>[7]	Beers A, Brown J, Chang K, Hoebel K, Gerstner E, Rosen B, et al. DeepNeuro: an
                                    open-source deep learning toolbox for neuroimaging. ArXiv:180804589 [Cs] 2018.</p>
                                <p>[8]	Kamel PI, Nagy PG. Patient-Centered Radiology with FHIR: an Introduction to the
                                    Use of FHIR to Offer Radiology a Clinically Integrated Platform. J Digit Imaging
                                    2018;31:327–33. doi:10.1007/s10278-018-0087-6.</p>
                            </Card.Content>
                        </Card>
                    </Container>

                </Segment>
                <SharedFooter/>
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
}

export default IntroPage;
