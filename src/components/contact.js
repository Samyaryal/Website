import React, {Component} from 'react';
import  {Grid, Cell, List, ListItem, ListItemContent   } from 'react-mdl';
import './cv.png';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                       <h2>Samikshya Aryal</h2>
                       <img
                         src={require('./cv.png')}
                         alt= "avatar"
                         style={{height:'330px',width:'330px' ,'border-radius':'100%'}}
                       />
                       <p style={{ width: '75%', margin: 'auto', paddingTop: '1em',}}>Contact me, if you have something to offer. I would love to explore the new challenges. </p>
                    </Cell>   
                    <Cell col={6}>
                        <h2>Let's stay in touch!</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Raleway'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +358-451752772
                                    </ListItemContent>
                                </ListItem>

                                
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Raleway'}}>
                                    <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        samikshyaryal5@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily:'Raleway'}}>
                                    <i className="fa fa-github-square" aria-hidden="true"/><a href="https://github.com/Samyaryal" rel="noopener noreferrer" target="_blank">
                                    Github</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily:'Raleway'}}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/><a href="https://www.linkedin.com/in/samikshyaaryal/>" rel="noopener noreferrer" target="_blank">
                                    LinkedIn</a>
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>
                        </div>   
                    </Cell>
                </Grid>
                <div className="footer"> © Created by Samikshya.
                </div>
            </div>
        )
    }
}

export default Contact; 