import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const story1 =
  "Ama bah aniki tha una meet panne.. AGE 2023 when Mei introduced me to you. Trust me im still the fav student for Helly mam. And thats how everything started idk how but yes never knew you were the best thing that ever happened to me. ps. YOU GIVING YOUR NUMBER was unexpected to me that day. ";
const story2 =
  "UNOFFICIAL PROPOSAL?! oh yes defo not on sep 5 (crying) id never get over that embarassing confession but trust me i fell the day before.. never wanted to miss the chance and left all the chance i had that day (that long road, while me teaching you drive, the bridge sunset) and ended up confessing right next yout street in half english and tamil - gay move. i was confident last time im getting into entangling myself with someone. FASTFWD TO DEC 23 with my new bike - christmas celeb- Mochiki cafe itwas best! you with your lipstick (trying to adjust) me trying to help you adjust by my lips (sideeye) and i still have that one keychain which you gave my bike. ps. Dont forget while exhanging rings with your 1000s of promises i just shut you with my 3 words I INTERCEPTOR YOU (wink)  ";
const story3 =
  "scientifically namma 1st date is on pongal celeb tha (post ring exchange) but DATE ona veliya ponadhu SUKKU-BESSY-FRUITBAY. Damn that day all i did was trying my best to hold your hands forever but took a little long to get those pink fingers to hold and share my love, lust, sorrow, anger eveyrthing!! ";
const story4 =
  " I had seen you in saree once.. but that day trust me i lost my shit! you in olive green saree, with that small pottu, free hair(perfectly done) behind me on my bike. Trust me if i had to go to that day only after me going thru all those 3 breakups i love love to relive all for that one moment! I promised my self that day this is the first and last time im going on my knees(proposal wise 😏 mathathuku ela poven 👀) with the chain in my hand for you! I LOVE YOU my Muttapuffsu thank for this one year incredible journey with you. ena nallave poruthukita :kiss emoji: hoping for more fights and loves and 👀 in upcoming future hugs and kisses !";
function Story() {
  return (
    <section id="story">
      <div className="story-container container">
        <div className="story-title">
          <div className="vector-img"></div>
          <h1>Our Love Story</h1>
        </div>
        <div className="story-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-6 pr">
              <div className="story-img-container">
                <img
                  className="story-img"
                  src="https://i.im.ge/2024/12/07/z0Ceha.photo-6239777180129280948-y.jpeg"
                  alt="story1"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-container">
              <div className="story-text left-align-text">
                <h3>First time we met</h3>
                <p className="date">7th october, 2023 </p>
                <p className="story">{story1.substring(0, 215) + "..."}</p>
                <Link to="/story-details#story1">Read More</Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 text-container">
              <div className="story-text right-align-text">
                <h3>unofficial proposal</h3>
                <p className="date">Dec 22, 2023</p>
                <p className="story">{story2.substring(0, 215) + "..."}</p>
                <Link to="/story-details#story2">Read More</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pl">
              <div className="story-img-container">
                <img
                  className="story-img"
                  src="https://i.im.ge/2024/12/07/z0EOZ9.photo-6239777180129280952-y.jpeg"
                  alt="story2"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 pr">
              <div className="story-img-container">
                <img
                  className="story-img"
                  src="https://i.im.ge/2024/12/06/z0tmkp.Snapchat-1033754381.jpeg"
                  alt="story3"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-container">
              <div className="story-text left-align-text">
                <h3>Our first date together</h3>
                <p className="date">Sep 28, 2023</p>
                <p className="story">{story3.substring(0, 215) + "..."}</p>
                <Link to="/story-details#story3">Read More</Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 text-container">
              <div className="story-text right-align-text">
                <h3>The day</h3>
                <p className="date">Feb 6, 2024</p>
                <p className="story">{story4.substring(0, 215) + "..."}</p>
                <Link to="/story-details#story4">Read More</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pl">
              <div className="story-img-container">
                <img
                  className="story-img"
                  src="https://i.im.ge/2024/12/07/z0CJOc.photo-6239777180129280954-y.jpeg"
                  alt="story4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
