import React from "react"
import injectSheet from 'react-jss'
import classNames from "classnames"

import { Link } from "react-router-dom"

import { getUserPath } from "../config/paths"

const linkStyle = {
  textDecoration: 'none',
  display: 'block',
  padding: '.5em',
  color: 'white',
  '&:hover': {
    background: "#00bfb3",
  }
}

export function UserItemComponent({ classes, user }) {
  const { id, name } = user

  const className = classNames({
    [classes.linkStyle]: true
  })

  return <Link className={className} to={getUserPath(id)}>{name}</Link>
}

export const UserItem = injectSheet({
  linkStyle
})(UserItemComponent)