import React from 'react'
import Example from './example'
import HockeyTeamList from './hockey-team-list'
import Card from './card'
const teams = [
  {
    id: 1,
    logo: 'assets/svg/sparkle.svg',
    name: 'John',
    city: 'shenzhen',
  },
  {
    id: 2,
    logo: 'assets/react.svg',
    name: 'jim',
    city: 'zhuhai',
  },
  {
    id: 3,
    logo: 'assets/react.svg',
    name: 'mary',
    city: 'beijign',
  },
]
export default function TailwindUI() {
  return (
    <>
        <Example />
        <HockeyTeamList teams={teams} />
        <Card />
    </>
  )
}
