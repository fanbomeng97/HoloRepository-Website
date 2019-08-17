import React, { Component } from "react";
import {
    Icon,
    Image,
    Menu,
    Container
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Header.css";

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
            <Menu fixed='top' id = "menu" pointing secondary size='huge'>
                <Container >
                    <Menu.Item as={Link} to="/home" style={{ padding: '1em 2em'}}>
                        <Image src="Images/logo_with_title.png" size = "small"/>
                    </Menu.Item>

                    <Menu.Item
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={this.handleItemClick}
                        as={Link} to="/home"
                    >
                        <Icon name = "home"/>
                        {"Home"}
                    </Menu.Item>

                    <Menu.Item
                        name='Introduction'
                        active={activeItem === 'Introduction'}
                        onClick={this.handleItemClick}
                        as={Link} to="/intro"
                    >
                        <Icon name = "list ul"/>
                        {"Introduction"}
                    </Menu.Item>

                    <Menu.Item
                        name='Group members'
                        active={activeItem === 'Group members'}
                        onClick={this.handleItemClick}
                        as={Link} to="/groupmember"
                    >
                        <Icon name = "users"/>
                        {"Group Members"}
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
                        {"GitHub"}
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}

export default SharedHeader;
