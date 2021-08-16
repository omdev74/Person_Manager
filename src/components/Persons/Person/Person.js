import Aux from '../../../hoc/Auxiliary';
import React ,{Component}from 'react';
import withClass from "../../../hoc/withClass";
import classes from './Person.module.css'
import PropTypes from "prop-types"
import AuthContext from '../../../context/auth-context';

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef=React.createRef();
    }
    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();

    }
    render(){
        console.log('[Person.js] renderring...')
        return (
            <Aux>
            {/* <div className={classes.Person}> */}
            <AuthContext.Consumer>
                {(context)=>
                    context.authenticated ? <p>Authenticated!!</p> : <p>Please Log in!!!</p>
                }
            </AuthContext.Consumer>
            
            <p onClick={this.props.click}>I'm {this.props.name}! I am {this.props.age} yers Old</p>
            <p>{this.props.children}</p>
            <input
            //ref method:1
            // ref={(inputEl)=>{this.inputElement=inputEl}} 

            //ref method:2 react@16.3
            ref={this.inputElementRef}
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name}
            key="i3"></input>
            {/* // </div> */}
            </Aux>
            );
    }
}

Person.propTypes= {
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
}
export default withClass(Person,classes.Person);