import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';


class App extends Component {
  state = {
    persons: [
      {id: "1", name: "Mariam", age: 24},
      {id: "2", name: "Mohamed", age: 28},
      {id: "3", name: "Omar", age: 23}
    ],
    showPersons: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(
      {persons: persons}
      );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const personsList = [...this.state.persons];
    personsList.splice(personIndex, 1);
    this.setState({persons: personsList});
  }
constructor(props){
  super(props);
}
  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8x',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
            <Persons  
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}/>
        </div>
      );
      style.backgroundColor = 'red';
    }

    const assignedClass = [];
    if(this.state.persons.length <= 2){
        assignedClass.push(classes.Red);
    }
    if(this.state.persons.length <= 1){
        assignedClass.push(classes.Bold);
    }
  return (
    <div className={classes.App}>
      <h1>Hello, I'm REACT App</h1>
      <p className={assignedClass.join(' ')}>This is really working!!</p>
      <button style={style}
      onClick={this.togglePersonHandler}>Toggle Persons</button>
      {persons}
    </div>
  );}
}

export default App;
