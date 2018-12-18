import React from "react"
import { connect } from 'react-redux'

import { UserItem } from "./userItem"
import { UserList } from "./userList"

// import { Header } from "./header"

import {
  getUserList,
  getUserListIsLoaded,
  getUserListIsLoading
} from "../selectors/users.js"

import { Loading } from "./loading.js"

import { loadUsersIfNeeded } from '../actions/users.js'


class HomeComponent extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadUsersIfNeeded())
  }

  render() {
    const { userListIsLoaded, userList } = this.props

    return <>
      {/* <h3>{"Photographers"}</h3> */}
      {(() => {
        if (!userListIsLoaded) return <Loading></Loading>
        return <UserList>{
          userList.toArray().map((user) => {
            const userObject = user[1]
            return <UserItem key={`userItem-${userObject.id}`} user={userObject}></UserItem>
          })
        }</UserList>
      })()}
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    userList: getUserList(state),
    userListIsLoaded: getUserListIsLoaded(state),
    userListIsLoading: getUserListIsLoading(state)
  }
}

export const Home = connect(mapStateToProps)(HomeComponent)