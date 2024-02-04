import useHackerNewsApi from '../../hooks/useHackerNewsApi';
import React, {useState} from "react";
function ArticlesWithHook(){
    const [query, setQuery] = useState('redux');
    const [{ data, isLoading, isError }, doFetch] = useHackerNewsApi(
        'https://hn.algolia.com/api/v1/search?query=redux',
        { hits: [] });

  return (
    <>
      <form onSubmit={event => {
        doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
        event.preventDefault();
      }}>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search-with-hook</button> 
      </form>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default ArticlesWithHook;