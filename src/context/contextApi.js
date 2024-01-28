import React, {createContext,useState,useEffect} from "react";

import {fetchDataFromApi} from "../utills/api";

export const Context = createContext();

export const AppContext= (props)=>{
    const [loading, setLoading] = useState(false);
    const [searchResult, setsearchResult] = useState(false);
    const [selectCategories, setselectCategories] = useState("New");
    const [mobileMenu, setmobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategorydata(selectCategories);

    }, [selectCategories])
    
    const fetchSelectedCategorydata=(query)=>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setsearchResult(contents)
            setLoading(false);

        })
    }
return (
    <Context.Provider value={{
        loading,
        setLoading,
        searchResult,
        setsearchResult,
        selectCategories,
        setselectCategories,
        mobileMenu,
        setmobileMenu,
    }}>
        {props.children}
    </Context.Provider>
)

}
