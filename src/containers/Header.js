import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppBar, Tabs, Tab } from 'material-ui'
import { TYPES } from '../constants/ApiCategory'
import * as apiActions from '../actions/api'
import * as menuActions from '../actions/menu'

class Header extends Component {
  handleOnTabSelect(type) {
    const { selectedCategory, selectTab, fetchBookmarks } = this.props
    selectTab(type)
    fetchBookmarks(type, selectedCategory)
  }

  render() {
    const { title, toggleMenu } = this.props

    let tabs = Object.keys(TYPES).map(key => {
      return (
        <Tab
          key={key}
          label={TYPES[key].name}
          onActive={() => this.handleOnTabSelect(key)}
          />
      )
    })

    return (
      <header>
        <AppBar
          title={title}
          onLeftIconButtonTouchTap={toggleMenu}
        />
        <Tabs>{tabs}</Tabs>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCategory: state.menu.selectedCategory
  }
}

Header = connect(
  mapStateToProps,
  Object.assign({}, menuActions, apiActions)
)(Header)

export default Header
