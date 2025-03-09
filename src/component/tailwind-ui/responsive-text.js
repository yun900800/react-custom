import React from 'react';
const ResponsiveText = () => {
  return (
    <div className="mx-auto flex flex-row items-center sm:flex-col sm:items-start max-w-2xl h-auto  gap-x-8 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-100 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    <div className="bg-gray-200 p-4">
     <a href="https://medium.com/@stheodorejohn/responsive-design-with-tailwind-css-517c55127874">
        <span className="text-lg font-bold text-yellow-500">
        Responsive Design with Tailwind CSS
        </span>
      </a>
      <p className="text-red md:text-blue">
        Responsive Text: This text is red on small screens and blue on medium screens and larger.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-green-300 p-2 m-2">Item 1</div>
        <div className="bg-blue-300 p-2 m-2">Item 2</div>
        <div className="bg-yellow-300 p-2 m-2">Item 3</div>
      </div>
      <p className="text-base md:text-lg">
        Responsive Typography: This text size adjusts based on the screen width.
      </p>
      <div className="hidden md:flex bg-purple-300 p-4">
        Conditional Classes: This element is hidden on small screens.
      </div>
      <div className="aspect-w-16 aspect-h-9 bg-indigo-300 p-4">
        Aspect Ratio Box: Your content here.
      </div>
    </div>
    </div>
  );
};
export default ResponsiveText;