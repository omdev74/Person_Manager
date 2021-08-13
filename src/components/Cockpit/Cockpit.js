import React from "react";
import classes from "./Cockpit.module.css"

const cockpit =(props)=>{
    // useEffect(() => {
    //   effect
    //   return () => {
    //     cleanup
    //   }
    // }, [input])
    useEffect(() => {
      console.log("[Cockpit.js] useEffect")
    });

    const assignedClasses = []//initially none

    let btnClasses="";
    if(props.showPersons){
        btnClasses=classes.Red;
    }
    
      if(props.persons.length <=2){
        assignedClasses.push(classes.red)//only red
      }
      if(props.persons.length <=1){
        assignedClasses.push(classes.bold)//red and bold
      }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button 
            className = {btnClasses}
            onClick={props.clicked}>
                Toggle Persons
            </button >
        </div>);
    
 }
 export default cockpit;