import React , { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render () {
        return (
            <Grid>
                <Cell col={4}> 
                    <p>{this.props.startYear}-{this.props.endYear}</p>
                 
                </Cell>
                <Cell col={8}>
                    <p style= {{fontSize: 'large'}}>{this.props.degreeEducation}</p>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p style ={{fontSize: 'large', margin: 'auto'}}>{this.props.schoolDescription}</p> 
                </Cell>    
                
            </Grid>
      
        )
    }
}

export default Education;