import axios from "axios";
import React, {useState, useEffect} from "react";
const useHackerNewsApi = (initialUrl, initialData)=>{
    const [data,setData] = useState(initialData);
    const [url,setUrl] = useState(initialUrl);
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false);
    useEffect(()=>{
        const fetchData = async ()=>{
            setIsLoading(true);
            setIsError(false);
            try {
                const result = await axios(url);
                setData(result.data);  
            } catch(error){
                setIsError(true);
                setData(initialData)
            }
            setIsLoading(false);
        }
        fetchData();     
    },[url]);
    return [{data, isLoading, isError},setUrl];
}
export default useHackerNewsApi;