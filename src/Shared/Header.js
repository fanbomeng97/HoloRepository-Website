import React, { Component } from "react";
import {
    Icon,
    Image,
    Menu,
    Segment,
    Sticky
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Niels from "../images/header.jpg";

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
            <Sticky>
                <div>
                    <Menu pointing secondary size='huge' style={{backgroundColor: "#ffffff"}}>
                        <Menu.Item style={{ padding: '1em 2em'}}>
                            <Image src="Images/logo_with_title.png" style={{width: '188.4px', height: '34.05px'}}/>
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
                            active={activeItem === 'github'}
                            onClick={this.handleItemClick}
                            as={Link} to="/github"
                        >
                            <Icon name = "github"/>
                            {"GitHub"}
                        </Menu.Item>
                    </Menu>
                </div>
            </Sticky>
        );
    }

    componentWillMount() {
        const data = require('../data/Information.json');
        console.log(data);
    }
}

export default SharedHeader;
