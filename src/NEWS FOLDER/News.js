import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import './News.css'
const News = () => {
    const [search,setSearch]=useState('india');
    const [newsData,setNewsData]=useState(null);
    const API_KEY="bcc1d8445e254e9cb1bce4a9c68f62ef";
    useEffect(()=>{
        getData();
    },[])
    const getData = async()=>{
        const response= await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
        const jsonData= await response.json();// for data convert to json format
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }
    const handleInput=(e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }
     const changeInput=(e)=>{
        setSearch(e.target.value)
     }
  return (
    <>
    <nav>
        <div>
            <h4>Trendy News</h4>
        </div>
        <ul>
           <a>All News</a>
           <a>Trending</a>
        </ul>
        <div className='searchBar'>
            <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
            <button onClick={getData}>Search</button>
        </div>
    </nav>
    <div>
        <p className='head'>Stay Update with TrendyNews</p>
    </div>
    <div className='categoryBtn'>
        <button onClick={changeInput} value="sports">Sports</button>
        <button onClick={changeInput} value="politics">Politics</button>
        <button onClick={changeInput} value="entertainment">Entertainment</button>
        <button onClick={changeInput} value="health">Health</button>
        <button onClick={changeInput} value="fitness">Fitness</button>
    </div>
    <div>
        <Cards data={newsData}/>
    </div>
    </>
  )
}

export default News  
