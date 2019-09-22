import React from 'react';

const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8x',
    cursor: 'pointer'
  }

const cockpit = (props) => {
    const classes = [];
    if(props.persons.length <= 2){
      classes.push('Red');
    }
    if(props.persons.length <= 1){
      classes.push('Bold');
    }

    return (
        <div>
            <h1>Hello, I'm REACT App</h1>
            <p className={classes.join(' ')}>This is really working!!</p>
            <button style={style}
                onClick={this.togglePersonHandler}>Toggle Persons</button>
        </div>
    );
};