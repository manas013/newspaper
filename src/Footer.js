import React, { useState } from 'react'
import './Footer.css';
import axios from 'axios';

// import {
//   FacebookShareButton,
//   WhatsappShareButton,
//   WhatsappIcon,
//   FacebookIcon,
// } from 'react-share';


function Footer() {
    const shareUrl = 'https://www.pakkamarwadi.tk/';
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
        <div className="social-links">
            <section class="about">
                <h2>About</h2>
                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod.</p>
                <div class="social-icons-footer">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-google"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-pinterest"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </section>
            <section class="Instagram">
                <h2>Instagram</h2>
                {newsData && newsData.slice(0, 5).map((item) =>
                    <>
                        <img src={item.image} className='footer_imag' />
                    </>)}
                <button type="button" class="footer-buttons">View on Instagram</button>
            </section>
            <section class="Subscribe">
                <h2>Subscribe to News Today</h2>
                <p>Enter your email address to subscribe to this blog and receive notifications of new posts by email</p>
                <input type="email" placeholder="Email Address" />
                <button type="button" class="footer-buttons">Subscribe</button>
                {/* <FacebookShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton> */}
            </section>

        </div>
    )
}

export default Footer
