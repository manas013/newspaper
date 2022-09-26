import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';

function News() {
  const [newsData, setnews_Data] = useState([])
  React.useEffect(() => {
      let news_api = `https://gnews.io/api/v4/search?q=example&token=91462f9359ca5f3177cf4d070222faeb&lang=en`
      axios.get(news_api)
          .then((data) => {
              console.log(data.data.articles);
              setnews_Data(data.data.articles)
          });
  }, [])


  return (
    <div>
         <Header/>
         <div className='container'>
      <div className=''>
      {newsData && newsData.slice(3, 4).map((item) =>
<div class="card_news">                   
  <img src={item.image} class="card-img-top" alt="cgcghc"/>
  <div class="card-body">
    <h2 class="card-title">{item.title}</h2>
    <p class="card-text">{item.description}.</p>
    <p class="card-title">{item.publishedAt}</p>
    <p class="card-text">{item.source.name}.</p>
    <p class="card-text">{item.url}.</p>


    
    
  </div>
  
 
                      
</div>
  )}
    </div>
    </div>
    <Footer/>
      
    </div>
  )
}

export default News
