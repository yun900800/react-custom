import React from 'react'
import DarkMode from './dark-mode.js'
import Contributor from './contributor.js'
const TextStylingCombinations = () => {
  return (
    
    <div className="bg-gray-100 p-8">
      <a href="https://medium.com/@stheodorejohn/text-styling-with-tailwind-css-deep-dive-into-tailwind-css-magic-c73defaffd7e">
        <span className="text-lg font-bold text-yellow-500">
          Text Styling with Tailwind CSS — Deep Dive into Tailwind CSS Magic
        </span>
      </a>
      <p className="text-lg font-semibold text-blue-500 md:text-red-500 leading-6 tracking-wide">
        Text styling combination 1
      </p>
      <p className="text-base font-medium text-green-500 leading-7 tracking-tight">
        Text styling combination 2
      </p>
      <p className="text-xl font-bold text-red-600 leading-8 tracking-normal">
        Text styling combination 3
      </p>
      <p className="text-2xl font-extrabold text-purple-700 leading-9 tracking-wider">
        Text styling combination 4
      </p>
      <p className="text-lg font-light text-indigo-600 leading-10 tracking-widest">
        Text styling combination 5
      </p>
      <p className="text-xl font-normal text-pink-500 leading-6 tracking-tighter">
        Text styling combination 6
      </p>
      <p className="text-3xl font-semibold text-orange-500 leading-7 tracking-normal">
        Text styling combination 7
      </p>
      <p className="text-sm font-bold text-teal-600 leading-8 tracking-wide">
        Text styling combination 8
      </p>
      <p className="text-4xl font-thin text-yellow-500 leading-9 tracking-wider">
        Text styling combination 9
      </p>
      <p className="text-base font-extrabold text-gray-700 leading-10 tracking-widest">
        Text styling combination 10
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">   <div>Item 1</div>   <div>Item 2</div>   <div>Item 3</div> </div>
      <DarkMode />
      <Contributor />
    </div>
  )
}
export default TextStylingCombinations
