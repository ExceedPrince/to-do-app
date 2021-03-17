import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

const defaultColors = () => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
    dashName: "Untilted dashboard",
    todos: [
/*       {
        id: 1,
        title: "Menj boltba",
        desc: "Vegyél chips-et",
        editable: false
      },
      {
        id: 2,
        title: "Csinálj házimunkát",
        desc: "Főzz, moss, takaríts",
        editable: false
      },
      {
        id: 3,
        title: "Szerezz jó jegyeket",
        desc: "Matek, töri, angol",
        editable: false
      } */
    ],
    newCardDiv: false 
  }
}


setDashName = (name) => {
  this.setState ({ dashName: name });
}

 createEditable = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
    if (todo.id === id) {
      todo.editable = true
      }
      return todo;
     }) });
  }

  deleteCard = (id) => {
    this.setState ({ todos: [...this.state.todos.filter (todo => todo.id !== id)] });
  }

  addTodo = (title, desc) => {
    let randID = Math.floor(10*Math.random()) + Math.floor(1000*Math.random());
    const newTodo = { 
      id: randID,
      title: title,
      desc: desc,
      editable: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
    this.setState ({ newCardDiv: false });
  }

  updateTodo = (id, title, desc) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = title;
        todo.desc = desc;
        todo.editable = false
        }
        return todo;
       }) });
  }

  duplicateCard = (id) => {
    let oldCardObj= (this.state.todos.filter(todo => todo.id === id))[0];
    let randID = Math.floor(10*Math.random()) + Math.floor(1000*Math.random());
    const newCardObj = {
      id: randID,
      title: oldCardObj.title,
      desc: oldCardObj.desc,
      editable: false
    };
    this.setState({ todos: [...this.state.todos, newCardObj] });
  }

  showNewCard = () => {
    this.setState ({ newCardDiv: true });
  };

  defaultColors = defaultColors();

  mainId = this.props.unique;


  render () {

    return (
      <>

        <Dashboard info={this.state.todos}
                    newCardDiv={this.state.newCardDiv}
                    showNewCard={this.showNewCard}
                    actualDashName={this.state.dashName}
                    setDashName={this.setDashName}
                    deleteCard={this.deleteCard}
                    duplicateCard={this.duplicateCard}
                    createEditable={this.createEditable}
                    addTodo={this.addTodo}
                    updateTodo={this.updateTodo}
                    defaultColors={this.defaultColors}
                    id={this.mainId}
                    />

      </>
    );
  }
}

export default App;