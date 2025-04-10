import React from 'react'
import Example from './example'
import HockeyTeamList from './hockey-team-list'
import Card from './card'
import ResponseImage from './response-image'
import CustomExample from './custom-example'
import FormPlugin from './form-plugin'
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
        <ResponseImage src="assets/react.svg" alt="react" />
        <CustomExample />
        <FormPlugin />
    </>
  )
}
