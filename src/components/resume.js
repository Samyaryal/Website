import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import './cv.png';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={require('./cv.png')}
                                alt= "avatar"
                                style={{height:'300px', width: '350px' }}
                            />
                        </div>
                        <h2 style={{paddingTop: '.1em'}}> Samikshya Aryal</h2>
                        <h4 style={{color: 'black'}}>Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '100%', padding: '.1%'}}/>
                        <h2>Skills</h2>   
                            <Skills 
                                
                                skill="JavaScript"
                                progress={70}
                                />   
                                <Skills 
                                    skill="ReactJS"
                                    progress={70}
                                    /> 
                                    <Skills
                                        skill = "TypeScript"
                                        progress = {70}
                                        />
                                        <Skills
                                            skill = "Docker"
                                            progress = {70}
                                            />
                                    <Skills 
                                        skill="NodeJS"
                                        progress={60}
                                        />
                                        <Skills 
                                            skill="ExpressJS"
                                            progress={60}
                                            />

                                            <Skills 
                                                skill="HTML5/CSS3"
                                                progress={75}
                                                /> 
                                                <Skills
                                                    skill = "Firebase"
                                                    progress = {75}
                                                    />
                    </Cell>
                    <Cell className="resume-right-col"col={8}>
                        <h2>Education</h2>
                            <Education 
                                degreeEducation = "Bachelor's of Engineering in Information Technology"
                                schoolName = "Turku University of Applied Sciences, Turku, Finland"
                                startYear= {<p style ={{fontSize: 'large'}}> {2015} </p>}
                                endYear = {<p style ={{fontSize: 'large'}}>{2020}</p>}
                            
                                schoolDescription = "Networking ,Web Development, Analysis of OSPF(Capstone Project), Object Oriented Programming"                          
                                />
                            <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>         
                            <Experience
                            jobName= "Internship"
                            startYear = {<p style ={{fontSize: 'large'}}>February  2019 </p>} endYear ={<p style ={{fontSize: 'large'}}>September 2019</p>}
                            jobPlace = "theFirma"
                            jobDescription = "Web Development with MERN stack, Project Analysis for Lunch Marathon Illustrator use, Agile Scrum working method, Use of Trello and Jira, Learning of testing tools like Jenkins."

                                />  
                                <Experience
                                jobName= "Analysis of OSPF"
                                startYear = {<p style ={{fontSize: 'large'}}> ICT Capstone 2019</p>}
                                jobPlace = "TUAS"
                                jobDescription = "Analysis of OSPF (Use of GNS3 Tool to import the config file), 
                                Building and configuring the Router and Switches according to the project topology,
                                Observing the traffic and concluding the basic analysis
                                Troubleshooting"
    
                                />
                                <Experience
                                jobName= "Home Projects"
                                startYear = {<p style ={{fontSize: 'large'}}> Continuos learning from Home Projects</p>}
                                jobDescription = "Learning from doing home projects using the technologies like ReactJS, TypeScript, Docker, etc... "
    
                                />
                                <hr style={{borderTop: '3px solid #e22947'}} /> 
                                <Experience
                                jobName= "Microsoft Technical Associate (MTA)"
                                startYear = {<p style ={{fontSize: 'large'}}> Certifications</p>}
                                jobPlace = "MTA"
                                jobDescription = "Microsoft Technology Associate: Database Administration Fundamentals (MTA), 
                                Microsoft Technology Associate: Software Development Fundamentals (MTA)"
    
                                /> 
                                <hr style={{borderTop: '3px solid #e22947'}} />  
                        

                    </Cell>

                </Grid>
                <div className="footer"> © Created by Samikshya.
                </div>
            </div>
            
        )
    }
}

export default Resume; 

