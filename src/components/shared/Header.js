import React, { Component } from "react";
import {Icon, Image, Menu, Container, Dropdown} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { isBrowser, isTablet } from "react-device-detect";

class SharedHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu fixed='top' style={{ backgroundColor: '#ffffff'}} pointing secondary size='huge'>
                <Container >
                    {isBrowser || isTablet ? (
                        <Menu.Item as={Link} to="/home">
                            <Image src="Images/logo_with_title.png" size = "small"/>
                        </Menu.Item>
                    ) : (
                        ""
                    )}
                    <Menu.Item
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={this.handleItemClick}
                        as={Link} to="/home"
                    >
                        <Icon name = "home"/>
                        {isBrowser || isTablet ? "Home" : ""}
                    </Menu.Item>

                    <Dropdown item text="Introduction" style={{fontSize: '1em', fontWeight: this.state.activeItem === "Introduction"? 'bold' : 'normal'}}>
                        <Dropdown.Menu style={{fontSize: '0.8em', fontWeight: 'normal'}}>
                            <Dropdown.Item name='intro' as={Link} to="/intro"  onClick={this.handleItemClick}>Overview</Dropdown.Item>
                            <Dropdown.Item name='intro' as={Link} to="/intro/ui" onClick={this.handleItemClick}>HoloRepository UI</Dropdown.Item>
                            <Dropdown.Item name='intro' as={Link} to="/intro/pipeline" onClick={this.handleItemClick}>HoloPipeline</Dropdown.Item>
                            <Dropdown.Item name='intro' as={Link} to="/intro/accessor" onClick={this.handleItemClick}>HoloStorage and Accessor</Dropdown.Item>
                            <Dropdown.Item name='intro' as={Link} to="/intro/hololensapp" onClick={this.handleItemClick}>HoloLens App and Storage Connector</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item
                        name='Team'
                        active={activeItem === 'Team'}
                        onClick={this.handleItemClick}
                        as={Link} to="/team"
                    >
                        <Icon name = "users"/>
                        {isBrowser || isTablet ? "Team" : ""}
                    </Menu.Item>

                    <Menu.Item
                        name='github'
                        as='a'
                        active={activeItem === 'github'}
                        onClick={this.handleItemClick}
                        href= "https://github.com/nbckr/HoloRepository-Core"
                        position = 'right'
                    >
                        <Icon name = "github"/>
                        {isBrowser || isTablet ? "GitHub" : ""}
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}

export default SharedHeader;
