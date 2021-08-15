import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }
  state = {
    persons: [
      { id:"sadsad",name: 'Max', age: 28 },
      { id:"sadsdsa",name: 'Manu', age: 29 },
      { id:"asdasd",name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit:true
  };
  
  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps ',props);
    return state;

  }
  componentDidMount(){
    console.log('[App.js] componentDidMount ')
  }



  //update lifecycle
  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate ')
    //it would not let the component update
    // return false;

    return true;

  }
  
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[App.js] componentDidUpdate')
  }

  deletePersonHandler = (personIndex)=>{
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
    console.log('[App.js] render ')
  
    let persons = null;
    
    if(this.state.showPersons){
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>  
    }
    
    return (
      
      <WithClass classes={classes.App}>
        <button 
        onClick={()=>{
          this.setState({showCockpit:false})}
        }>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
        title={this.props.appTitle} 
        personsLength={this.state.persons.length}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler}/>:null}

        {persons}
      </WithClass>
      
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
