import React, { Component } from 'react'

class TabPanel extends Component {
  render() {
    const { id, children } = this.props

    return (
      <section className="mdl-layout__tab-panel is-active" id={id}>
        <div className="page-content">{children}</div>
      </section>
    )
  }
}

export default TabPanel
