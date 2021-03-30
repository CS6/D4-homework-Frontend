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

function LimitCard({headerData}) {
  return (
    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
    {/* <div className="shadow-lg rounded-xl w-60 md:w-72 p-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 relative overflow-hidden"> */}
      <a href="#" className="w-full h-full block">
        <div className="w-full">
          <p className="text-gray-700 dark:text-white  text-2xl font-light mb-4">
            RateLimit
            </p>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <p>
              X-RateLimit-Limit
                </p>
            <p>
              3/8
                </p>
          </div>
          <div className="w-full h-2 bg-green-100 rounded-full mb-4">
            <div className="w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full">
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <p>
              X-RateLimit-Remaining
                </p>
            <p>
              6/10
                </p>
          </div>
          <div className="w-full h-2 bg-indigo-100 rounded-full mb-4">
            <div className="w-2/3 h-full text-center text-xs text-white bg-indigo-400 rounded-full">
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <p>
              X-RateLimit-Reset
                </p>
            <p>
              2/8
                </p>
          </div>
          <div className="w-full h-2 bg-blue-100 rounded-full mb-4">
            <div className="w-1/4 h-full text-center text-xs text-white bg-blue-400 rounded-full">
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <p>
              Marketing
                </p>
            <p>
              8/8
                </p>
          </div>
          <div className="w-full h-2 bg-pink-100 rounded-full">
            <div className="w-full h-full text-center text-xs text-white bg-pink-400 rounded-full">
            </div>
          </div>
        </div>
      </a>
    </div>

  );
}

export default LimitCard;
