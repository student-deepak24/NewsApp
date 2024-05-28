import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

var NewsBoard = ({category}) => {
const [state, setState] = useState([]);
const [hasError, setHasError] = useState(false);
  

const fetchData = () =>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2fe95fcde45746dcb281c234d6068bd0`)
    .then(response =>response.json())
    .then(res => {


        setState(res.articles)
        console.log(res);
    }
        
        )
    .catch(err => setHasError(true))

}


useEffect(()=>{
fetchData();
},[category])


    return (
        <>
<h2 className="d-flex justify-content-center p-4">Latest <span className="badge text-bg-success">  News</span> </h2>
 
           {state && state.map((news, index) => (
              <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                /> 
             ))}   
        </>
    )
};

export default NewsBoard