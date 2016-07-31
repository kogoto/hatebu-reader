import React, { Component, PropTypes } from 'react'
import TabPanel from '../components/TabPanel'

class Content extends Component {
  render() {
    const { panels } = this.props

    let nodes = panels.map(panel => {
      return (
        <TabPanel key={panel.id} id={panel.id}>{panel.content}</TabPanel>
      )
    })

    return (
      <main className="mdl-layout__content">
        {nodes}
      </main>
    )
  }
}

Content.propTypes = {
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.object.isRequired
    }).isRequired
  ).isRequired
}

export default Content
