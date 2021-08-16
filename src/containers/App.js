import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from "../hoc/Auxiliary";
import AuthContext from '../context/auth-context';


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
      
      //this will through an error in PropTypes
      // { id:"sadsad",name: 'Max', age: "28" }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit:true,
    changeCounter:0,
    authenticated:false
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

    //not the right method
    // this.setState({persons:persons,changeCounter:this.state.changeCounter+1});

    //Right Way Setting State 
    this.setState((prevState,props)=>{
      return{
        persons:persons,
        changeCounter:prevState.changeCounter+1
      }
    });
    
  };
  

  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPersons
    this.setState({showPersons:!doesShow});
  }
  loginHandeler=()=>{
    this.setState({authenticated:true})
  }

  render() {
    console.log('[App.js] render ')
  
    let persons = null;
    
    if(this.state.showPersons){
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
          />  
    }
    
    return (
      
      <Aux>
        <button 
        onClick={()=>{
          this.setState({showCockpit:false})}
        }>Remove Cockpit</button>
        
        <AuthContext.Provider value={{
          authenticated:this.state.authenticated,
          login:this.loginHandeler
          }}
          >
          {this.state.showCockpit ? 
          (<Cockpit
          title={this.props.appTitle} 
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          />):null}
          {persons}

        </AuthContext.Provider>
        
        </Aux>
      
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App,classes.App);
