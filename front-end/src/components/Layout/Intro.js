import React from 'react';
import sloth from '../../assets/img/spacesloth.jpg';

function Intro(props) {
  return (
    <div className="container">
      <div className="top">
        <div className="text">
          <p>I know, I know. Another ipsum generator. But hear me out, this one is special.</p>
          <p>Instead of barfing out useless words, this generator pulls its content from Urban Dictionary. That means that not only will you laugh your ass off, but you'll also learn the phrases all the youths are using these days.</p>
          <p>Educate yourself.</p>
          <span>It might be NSFW. Depends on the workplace.</span>
        </div>
        <img src={ sloth } alt="Space Sloth" />
      </div>
    </div>
  );
}

export default Intro;