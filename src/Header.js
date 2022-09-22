import React, { useState } from 'react'
import './header.css';
import axios from 'axios';

function Header() {
    const [newsData, setnews_Data] = useState([])
    React.useEffect(() => {
        let news_api = `https://gnews.io/api/v4/search?q=example&token=a224a8814430fe19be078947fdfd48e8&lang=en`
        axios.get(news_api)
            .then((data) => {
                console.log(data.data.articles);
                setnews_Data(data.data.articles)
            });
    }, [])

    return (
        <header>
            <div className='webpage-header'>
                <img src='https://t4.ftcdn.net/jpg/02/95/88/07/360_F_295880703_ckdOjygZvaICW6Xbqjo1Ku5aeqE4n65G.jpg' alt='kfs' />
                <h1>News Live</h1>
                <div className='image_icon'>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-share-fill"></i>
                    <i class="bi bi-instagram"></i>

                </div>
            </div>
            <nav class="navbar navbar-expand-lg navigation-wrap  navbar-dark">
                <div className="container-fluid">


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sports</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Politics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Business</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Travel</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Technology</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">vedios</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className='breaking-news-section'>
                <span id='btext'>Breaking News</span>
                <marquee direction="left"  >
                    <a href='#abc' className='breaking-news'>
                        <div className='bntime'>{newsData && newsData.slice(0, 5).map((item) =>
                            <>
                                <span>{item.title}</span>
                            </>
                        )} </div>
                    </a>
                </marquee>

            </div>


        </header>
    )
}

export default Header
