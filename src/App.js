import './App.css';
import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
  
  state = {
    todos: [
      {
        id: 1,
        title: "sacar la basura",
        completed: true
      },
      {
        id: 2,
        title: "jugar en la compu",
        completed: false
      },
      {
        id: 3,
        title: "pasear el pero",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
      })
    });
  }

  addTodo = (title) => {
    const newTodo = {};
    this.setState({ 
      todos: [...this.state.todos, newTodo]
     });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter
        (todo => todo.id !== id )]
      });
  }

  render() {
    
    return(
      <div className="App">
        <div className="container" >
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo} />
        </div>
        
      </div>
    );
  }

}

export default App;
