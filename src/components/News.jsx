import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

const News = ({category}) => {
    const[articles,setArticles]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
        
    },[category])
   
  return (
    <>
      <h2 className='text-center my-3 font-bold'>Latest <span className='bg-blue-500 rounded-md p-1'>NEWS</span></h2>
      <div  className="flex flex-wrap gap-2 justify-center ">
      {articles.map((news,index)=>{
        return <NewsCard key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} date={news.publishedAt}/>
      })}
      </div>
    </>
  )
}

export default News
