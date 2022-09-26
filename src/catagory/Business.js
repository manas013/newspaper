import React, { useState } from 'react'
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function Business() {
  const history = useNavigate();
  const [newsData, setnews_Data] = useState([])
  React.useEffect(() => {
      let news_api = `https://gnews.io/api/v4/search?q=example&token=aae105768304b44284cd11a17184ff47&lang=en`
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
    <div className='d-flex'>
    {newsData && newsData.slice(0, 10).map((item) =>
<div class="card" style={{"width": "18rem"}}>                   
<img src={item.image} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">{item.title}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button onClick={() => { history('/Buisness/News'); }}>Click-Here</button>
  
  
</div>


                    
</div>
)}
  </div>
  </div>
  <Footer/>
  </div>
  )
}

export default Business
