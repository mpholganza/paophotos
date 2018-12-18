import React from "react"
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import classNames from "classnames"

import { getPicture } from "../selectors/pictures"

import { Link } from "react-router-dom"
import { getPicturePath } from "../config/paths"

const pictureItemStyle = {
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#00bfb3"
  }
}

const pictureStyle = {
  margin: "10px",
  boxShadow: "3px 3px 8px 0px rgba(0,0,0,0.3)"
}
const descriptionStyle = {
  lineHeight: "1.2em",
  height: "3.5em",
  fontSize: "14px",
  width: "150px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  margin: "10px"
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


export function PictureItemComponent({ classes, picture, userId, albumId }) {
  const pictureClassName = classNames({
    [classes.pictureStyle]: true
  })

  const descriptionClassName = classNames({
    [classes.descriptionStyle]: true
  })

  const pictureItemClassName = classNames({
    [classes.pictureItemStyle]: true
  })
  
  const linkClassName = classNames({
    [classes.linkStyle]: true
  })

  return <Link className={linkClassName} to={getPicturePath(userId, albumId, picture.id)}>
    <img className={pictureClassName} src={picture.thumbnailUrl} width="150" height="150"></img>
    <div className={descriptionClassName}>{picture.title}</div>
  </Link>
}

const mapStateToProps = (state, props) => {
  return {
    picture: getPicture(state, props)
  }
}

export const PictureItem = injectSheet({
  pictureItemStyle,
  pictureStyle,
  descriptionStyle,
  linkStyle
})(connect(mapStateToProps)(PictureItemComponent))
