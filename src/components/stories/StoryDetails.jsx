import React from "react";

const story1 =
  "Ama bah aniki tha una meet panne.. AGE 2023 when Mei introduced me to you. Trust me im still the fav student for Helly mam. And thats how everything started idk how but yes never knew you were the best thing that ever happened to me. ps. YOU GIVING YOUR NUMBER was unexpected to me that day. Ana time epidi pochu ney therla me waiting for 5PM with alarm so that i text you once you reach home. will never get over that waiting time for some reason. best times ive ever had full of curiousity fun and on good loving friend :winkemoji:";
const story2 =
  "UNOFFICIAL PROPOSAL?! oh yes defo not on sep 5 (crying) id never get over that embarassing confession but trust me i fell the day before.. never wanted to miss the chance and left all the chance i had that day (that long road, while me teaching you drive, the bridge sunset) and ended up confessing right next yout street in half english and tamil - gay move. i was confident last time im getting into entangling myself with someone. FASTFWD TO DEC 23 with my new bike - christmas celeb- Mochiki cafe itwas best! you with your lipstick (trying to adjust) me trying to help you adjust by my lips (sideeye) and i still have that one keychain which you gave my bike. ps. Dont forget while exhanging rings with your 1000s of promises i just shut you with my 3 words I INTERCEPTOR YOU (wink)  ";
const story3 =
  "scientifically namma 1st date is on pongal celeb tha (post ring exchange) but DATE ona veliya ponadhu SUKKU-BESSY-FRUITBAY. Damn that day all i did was trying my best to hold your hands forever but took a little long to get those pink fingers to hold and share my love, lust, sorrow, anger eveyrthing!! ";
const story4 =
  "I had seen you in saree once.. but that day trust me i lost my shit! you in olive green saree, with that small pottu, free hair(perfectly done) behind me on my bike. Trust me if i had to go to that day only after me going thru all those 3 breakups i love love to relive all for that one moment! I promised my self that day this is the first and last time im going on my knees(proposal wise 😏 mathathuku ela poven 👀) with the chain in my hand for you! I LOVE YOU my Muttapuffsu thank for this one year incredible journey with you. ena nallave poruthukita :kiss emoji: hoping for more fights and loves and 👀 in upcoming future hugs and kisses !";

function StoryDetails() {
  return (
    <section>
      <section id="story1">
        <div className="container">
          <div className="story-image-container">
            <img
              className="story-image"
              src="https://i.im.ge/2024/12/07/z0ENp0.photo-collage-png-1.png"
              alt="story1"
            />
          </div>
          <div className="story-text-container">
            <div>
              <h3>First time we met</h3>
              <p className="date">7th october, 2023 </p>
              <p>{story1}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="story2">
        <div className="container">
          <div className="story-image-container">
            <img
              className="story-image"
              src="https://i.im.ge/2024/12/07/z0Eywc.photo-6239777180129280949-y.jpeg"
              alt="story2"
            />
          </div>
          <div className="story-text-container">
            <div>
              <h3>unofficial proposal</h3>
              <p className="date">Dec 22, 2023</p>
              <p>{story2}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="story3">
        <div className="container">
          <div className="story-image-container">
            <img
              className="story-image"
              src="https://i.im.ge/2024/12/07/z0Et2T.photo-collage-png-2.png"
              alt="story3"
            />
          </div>
          <div className="story-text-container">
            <div>
              <h3>Our first date together</h3>
              <p className="date">Sep 28, 2023 </p>
              <p>{story3}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="story4">
        <div className="container">
          <div className="story-image-container">
            <img
              className="story-image"
              src="https://i.im.ge/2024/12/07/z0EUwq.photo-collage-png.png"
              alt="story4"
            />
          </div>
          <div className="story-text-container last">
            <div>
              <h3>The day</h3>
              <p className="date">Feb 6, 2024 </p>
              <p>{story4}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default StoryDetails;
