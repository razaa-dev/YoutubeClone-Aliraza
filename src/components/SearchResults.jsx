import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../utills/api'
import { Context } from '../context/contextApi'
import LeftNav from './LeftNav'
import SearchResultVideoCard from "./SearchResultVideoCard"

const SearchResults = () => {
  const [result, setResult] = useState();
  const {searchQuery} = useParams();
  const {setLoading} = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h")
    fetchSearchResults();
  }, [searchQuery])
  
  const fetchSearchResults = ()=>{
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
        console.log(res.contents);
        setResult(res.contents);
        setLoading(false);
    })
  }

  return (
    <div className='flex flex-row h-[calc(100%-56px)] '>
      <LeftNav/>

      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <giv className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item)=>{
            if(item?.type !== "video") return false;
            return (
              <SearchResultVideoCard key={item?.video?.videoId} video={item?.video} />
            )
          })}
        </giv>
      </div>
    
    </div>
  )
}

export default SearchResults
