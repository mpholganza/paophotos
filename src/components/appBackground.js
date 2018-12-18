import React from "react"
import injectSheet from 'react-jss'
import classNames from "classnames"

const backgroundStyle = {
  backgroundColor: "#4f1bcf",
  minHeight: 'calc(100vh - 107px)',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
}

export function AppBackgroundComponent({ classes, children }) {
  const className = classNames({
    [classes.backgroundStyle]: true
  })

  return <div className={className}>
    {children}
  </div>
}

export const AppBackground = injectSheet({
  backgroundStyle
})(AppBackgroundComponent)
