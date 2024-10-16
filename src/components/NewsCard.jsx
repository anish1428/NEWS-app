import React from 'react'


const NewsCard = ({ title, description, src, url,date }) => {
    return ( <div className="card w-72 ">
      <img style={{width:"300px",height:"200px"}} src={src}/>
        <h1 className='bg-red-200'>{title.slice(0,50)}</h1>
        <p>{description?description.slice(0,90):"###############x"}</p>
        <button style={{width:"fit-content",alignSelf:"center",borderRadius:"5px",padding:"3px"}} className='text-blue-800 bg-red-500 hover:text-white'><a href={url}>Read More</a></button>
        <p>{date}</p>

    </div>

          
          
    

    )
}

export default NewsCard
