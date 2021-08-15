import Aux from '../../../hoc/Auxiliary';
import React ,{Component}from 'react';
import classes from './Person.module.css'

class Person extends Component{
    render(){
        console.log('[Person.js] renderring...')
        return (
            <Aux classes={classes.Person}>
            {/* <div className={classes.Person}> */}
            <p onClick={this.props.click}>I'm {this.props.name}! I am {this.props.age} yers Old</p>
            <p>{this.props.children}</p>
            <input 
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name}></input>
            {/* // </div> */}
            </Aux>
        );
    }
}


export default Person;