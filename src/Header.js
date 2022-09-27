import React, { useState } from 'react'
import './header.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon,
    InstapaperIcon,
    InstapaperShareButton,
} from 'react-share';

function Header() {
    const shareUrl = 'https://www.pakkamarwadi.tk/';
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
        <header>
            <div className='webpage-header'>
                <img src='https://t4.ftcdn.net/jpg/02/95/88/07/360_F_295880703_ckdOjygZvaICW6Xbqjo1Ku5aeqE4n65G.jpg' alt='kfs' />
                <h1>News Live</h1>
                <div className='image_icon'>
                    <i> <FacebookShareButton
                        url={shareUrl}
                        quote={'news paper live'}
                        hashtag={'#Valorant'}
                    >
                        <FacebookIcon size={20} round={true} />
                    </FacebookShareButton> </i>

                    <i>  <WhatsappShareButton
                        url={shareUrl}
                        quote={'Title or jo bhi aapko likhna ho'}
                        hashtag={'#portfolio...'}
                    >
                        <WhatsappIcon size={20} round={true} />
                    </WhatsappShareButton>
                    </i>
                    <i>
                        <TwitterShareButton
                        url={shareUrl}
                        quote={'Title or jo bhi aapko likhna ho'}
                        hashtag={'#portfolio...'}
                        >
                            <TwitterIcon size={20} round={true}></TwitterIcon>

                        </TwitterShareButton>
                    </i>
                    <i>
                        < LineShareButton 
                           url={shareUrl}
                           quote={'Title or jo bhi aapko likhna ho'}
                           hashtag={'#portfolio...'}>
                            <LineIcon size={20} round={true}></LineIcon>

                        </LineShareButton>

                    </i>
                    <i>
                        <InstapaperShareButton
                        url={shareUrl}
                        quote={'Title or jo bhi aapko likhna ho'}
                        hashtag={'#portfolio...'}>
                            <InstapaperIcon size={20} round={true}></InstapaperIcon>

                        </InstapaperShareButton>
                        
                    </i>

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
                                <a class="nav-link" onClick={() => {
                                    history('/');
                                }}>HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => {
                                    history('/Sports');
                                }}>Sports</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => {
                                    history('/Politics');
                                }}>Politics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => {
                                    history('/Business');
                                }}>Buisness</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => {
                                    history('/Technology');
                                }}>Technology</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => {
                                    history('/Travel');
                                }}>Travels</a>
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
