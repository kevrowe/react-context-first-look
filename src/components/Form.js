import React, { Component } from 'react'

import { RootConsumer } from "../RootContext";

class Form extends Component {
  _onKeyDown(addTodo, event) {
    const val = event.target.value
    if (event.keyCode === 13 && val && val.trim() !== '') {
      addTodo(val.trim())
      event.target.value = ''
    }
  }
  render() {
    return (
      <RootConsumer>
        {context => (
          <input type="text" onKeyDown={this._onKeyDown.bind(this, context.addTodo)} placeholder="Add todo..." />
        )}
      </RootConsumer>
    )
  }
}

export default Form