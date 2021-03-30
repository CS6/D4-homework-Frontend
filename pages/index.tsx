import { Fragment } from 'react';
// import { Navbar } from '../components';
import { cityNames } from '../values';
import { LimitCard } from '../components';
import { Header } from '../components';
import { Card } from '../components';
import { UserInfo } from '../components';
import useSWR from 'swr'

const url = 'http://127.0.0.1:3000/api/draw/random';
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  console.log('Headers',res.status)

  return res.json();
};

function Home() {
  return <Header />;
}

function Dashboards() {
  const { data: result, error } = useSWR(url, fetcher)
  console.log('Headers',error)

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

console.log(result)
  return <Fragment>
    <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="flex flex-col w-full h-full pl-0 md:p-4 md:space-y-4">
          <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
              <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                <span className="text-indigo-600 ml-2 text-2xl font-bold">
                  Tail-Kit
                </span>
              </div>
            </div>
          </header>

          <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row ">

              <div className="w-full sm:w-1/2 xl:w-1/2">
                <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
                  <LimitCard headerData={'headerData'}/>
                </div>
                <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">

                </div>

                <div className="mb-4  mx-0 sm:ml-4 xl:mr-4">
                  <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                    <div className="h-24 " />
                    {result.map((userInfo) => (
                       <Card key={userInfo.name} userData={userInfo}/>
                    ))}
                    
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 xl:w-1/2">
                {/* //UserInfo */}
                <div className="mb-4">
                {result.map((userInfo) => (
                        <UserInfo  key={userInfo.name} userData={userInfo}/>
                    ))}
                 
                </div>
              </div>
            </div>
            <footer className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-64 rounded-2xl z-40">
              <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                  <span className="text-indigo-600 ml-2 text-2xl font-bold">
                    Tail-Kit
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
