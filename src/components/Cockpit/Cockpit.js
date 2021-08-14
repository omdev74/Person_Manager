import React ,{useEffect}from "react";
import classes from "./Cockpit.module.css"

const Cockpit =(props)=>{
    
  //(empty array input[])it will run when comp is rendered & unmount 
  useEffect(() => {
      console.log("[Cockpit.js] useEffect")
      const timer = setTimeout(() => {
        alert("Data Saved")
        
      }, 1000);
      return ()=>{
        //this code runs on unmount
        clearTimeout(timer);
        console.log("[Cockpit.js] clean up work ")
      }
    },[]);
  
    //(no input)it will run for every update cycle  
  useEffect(() => {
      console.log("[Cockpit.js] 2nd useEffect")
      return () => {
        console.log("[Cockpit.js] 2nd useEffect clean up work ")
      }
    });
    //css logic------------------------------------------
    const assignedClasses = []//initially none

    let btnClasses="";
    if(props.showPersons){
        btnClasses=classes.Red;
    }
    
      if(props.personsLenght <=2){
        assignedClasses.push(classes.red)//only red
      }
      if(props.personsLenght <=1){
        assignedClasses.push(classes.bold)//red and bold
      }
      // --------------------------------------------------------
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
 export default React.memo(Cockpit);