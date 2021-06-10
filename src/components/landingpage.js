import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './cv.png';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require('./cv.png')}
              alt="cv"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1 style = {{padding: '.1rem'}}>Web Developer</h1>
              <hr />
              <p>JavaScript | ReactJS | TypeScript | NodeJS | Express | MongoDB | HTML5/CSS3 | BootStrap | MySql </p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/samikshyaaryal/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/Samyaryal" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>


              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;