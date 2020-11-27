import './App.css';
import React, {Component} from 'react';
import Todos from './components/Todos';

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

  render() {
    
    return(
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }

}

export default App;
