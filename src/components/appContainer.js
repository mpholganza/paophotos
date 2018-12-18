import React from "react"
import injectSheet from "react-jss"
import classNames from "classnames"

const backgroundStyle = {
  backgroundColor: "#4f1bcf",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
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
