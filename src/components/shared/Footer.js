import React, { Component } from "react";
import "./Footer.css";
import {Image} from "semantic-ui-react";

class SharedFooter extends Component {
    render() {
        return (
            <footer>
                <Image src= "Images/logos.png" id = "image"/>
                <div>Copyright (C) 2019 University College London</div>
                <div>
                    Read our{" "}
                    <a href="https://github.com/nbckr/HoloRepository-Core">Source Code</a> and{" "}
                    <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">Licence</a>
                </div>
            </footer>
        );
    }
}

export default SharedFooter;
