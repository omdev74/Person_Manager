import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';



class App extends Component {
  state = {
    persons: [
      { id:"sadsad",name: 'Max', age: 28 },
      { id:"sadsdsa",name: 'Manu', age: 29 },
      { id:"asdasd",name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex)=>{
    //Dont use below one because it is bad practice to get indirect acces to the obj managed by state
    // const persons = this.state.persons;

    //istead use
    // const persons = this.state.persons.slice();
    //or
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
    
  };
  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPersons
    this.setState({showPersons:!doesShow});
  }

  render() {
  
    let persons = null;
    const btnClasses = [classes.Button];
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index)=>
          {
            return <ErrorBoundary key={person.id}>
            <Person
            click={()=>{this.deletePersonHandler(index)}} 
            name={person.name}
            age={person.age}
            
            changed={(event)=>{this.nameChangedHandler(event,person.id);}}
            />
            </ErrorBoundary>
            
          })}
        
        </div>
      )
      // style.backgroundColor="red";
      // style[":hover"]={
      //   backgroundColor:"salmon",
      //   color:"black"
      // }
      btnClasses.push(classes.Red);
      
    }
    const assignedClasses = []//initially none
      if(this.state.persons.length <=2){
        assignedClasses.push(classes.red)//only red
      }
      if(this.state.persons.length <=1){
        assignedClasses.push(classes.bold)//red and bold
      }
    return (
      
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        {/* way of passing this method is not efficent use line 42 */}
        <button className = {btnClasses.join(" ")}onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button >
        {persons}
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
