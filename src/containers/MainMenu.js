import React, { Component } from 'react'
import { Drawer, Menu, MenuItem } from 'material-ui'
import * as apiActions from '../actions/api'
import * as menuActions from '../actions/menu'
import { connect } from 'react-redux'
import { CATEGORY_ALL, CATEGORIES } from '../constants/ApiCategory'

class MainMenu extends Component {
  componentDidMount() {
    this.handleOnMenuItemSelect(CATEGORY_ALL)
  }

  handleOnMenuItemSelect(category) {
    const { selectedType, fetchBookmarks } = this.props
    fetchBookmarks({ type: selectedType, category: category })
  }

  render() {
    const { selectedCategory, toggleMenu } = this.props

    let items = Object.keys(CATEGORIES).map(key => {
      return (
        <MenuItem
          key={key}
          checked={key === selectedCategory}
          onTouchTap={() => this.handleOnMenuItemSelect(key)}
          >
          {CATEGORIES[key].name}
        </MenuItem>
      )
    })

    return (
      <Drawer
        open={this.props.open}
        docked={false}
        onRequestChange={(open) => toggleMenu()}
        >
        <Menu>{items}</Menu>
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.menu.open,
    selectedType: state.bookmarks.type,
    selectedCategory: state.bookmarks.category
  }
}

MainMenu = connect(
  mapStateToProps,
  Object.assign({}, menuActions, apiActions)
)(MainMenu)

export default MainMenu
