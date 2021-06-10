import React, {Component} from 'react';

class AboutMe extends Component{
    render(){
        return(
            <div className = "aboutme-page">
            <img
            src= {require('./cv.png')}
            alt="cv"
            className="avatar-img-center"
            />
            <p className="aboutme-paragraph"> Passionate IT graduate with a strong interest in projects that require both conceptual and analytical thinking. 
            Knowledge in JavaScript, React, Typescript, 
            HTML, CSS, Node, Express, Firebase, MongoDB, Python, 
            Linux, Docker, CI/CD, GIT. Looking for a Web Developer | Software Developer position. </p>
            </div>
        )
    }
}

export default AboutMe; 