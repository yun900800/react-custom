import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../styles/main.css'

function Articles() {
  /**
   * 数据存储功能
   * 关键字和url查询
   * loading加载器的控制
   * 错误处理的控制
   * form表单的enter键提交
   * 将以上功能组合成一个hook
   */
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState('redux')
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // useEffect(()=>{
  //     const fetchData = async () => {
  //         const response = await fetch(
  //           'https://hn.algolia.com/api/v1/search?query=redux',
  //         );
  //         const result = await response.json();
  //         const data = {
  //             hits: result.hits
  //         }
  //         setData(data);
  //         console.log(data);
  //     };
  //     console.log(5555);
  //     fetchData();
  // },[]);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await axios(url)
        setData(result.data)
      } catch (error) {
        setIsError(true)
        setData({ hits: [] })
      }

      setIsLoading(false)
    }
    fetchData()
  }, [url])

  return (
    <>
      <form
        onSubmit={(event) => {
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
          event.preventDefault()
        }}
      >
        <input
          type="text"
          value={query || ''}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="button"
          className="bg-sky-500 hover:bg-sky-700 rounded-md ml-2 p-2 text-black hover:text-white text-xl"
          onClick={() =>
            setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          search
        </button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default Articles
