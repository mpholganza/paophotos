function navigateTo(routeName, routeParams, context, query) {
  const path = getPath(routeName, routeParams)

  context.router.history.push({
    pathname: path,
    search: query
  })
}

export function navigateToHome(props, context) {
  return (dispatch, getState) => {
    dispatch({
      type: NAVIGATE_TO_HOME
    })

    navigateToPricingRoute(context)
  }

}