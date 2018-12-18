import React from "react"
import injectSheet from "react-jss"
import classNames from "classnames"
import { foregroundColor, darkColor } from "../styles/color";

const backgroundStyle = {
  backgroundColor: darkColor,
  fontSize: "calc(10px + 2vmin)",
  color: foregroundColor
}

export function AppContainerComponent({ classes, children }) {
  const className = classNames({
    [classes.backgroundStyle]: true
  })

  return <div className={className}>
    {children}
  </div>
}

export const AppContainer = injectSheet({
  backgroundStyle
})(AppContainerComponent)
