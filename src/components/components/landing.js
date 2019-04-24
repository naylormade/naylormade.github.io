import React, { Component } from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import { TabBar, Tab } from '@rmwc/tabs';
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



class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
        
    }

    toggleCategories() {
        {/*JavaScript tab*/}
        if (this.state.activeTab === 0) {
            return(
                <Card style={{ width: '21rem' }}>
                    <CardPrimaryAction>
                        <CardMedia
                            sixteenByNine
                            style={{backgroundImage:'url(https://material-components-web.appspot.com/images/16-9.jpg)'
                            }}
                        />
                        <div style={{ padding: '0 1rem 1rem 1rem' }}>
                            <Typography use="headline6" tag="h2">
                                Collektables
                            </Typography>
                            
                            <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
                                Built with Express.js.
                            </Typography>
                        </div>
                    </CardPrimaryAction>
                    <CardActions>
                        <CardActionButtons>
                            <CardActionButton>Read</CardActionButton>
                            <CardActionButton>Bookmark</CardActionButton>
                        </CardActionButtons>
                        <CardActionIcons>
                            <CardActionIcon
                                onIcon="favorite"
                                icon="favorite_border"
                            />
                            <CardActionIcon icon="share" />
                            <CardActionIcon icon="more_vert" />
                        </CardActionIcons>
                    </CardActions>
                </Card>
            )
        {/*Python tab*/}
        } else if (this.state.activeTab === 1) {
            return (
                <Card style={{ width: '21rem' }}>
                    <CardPrimaryAction>
                        <CardMedia
                            sixteenByNine
                            style={{backgroundImage:'url(https://material-components-web.appspot.com/images/16-9.jpg)'
                            }}
                        />
                        <div style={{ padding: '0 1rem 1rem 1rem' }}>
                            <Typography use="headline6" tag="h2">
                                Python
                            </Typography>
                            
                            <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
                                
                            </Typography>
                        </div>
                    </CardPrimaryAction>
                    <CardActions>
                        <CardActionButtons>
                            <CardActionButton>Read</CardActionButton>
                            <CardActionButton>Bookmark</CardActionButton>
                        </CardActionButtons>
                        <CardActionIcons>
                            <CardActionIcon
                                onIcon="favorite"
                                icon="favorite_border"
                            />
                            <CardActionIcon icon="share" />
                            <CardActionIcon icon="more_vert" />
                        </CardActionIcons>
                    </CardActions>
                </Card>
            )
        }
            
    }

    render() {
        return(
            <div>
                <Grid className="landing-grid main-body">
                    <GridCell span={12}>
                        <div className="banner-text">
                            <Typography use="caption">Under Construction :)</Typography>

                            <br />

                            <Typography use="headline1">Daniel Naylor</Typography>

                            <hr />

                            {/*
                            <Typography use="overline" className="banner-text languages" >
                                 JavaScript | Python | React |  Node.js | MongoDB | Express | Docker
                                 | SQL
                            </Typography>
                            */}
                            <br />
                            <br />

                            <TabBar
                                activeTabIndex={this.state.activeTab}
                                onActivate={evt => this.setState({
                                        activeTab: evt.detail.index
                                    })
                                }
                                
                            >
                                <Tab>JavaScript</Tab>
                                <Tab>Python</Tab>
                            </TabBar>

                            <br /><br />
                            <section className="project-grid"> 
                                {this.toggleCategories()}
                            </section>

                            <br /><br />
                            {/* social media icons */}
                            <div className="social-links">
                                <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"  aria-hidden="true" />
                                </a>
                            </div>
                            
                            <div className="social-links">
                                <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-home" aria-hidden="true"></i>
                                </a>
                            </div>
                            
                            <div className="social-links">
                                <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-twitter" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="social-links">
                                <a href="http://dnaylah.github.io" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>

                    </GridCell>
                </Grid>
            </div>
        )
    }
}

export default Landing;