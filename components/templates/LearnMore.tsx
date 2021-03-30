import React from 'react';
import Link from 'next/link';

const toCityLinkItem = ([value, name]: [string, string], index: number) => (
  <li key={index}>
    <Link href={'/scenicSpot/' + value}>
      <a href={'/scenicSpot/' + value}>{name}景點列表</a>
    </Link>
  </li>
);

const toFillingItems = (_: any, index: number) => <li key={index + 24} />;

const toCityLinkItems = (cityNames: Record<string, string>) =>
  Object.entries(cityNames).map(toCityLinkItem);

const fillingItems = Array.from({ length: 24 }, toFillingItems);

function LearnMore(cityNames: Record<string, string>) {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block">Ready to join in?</span>
      <span className="block text-indigo-600">Let's take a look at the author's info</span>
    </h2>
    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex rounded-md shadow">
        <a href="https://github.com/CS6" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
        Go To About
    </a>
      </div>
      <div className="ml-3 inline-flex rounded-md shadow">
        <a href="https://github.com/CS6" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
          Learn more
    </a>
      </div>
    </div>
  </div>

  );
}

export default LearnMore;
