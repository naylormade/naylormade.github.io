import React, { Component } from 'react';
import { Typography } from '@rmwc/typography';
import {
    Card,
    CardPrimaryAction,
    CardMedia,
    CardActionButton,
    CardActionIcon,
    CardActions,
    CardActionButtons,
    CardActionIcons
  } from '@rmwc/card';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }
    

    render() {
        return(
            <div>
                <h1>Projects Page</h1>
            </div>
        )
    }
}


  
  

export default Projects;