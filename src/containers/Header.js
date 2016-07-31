import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/api'
import Tab from '../components/Tab'

class Header extends Component {
  componentDidMount() {
    this.props.fetchBookmarks()
  }

  render() {
    const { title, tabs, fetchBookmarks } = this.props

    let nodes = tabs.map(tab => {
      return (
        <Tab
          key={tab.id}
          id={tab.id}
          caption={tab.caption}
          active={tab.active}
          onClick={fetchBookmarks}
        />
      )
    })

    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{title}</span>
        </div>
        <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
          {nodes}
        </div>
      </header>
    )
  }
}

Header = connect(
  null,
  actionCreators
)(Header)

export default Header
