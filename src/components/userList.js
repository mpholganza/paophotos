import React from "react"
import injectSheet from 'react-jss'
import classNames from "classnames"

const userListStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}

export function UserListComponent({ classes, children }) {
  const className = classNames({
    [classes.userListStyle]: true
  })

  return <div className={className}>
    {children}
  </div>
}

export const UserList = injectSheet({
  userListStyle
})(UserListComponent)
