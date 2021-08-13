import React ,{Component}from 'react';
import Person from './Person/Person';

class Persons extends Component{
  // part of create and update life cycle as here is no state so not recommended 
  // though it will not give an error

  // static getDerivedStateFromProps(props,state){
  //   console.log('[Persons.js] getDerivedStateFromProps')
  // }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] shouldComponentUpdate')
    return true;
    //generally not hard coded it is conditional
  }
  getSnapshotBeforeUpdate(prevProps,prepState){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return {message: "SnapShot"};//snapshot value
    //this is datapackage used to store various things like scrolling position 
    // and passed on to omponentDidUpdate
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot)
  }
  render(){
    console.log('[Persons.js] renderring...')
    
  
  return this.props.persons.map((person,index)=>{
            return (
            <Person
            click={()=>{this.props.clicked(index)}} 
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>{this.props.changed(event,person.id);}}
            />
            );
           });
  }
}

export default Persons;
