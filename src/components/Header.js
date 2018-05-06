import React, { Component } from 'react'

import { RootConsumer } from "../RootContext";

class Header extends Component {
    render() {
        return (
          <RootConsumer>
            {rootContext => (
              <div>{rootContext.pageTitle}</div>
            )}
          </RootConsumer>
        )
    }
}

export default Header