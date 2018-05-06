import React, { Component } from 'react'

import { RootConsumer } from "../RootContext";

class List extends Component {
  _renderTodo(context, item, index) {
    return (
      <li
        key={item.text + String(index)}
        onClick={context.markAsDone.bind(this, index)}
        className={item.done ? 'done' : ''}
      >{item.text}</li>
    )
  }
  render() {
    return (
      <RootConsumer>
        {context => {
          if (context.todos.length === 0) {
            return (<h2>Apparently you're smashing it <span role="img" aria-label="Flexing bicep">💪🏻</span></h2>)
          }
          return (
            <ul>
              {context.todos.map(this._renderTodo.bind(this, context))}
            </ul>
          )
        }}
      </RootConsumer>
    )
  }
}

export default List