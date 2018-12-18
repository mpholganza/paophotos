import React from "react"
import injectSheet from "react-jss"
import classNames from "classnames"
import { foregroundColor } from "../styles/color";

const backgroundStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: foregroundColor
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
