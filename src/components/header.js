import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom'

import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import classNames from "classnames"
import { getCurrentUserName } from '../selectors/users'
import { getHeaderTitle } from "../selectors/header"
import { getCurrentAlbumTitle } from "../selectors/albums"

const height = 107

const headerStyle = {
  top: 0,
  left: 0,
  width: "100%",
  height,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#331287",
  color: "white"
  // textShadow: "4px 3px 0 #000"
}

const linkStyle = {
  textDecoration: 'none',
  display: 'block',
  padding: '.5em',
  color: 'white',
  '&:hover': {
    background: "#00bfb3",
  }
}

const HeaderComponent = ({ classes, headerTitle, userName }) => {
  const className = classNames({
    [classes.headerStyle]: true
  })

  const linkClassName = classNames({
    [classes.linkStyle]: true
  })

  return <div className={className}>
    <Link className={linkClassName} to="/"><i className="fas fa-camera-retro"></i></Link>
    <i className="fas fa-angle-right"></i>
    <Link className={linkClassName} to="/">{" Photographers"}</Link>
    <i className="fas fa-angle-right"></i>
    <Link className={linkClassName} to="/">{userName}</Link>
  </div>
}

const mapStateToProps = (state, props) => {
  return {
    headerTitle: getHeaderTitle(state, props),
    userName: getCurrentUserName(state, props)
    // albumName: getAlbumName(state, props)
  }
}

export const Header = withRouter(injectSheet({
  headerStyle,
  linkStyle
})(connect(mapStateToProps)(HeaderComponent)))
