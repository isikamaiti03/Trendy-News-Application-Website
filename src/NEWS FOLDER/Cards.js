import React from 'react'
import './Cards.css'
const Cards = ({data}) => {
    console.log(data);
    if (!data || data.length === 0) {
        return ; // Handle case when data is null or empty
    }

  return (
    <div className='cardContainer'>
      {data.map((cardItem,index)=>{
        if(!cardItem.urlToImage){
            return null
        }
        else{
            return(
                <div className='card'>
                    <img src={cardItem.urlToImage}/>
                    <div className='content' key={index}>
                        <a className='title' onClick={()=>window.open(cardItem.url)}>{cardItem.title}</a>
                        <p>{cardItem.description}</p>
                        <button onClick={()=>window.open(cardItem.url)}>Read More</button>
                    </div>
                </div>
            )
        }
        })
      }
    </div>
  )
}

export default Cards
