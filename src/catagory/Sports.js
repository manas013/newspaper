import React, { useState } from 'react'
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Sports() {
  const history = useNavigate();
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
      <div className='d-flex'>
      {newsData && newsData.slice(0, 10).map((item) =>
<div class="card" style={{"width": "18rem"}}>                   
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Stack spacing={5} direction="row">
      <Button variant="outlined"  onClick={() => { history('/Sports/News'); }}>Click</Button>
    </Stack>
    
    
  </div>
  
 
                      
</div>
  )}
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Sports
