import React, { Component } from "react";
import "./Footer.css";
import {Image} from "semantic-ui-react";

class SharedFooter extends Component {
    render() {
        return (
            <footer>
                <Image src= "Images/logos.png" style={{
                    width: '814px',
                    height: '58.5px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '2em'}}/>
                <div>Copyright (C) 2019 University College London</div>
                <div>
                    Read our{" "}
                    <a href="https://github.com/nbckr/HoloRepository-Core">Source Code</a> and{" "}
                    <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">Licence</a>
                </div>
                <div>
                    Pictures used is this project are from {" "}
                    <a href="https://www.bctechnology.com/news/2017/11/2/Microsoft-Vancouver-Partners-With-BCIT-to-Develop-Virtual-Reality--Augmented-Reality--Mixed-Reality-Curriculum.cfm">here</a> {", "}
                    if we violate your rights please contact us and we will delete it
                </div>
            </footer>
        );
    }
}

export default SharedFooter;
