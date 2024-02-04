import useHackerNewsApi from '../../hooks/useHackerNewsApi'
import React, { useState } from 'react'
import '../../styles/main.css'
function ArticlesWithHook() {
  const [query, setQuery] = useState('redux')
  const [{ data, isLoading, isError }, doFetch] = useHackerNewsApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] }
  )

  return (
    <>
      <form
        onSubmit={(event) => {
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
          event.preventDefault()
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-700 rounded-md ml-2 p-2 text-black hover:text-white text-xl"
        >
          Search-with-hook
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
export default ArticlesWithHook
