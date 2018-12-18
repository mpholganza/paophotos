import React from 'react'
import injectSheet from 'react-jss'
import classNames from "classnames"

const overlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  position: "fixed",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const OverlayComponent = ({classes, children, onClick}) => {
  const className = classNames({
    [classes.overlayStyle]: true
  })

  return <div className={className} onClick={onClick}>
    {children}
  </div>
}

export const Overlay = injectSheet({ overlayStyle })(OverlayComponent)
