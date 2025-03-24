import React from 'react'
import DarkMode from './dark-mode.js'
import Contributor from './contributor.js'

const TextStylingCombinations = () => {
  const textStyles = [
    { className: "text-lg font-semibold text-blue-500 md:text-red-500 leading-6 tracking-wide", text: "Text styling combination 1" },
    { className: "text-base font-medium text-green-500 leading-7 tracking-tight", text: "Text styling combination 2" },
    { className: "text-xl font-bold text-red-600 leading-8 tracking-normal", text: "Text styling combination 3" },
    { className: "text-2xl font-extrabold text-purple-700 leading-9 tracking-wider", text: "Text styling combination 4" },
    { className: "text-lg font-light text-indigo-600 leading-10 tracking-widest", text: "Text styling combination 5" },
    { className: "text-xl font-normal text-pink-500 leading-6 tracking-tighter", text: "Text styling combination 6" },
    { className: "text-3xl font-semibold text-orange-500 leading-7 tracking-normal", text: "Text styling combination 7" },
    { className: "text-sm font-bold text-teal-600 leading-8 tracking-wide", text: "Text styling combination 8" },
    { className: "text-4xl font-thin text-yellow-500 leading-9 tracking-wider", text: "Text styling combination 9" },
    { className: "text-base font-extrabold text-gray-700 leading-10 tracking-widest", text: "Text styling combination 10" },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <a href="https://medium.com/@stheodorejohn/text-styling-with-tailwind-css-deep-dive-into-tailwind-css-magic-c73defaffd7e">
        <span className="text-lg font-bold text-yellow-500">
          Text Styling with Tailwind CSS — Deep Dive into Tailwind CSS Magic
        </span>
      </a>
      {textStyles.map((style, index) => (
        <p key={index} className={style.className}>
          {style.text}
        </p>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
      <DarkMode />
      <Contributor />
    </div>
  )
}

export default TextStylingCombinations