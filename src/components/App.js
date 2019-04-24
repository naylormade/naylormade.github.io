import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  //ToolbarMenuIcon,
  ToolbarIcon
} from '@rmwc/toolbar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Toolbar>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarTitle>
                <Link className="toolbar" to="/">Home</Link>
              </ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection alignEnd>
              <ToolbarTitle>
                <Link className="toolbar" to="/about">About Me</Link>
              </ToolbarTitle>
              <ToolbarTitle>
                <Link className="toolbar" to="/resume">Resume</Link>
              </ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        
      <Main className="root"/>


      

      </React.Fragment>
    )
  }
}

export default App;
