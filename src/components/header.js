import React from 'react'
import { Link } from "react-router-dom"

import injectSheet from "react-jss"
import PropTypes from 'prop-types'
import classNames from "classnames"

import { getHomePath, getUserPath, getAlbumPath } from '../config/paths'

// Styles
import { linkStyle } from "../styles/link"
import {
  backgroundColor,
  foregroundColor
} from "../styles/color"

const height = 107

const headerStyle = {
  top: 0,
  left: 0,
  width: "100%",
  height,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor,
  color: foregroundColor,
  fontFamily: "'Palanquin', sans-serif"
}


const HeaderComponent = ({
  classes,
  userId,
  userName,
  albumId,
  albumTitle
 }) => {

  const renderAlbumBreadCrumb = () => {
    if (!albumTitle || !albumId) return null
    return <>
      <i className="fas fa-angle-right"></i>
      <Link className={classes.linkStyle} to={getAlbumPath(userId, albumId)}>{` ${albumTitle}`}</Link>
    </>
  }

  const renderUserBreadCrumb = () => {
    if (!userName || !userId) return null
    return <>
      <i className="fas fa-angle-right"></i>
      <Link className={classes.linkStyle} to={getUserPath(userId)}>{` ${userName}`}</Link>
      {(() => {
        return renderAlbumBreadCrumb()
      })()}
    </>
  }

  return <div className={classes.headerStyle}>
    <Link className={classes.linkStyle} to={getHomePath()}><i className="fas fa-camera-retro"></i>{" PaoPhotos"}</Link>
    {(() => {
      return renderUserBreadCrumb()
    })()}
  </div>
}

export const Header = injectSheet({
  headerStyle,
  linkStyle
})(HeaderComponent)
