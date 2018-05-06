import React from 'react'

const Context = React.createContext()

export class RootProvider extends React.Component {
  state = {
    todos: [],
    addTodo: (todo) => {
      this.setState({
        todos: [...this.state.todos, { text: todo, done: false }]
      })
    },
    markAsDone: (i) => {
      const newTodos = this.state.todos
      newTodos[i].done = !newTodos[i].done

      this.setState({
        todos: newTodos
      })
    }
  }
  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export class RootConsumer extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {this.props.children}
      </Context.Consumer>
    )
  }
}