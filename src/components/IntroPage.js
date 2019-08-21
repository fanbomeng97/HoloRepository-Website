import React, { Component } from 'react';
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import "./FontStyle.css";
import BackgroundImage from "../images/intro.jpg";
import {Header, Segment, Container, Card, Label, Grid,} from "semantic-ui-react";
import Markdown from 'markdown-to-jsx';
import {isBrowser, isTablet} from "react-device-detect";

const markdownStyle = {
    padding: isBrowser || isTablet  ? '0.5em 2em':'0.5em 0.5em',
    fontSize: isBrowser || isTablet  ? '1.1em':'0.8em',
    fontWeight: 'normal'
};

class IntroPage extends Component {
    render() {
        return (
            <div>
                <SharedHeader activeItem='Introduction'/>
                <div id="title" style={{
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

                <Segment style={{ marginTop: 0, backgroundColor: '#f8f8f8'}}>
                    <Grid>
                        <Grid.Row>
                            {isBrowser ? <Grid.Column width= '2' /> : ''}
                            <Grid.Column width={isBrowser ? 12 : 16}>
                                <Container textAlign='justified'>
                                    <Segment>
                                        <Label ribbon style={{ padding: '0.5em 1em'}}>
                                            General
                                        </Label>
                                        <Markdown children={this.props.general} style={markdownStyle}/>
                                    </Segment>
                                    <Segment id = "ui">
                                        <Label ribbon style={{ backgroundColor: '#ffc375'}}>
                                            HoloRepository UI
                                        </Label>
                                        <Markdown children={this.props.ui} style={markdownStyle }/>
                                    </Segment>
                                    <Segment id = "pipeline">
                                        <Label ribbon style={{ backgroundColor: '#a9dc7f'}}>
                                            HoloPipelines
                                        </Label>
                                        <Markdown children={this.props.pipeline} style={markdownStyle}/>
                                    </Segment>
                                    <Segment id = "accessor">
                                        <Label ribbon style={{ backgroundColor: '#8bbfe7'}}>
                                            HoloStorage and Accessor
                                        </Label>
                                        <Markdown children={this.props.accessor} style={markdownStyle}/>
                                    </Segment>
                                    <Segment id = "hololens">
                                        <Label ribbon style={{ backgroundColor: '#d1bcd2'}}>
                                            HoloLens App and StorageConnector
                                        </Label>
                                        <Markdown children={this.props.hololens} style={markdownStyle}/>
                                        <Markdown children={this.props.connector} style={markdownStyle}/>
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
                            </Grid.Column>
                            {isBrowser || isTablet  ? <Grid.Column width= '2' /> : ''}
                        </Grid.Row>
                    </Grid>
                </Segment>
                <SharedFooter/>
            </div>
        );
    }

    componentDidMount() {
        if (this.props.location.state !== undefined) {
            let anchorElement = document.getElementById(this.props.location.state.element);
            if(anchorElement) {
                if(this.props.location.state.element === "title"){
                    window.scrollTo(0, 0);
                }else{
                    window.scrollTo(0, anchorElement.offsetTop + 150);
                }
            }
        }
    }
}

export default IntroPage;
