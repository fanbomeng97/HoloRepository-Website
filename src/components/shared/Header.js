import React, { Component } from "react";
import {
    Icon,
    Image,
    Menu,
    Container
} from "semantic-ui-react";
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
                        <Menu.Item as={Link} to="/home" style={{ padding: '1em 2em'}}>
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

                    <Menu.Item
                        name='Introduction'
                        active={activeItem === 'Introduction'}
                        onClick={this.handleItemClick}
                        as={Link} to="/intro"
                    >
                        <Icon name = "list ul"/>
                        {isBrowser || isTablet ? "Introduction" : ""}
                    </Menu.Item>

                    <Menu.Item
                        name='Team'
                        active={activeItem === 'Team'}
                        onClick={this.handleItemClick}
                        as={Link} to="/Team"
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
