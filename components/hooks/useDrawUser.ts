import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())
function useDrawUser () {
  // const { data, error } = useSWR('/api/user/123', fetcher)
  const { data, error } = useSWR(`http://127.0.0.1:3000/api/draw/random`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useDrawUser;
