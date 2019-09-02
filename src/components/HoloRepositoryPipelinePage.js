import React, { Component } from 'react';
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import "./FontStyle.css";
import BackgroundImage from "../images/intro.jpg";
import {Header, Segment, Container, Label, Grid, Button, Icon} from "semantic-ui-react";
import StickyBox from "react-sticky-box";
import Markdown from 'markdown-to-jsx';
import {isBrowser, isTablet} from "react-device-detect";
import {Link} from "react-router-dom";

const markdownStyle = {
    padding: isBrowser || isTablet  ? '0.5em 2em':'0.5em 0.5em',
    fontSize: isBrowser || isTablet  ? '1.1em':'0.8em',
    fontWeight: 'normal'
};

class HoloRepositoryPipelinePage extends Component {
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
                            content='HoloPipelines'
                            style={{fontSize: isBrowser ? '4em':'3em', fontWeight: 'normal', marginTop: 75, color: '#ffffff'}}/>
                    </Segment>
                </div>

                <Segment style={{ marginTop: 0, backgroundColor: '#f8f8f8'}}>
                    <Grid>
                        <Grid.Row>
                            {isBrowser ? <Grid.Column width= '2' align='middle'>
                                <StickyBox offsetTop={70} >
                                    <Button as={Link} to={{ pathname : '/intro/ui'}} style={{ marginTop: 10}} >
                                        <Icon name = "left arrow"/>
                                    </Button>
                                </StickyBox>
                            </Grid.Column>: ''}
                            <Grid.Column width={isBrowser ? 12 : 16}>
                                <Container textAlign='justified'>
                                    <Segment id = "pipeline">
                                        <Label ribbon style={{ backgroundColor: '#a9dc7f'}}>
                                            HoloPipelines
                                        </Label>
                                        <Markdown children={this.props.pipeline} style={markdownStyle}/>
                                    </Segment>
                                </Container>
                            </Grid.Column>
                            {isBrowser || isTablet  ? <Grid.Column width= '2' align='middle'>
                                <StickyBox offsetTop={70} >
                                    <Button as={Link} to={{ pathname : '/intro/accessor'}} style={{ marginTop: 10}} >
                                        <Icon name = "right arrow"/>
                                    </Button>
                                </StickyBox>
                            </Grid.Column> : ''}
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

export default HoloRepositoryPipelinePage;
