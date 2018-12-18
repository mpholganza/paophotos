import React from "react"
import { connect } from "react-redux"

// Selectors
import {
  getUserList,
  getUserListIsLoaded,
  getUserListIsLoading
} from "../selectors/users"

// Actions
import { loadUsersIfNeeded } from '../actions/users'

// Components
import { UserItem } from "./userItem"
import { UserList } from "./userList"
import { Header } from "./header"
import { Banner } from "./banner"
import { Loading } from "./loading"

class HomeComponent extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadUsersIfNeeded())
  }

  render() {
    const { userListIsLoaded, userList } = this.props

    return <>
      <Header></Header>
      <Banner></Banner>
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