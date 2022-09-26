import React, { useState } from 'react'
import './body.css';
import axios from 'axios';


function Body() {
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
            <article id="popular-news">
                <div id="featured">
                    <h2>FEATURED</h2>
                    <section class="popular-news-carousel">
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    {newsData && newsData.slice(4, 5).map((item) =>
                                        <>
                                            <img  src={item.image} class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>{item.title}</h5>
                                                <p>{item.publishedAt}.</p>
                                            </div>
                                        </>)}
                                </div>
                                <div class="carousel-item">
                                    {newsData && newsData.slice(1, 2).map((item) =>
                                        <>
                                            <img src={item.image} id='jod' class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>{item.title}</h5>
                                                <p>{item.publishedAt}.</p>
                                            </div>
                                        </>)}
                                </div>
                                <div class="carousel-item">
                                    {newsData && newsData.slice(2, 3).map((item) =>
                                        <>
                                            <img src={item.image} id='jod' class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>{item.title}</h5>
                                                <p>{item.publishedAt}.</p>
                                            </div>
                                        </>)}
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>

                </div>
                <div id="latest">
                    <h2>LATEST</h2>
                    <section class="news">
                        <div class="news-container">
                            {newsData && newsData.slice(6, 7).map((item) =>
                                <>
                                    <img src={item.image} className='e-block' />
                                    <p class="carousel-text">This floating entertainment hub</p>
                                </>)}
                        </div>
                    </section>
                    <section class="news">
                        <div class="news-container">
                            {newsData && newsData.slice(8, 9).map((item) =>
                                <>
                                    <img src={item.image} className='e-block' />
                                    <p class="carousel-text">This floating entertainment hub</p>
                                </>)}
                        </div>
                    </section>
                </div>
                <div id="our-picks">
                    <h2>OUR PICKS</h2>
                    <section class="news">
                        <div class="news-container">
                            {newsData && newsData.slice(9, 10).map((item) =>
                                <>
                                    <img src={item.image} className='e-block' />
                                    <p class="carousel-text">This floating entertainment hub</p>
                                </>)}
                        </div>
                    </section>
                    <section class="news">
                        <div class="news-container">
                            {newsData && newsData.slice(3, 4).map((item) =>
                                <>
                                    <img src={item.image} className='e-block' />
                                    <p class="carousel-text">This floating entertainment hub</p>
                                </>)}
                        </div>
                    </section>
                </div>
            </article>
            <section class="more-news">
                <div class="news-section">
                    <article class="world">
                        <h2>WORLD</h2>
                        {newsData && newsData.slice(5, 6).map((item) =>
                            <>
                                <img src={item.image} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </>)}
                    </article>
                    <article class="sport">
                        <h2>SPORT</h2>
                        {newsData && newsData.slice(7, 8).map((item) =>
                            <>
                                <img src={item.image} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </>)}
                    </article>
                </div>
                <aside>
					<h4>RECENT</h4>
					<div class="recent-news">
                    {newsData && newsData.slice(8, 9).map((item) =>
                            <>
						 <img src={item.image} />
						<p>{item.title}</p>
                        </>)}
					</div>
					<div class="recent-news">
                    {newsData && newsData.slice(9, 10).map((item) =>
                            <>
						 <img src={item.image} />
						<p>{item.title}</p>
                        </>)}
					</div>
					<div class="recent-news">
                    {newsData && newsData.slice(1, 2).map((item) =>
                            <>
						 <img src={item.image} />
						<p>{item.title}</p>
                        </>)}
					</div>
					<div class="recent-news">
                    {newsData && newsData.slice(2, 3).map((item) =>
                            <>
						 <img src={item.image} />
						<p>{item.title}</p>
                        </>)}
					</div>
					<div class="recent-news">
                    {newsData && newsData.slice(4, 5).map((item) =>
                            <>
						 <img src={item.image} />
						<p>{item.title}</p>
                        </>)}
					</div>
				</aside>
            </section>


        </div>
    )
}

export default Body
