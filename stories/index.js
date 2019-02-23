import React from 'react'
import { storiesOf } from '@storybook/react'

import { Header } from '../src/components/header'
import { Banner } from "../src/components/banner"
import { UserItem } from "../src/components/userItem"
import { AlbumItem } from "../src/components/albumItem"

import { MemoryRouter } from 'react-router'

storiesOf('Header', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('just logo', () => (
    <Header></Header>
  ))
  .add('with user', () => (
    <Header userId={'1234'} userName={'Phil the Photographer'}></Header>
  ))
  .add('with user and album', () => (
    <Header userId={'1234'} userName={'Phil the Photographer'} albumId={'2345'} albumTitle={'Holidays at Phils 2018'}></Header>
  ))

storiesOf('Banner', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('banner', () => (
    <Banner></Banner>
  ))

storiesOf('UserItem', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('User Item', () => (
    <UserItem key={'userItem-1234'} user={{id: 1234, name: "Phil the Photographer"}}></UserItem>
  ))

  storiesOf('AlbumItem', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Album Item', () => (
    <AlbumItem key={'albumItem-2345'} albumId={"2345"} albumTitle={"Holidays at Phils 2018"} userId={"1234"}></AlbumItem>
  ))