import React from 'react'
import Example from './example'
import HockeyTeamList from './hockey-team-list'
import Card from './card'
import ResponseImage from './response-image'
import CustomExample from './custom-example'
import FormPlugin from './form-plugin'
import MyComponent from '../css-variable/my-component';
import UserCard from '../css-variable/UserCard';

import AuthApp from '../high-order/auth-component';
import ErrorApp from '../high-order/with-error-boundary-component'
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
    <div className='flex flex-col gap-4 p-4 mx-auto min-w-full bg-white rounded-lg shadow-md'>
        <Example />
        <HockeyTeamList teams={teams} />
        <Card />
        <ResponseImage src="assets/react.svg" alt="react" />
        <CustomExample />
        <FormPlugin />
        <MyComponent />
        <UserCard name="John Doe" role="Developer" avatar="assets/react.svg" online={true} />
        <UserCard name="Ava Wang" role="Product Designer" avatar="https://i.pravatar.cc/150?img=32" online={true}/>
        <AuthApp />
        <ErrorApp />
    </div>
  )
}
