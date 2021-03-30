import React from 'react';
import Link from 'next/link';

// let hobby = [
//   { "ID": "346", "Hobby": "在山上寫Code", "Category": "戶外活動" },
//   { "ID": "341", "Hobby": "研究新技術", "Category": "極端" },
//   { "ID": "220", "Hobby": "聽ＪＰＯＰ", "Category": "音樂" },
//   { "ID": "127", "Hobby": "爬山", "Category": "戶外活動" },
//   { "ID": "203", "Hobby": "製作產品原型", "Category": "工藝品" },
//   { "ID": "90", "Hobby": "UI/UX", "Category": "工藝品" },
//   { "ID": "81", "Hobby": "收集模型", "Category": "收集中" }
// ];
function HobbyInfo({hobby}) {

  return hobby.map(index => {
    console.log(index.Hobby)
    return (<div  className="text-gray-600 dark:text-gray-200 w-ful text-sm">{index.Hobby}</div>)
  })
}

function UserInfo({userData}) {
  const { hobby, exchange, talent} = userData
  return (
    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full  h-full">
      <ul>
        <p className="text-gray-700 dark:text-white  text-2xl font-light mb-4">Messages</p>
      </ul>
      <div className="container relative flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
        <ul className="flex flex-col divide divide-y w-full">
          <li className="flex flex-row  ">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium dark:text-white">
                  興趣：
                  </div>
                  <HobbyInfo hobby={hobby}/>
              </div>
            </div>
          </li>
          <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium dark:text-white">
                  技能
                  </div>
                  <HobbyInfo hobby={exchange}/>

                {/* <div className="text-gray-600 dark:text-gray-200 text-sm">
                  Charlie Moi
                  </div> */}
              </div>
            </div>
          </li>
          <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium dark:text-white">
                  talent
                  </div>
                  <div className="text-gray-600 dark:text-gray-200 w-ful text-sm">{talent.Hobby}</div>
                {/* <div className="text-gray-600 dark:text-gray-200 text-sm">
              在山上寫Code
              研究新技術
              聽ＪＰＯＰ
              爬山
              製作產品原型
              UI/UX
              收集模型
            </div> */}

              </div>
            </div>
          </li>
          <li className="flex flex-row">
            <div className="select-none cursor-pointer flex flex-1 items-center p-4">
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium dark:text-white">
                  exchange
                  </div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                  Boby PArk
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfo;
