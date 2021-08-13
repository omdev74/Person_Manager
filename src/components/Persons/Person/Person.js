
import React from 'react';
import classes from './Person.module.css'

const person = (props)=>{
    return (
       
        <div className={classes.Person}>
        <p onClick={props.click}>I'm {props.name}! I am {props.age} yers Old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
};
export default person;