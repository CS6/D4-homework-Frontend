import { Fragment } from 'react';
import { LimitCard } from '../components';
import { Header } from '../components';
import { Card } from '../components';
import { UserInfo } from '../components';
import useSWR from 'swr'

function Home() {
  return <Header />;
}

function Dashboards() {
  return <Fragment>
    <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="flex bg-white flex-col w-full h-full pl-0 md:p-4 md:space-y-4">


          <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
          <header className="w-full shadow-lg bg-pink-500 dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
              <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                <span className="text-blue-50 ml-2 text-2xl font-bold">
                  來抽卡吧
                </span>
              </div>
            </div>
          </header>
            <div className="flex flex-col flex-wrap sm:flex-row h-3/4 ">


              <div className="w-full sm:w-full xl:w-full h-full flex flex-col justify-items-center justify-center">
                {/* //UserInfo */}
                <div className="mb-4 ">
                
                <Header  className="h-full"/>
                </div>
              </div>
            </div>
            <footer className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-64 rounded-2xl z-40">
              <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div className="relative flex-col  pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                  <span className="text-pink-400 ml-2 text-2xl font-bold">
                    作者： DaYuan_lin
                </span>
                <span className="text-gray-800 ml-2 text-2xl font-bold">
                    點選 Go Find 即可抽出一位同學
                </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>

  </Fragment>;
}

export default Dashboards;
