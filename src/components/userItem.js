import React from "react"
import injectSheet from "react-jss"
import classNames from "classnames"

import { getUserPath } from "../config/paths"

// Components
import { Link } from "react-router-dom"

import { linkStyle } from "../styles/link"

export function UserItemComponent({ classes, user }) {
  const { id, name } = user
  return <Link className={classes.linkStyle} to={getUserPath(id)}>{name}</Link>
}

export const UserItem = injectSheet({
  linkStyle
})(UserItemComponent)