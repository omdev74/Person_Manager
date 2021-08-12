
import React from 'react';
import classes from './Person.module.css'

const person = (props)=>{
   

    //will Throw an Error------------------------------------------------------------->
    // const rnd = 3;
    // if(rnd >2){
    //     throw new Error("Something Went Wrong!!!!!!!!!!!");
    // }
    //--------------------------------------------------------------------------------->
    return (
       
        <div className={classes.Person}>
        <p onClick={props.click}>I'm {props.name}! I am {props.age} yers Old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
};
export default person;