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
      <div className="mx-auto flex flex-row items-center sm:flex-col sm:items-start max-w-lg  gap-x-8 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-100 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <Example />
        <HockeyTeamList teams={teams} />
        <Card />
      </div>
    </>
  )
}
