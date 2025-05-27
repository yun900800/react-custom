import useDataApi from '../../hooks/useDataApi';
import React, {useState} from "react";
import PostList from './postlist';
import FormButton from './form-button';
function ArticlesWithDataApi(){
    const [query, setQuery] = useState('redux');
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        'https://hn.algolia.com/api/v1/search?query=redux',
        { hits: [] });
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
  );
}

export default ArticlesWithDataApi;