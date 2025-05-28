import useDataApi from '../../hooks/useDataApi';
import React, {useState} from "react";
import PostList from './postlist';
import PostError from './post-error';
import FormButton from './form-button';
function ArticlesWithDataApi(){
    const [query, setQuery] = useState('redis');
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        `http://hn.algolia.com/api/v1/search?query=${query}`,
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
          text="Search-with-cancellation"
      />
      {isError && <PostError msg="Something went wrong ..." />}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <PostList posts={data.hits} />
      )}
    </>
  );
}

export default ArticlesWithDataApi;