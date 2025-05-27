import useHackerNewsApi from '../../hooks/useHackerNewsApi'
import React, { useState } from 'react'
import '../../styles/main.css'
import PostList from './postlist';
import FormButton from './form-button';
function ArticlesWithHook() {
  const [query, setQuery] = useState('redux')
  const [{ data, isLoading, isError }, doFetch] = useHackerNewsApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] }
  )

  return (
    <>
      <FormButton
        onClick={(event) =>{
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
        setQuery={setQuery}
        query={query}
        text="Search-with-hook"
      />
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <PostList posts={data.hits} />
      )}
    </>
  )
}
export default ArticlesWithHook
