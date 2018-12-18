import React from 'react'
import { Link } from "react-router-dom"

import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import classNames from "classnames"

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

const HeaderComponent = ({
  classes,
  userId,
  userName,
  albumId,
  albumTitle
 }) => {
  const headerClassName = classNames({
    [classes.headerStyle]: true
  })

  const linkClassName = classNames({
    [classes.linkStyle]: true
  })

  const renderAlbumBreadCrumb = () => {
    if (!albumTitle || !albumId) return null
    return <>
      <i className="fas fa-angle-right"></i>
      <Link className={linkClassName} to={`/user/${userId}/album/${albumId}`}>{` ${albumTitle}`}</Link>
    </>
  }

  const renderUserBreadCrumb = () => {
    if (!userName || !userId) return null
    return <>
      <i className="fas fa-angle-right"></i>
      <Link className={linkClassName} to={`/user/${userId}`}>{` ${userName}`}</Link>
      {(() => {
        return renderAlbumBreadCrumb()
      })()}
    </>
  }

  return <div className={headerClassName}>
    <Link className={linkClassName} to="/"><i className="fas fa-camera-retro"></i>{" PaoPhotos"}</Link>
    {(() => {
      return renderUserBreadCrumb()
    })()}
  </div>
}

export const Header = injectSheet({
  headerStyle,
  linkStyle
})(HeaderComponent)
