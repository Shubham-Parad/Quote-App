import React from 'react';
import './Quotes.scss';

function Quotes() {
  return (
    <div id='quote-box'>
       <div id="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum atque deserunt quas, voluptatum repellendus ullam labore. Officiis ad, accusantium quaerat laboriosam iusto voluptatum laudantium quam sequi, nulla ipsam similique quasi voluptatem assumenda maiores enim corporis aliquam at aut, ea soluta dicta dignissimos cum!</p>
        </div>     
        <div id="authors">
            <p>John Doe</p>
        </div>
        <div id="buttons">
            <div className="social-media">
                <a href="#" id="tweet-quote">
                    <span><img src="" alt="" /></span>
                </a>
            </div>
            <button id="new-quote">New Quote</button>
        </div>
    </div>
  )
}

export default Quotes;