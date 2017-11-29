import React, { Component } from 'react';
import '../css/About.css';

class About extends Component {
  render() {
    return(
      <div className='about'>
        <h1>About Me</h1>
        <div className='about-body-container'>
          <p className='about-body'>Pete’s Pedals started in January of 2014 after I moved from Chapel Hill, NC
           to St Louis.  I had been taking apart, repairing, modifying just about everything
           I could get my hands on from an early age.  I have been working on pedals, amps
           and guitars for years, mostly for friends and my sons who are guitar and bass
           players.  In St Louis, it became apparent soon after I arrived that there were
           not too many options for getting a guitar pedal repaired, either affordably or
           quickly.  So began Pete’s Pedals, and with a small ad in Craigslist I started
           seeing boxes full of pedals that had been laying in people’s closets, garages and
           attics for years awaiting to play again.  In St Louis, half of my business is
           repair and restoration.  But I also do mods and upgrades, following in the
           footsteps of Keeley and Wampler.  I have some very popular mods, and some one-offs
           on request.  I try to avoid extra switches and knobs, and I try to keep it
           affordable.  Eventually, I couldn’t help but design and build my own pedals,
           based mostly on some of the classics.  Occasionally I am asked to build a copy of
           a pedal that is no longer available.  I look for old parts, especially IC chips,
           transistors and diodes to emulate vintage tones.  If you have something in mind,
           let me know and I can work up a quote for you.</p>
          <p className='about-body'>Look for Pete’s Pedals on YouTube for demos of some of my pedals.  Also, find
          and like Pete’s Pedals, St Louis on Facebook for more posts of my work, and for
          first notice on my more popular mods and builds. </p>
        </div>
      </div>
    )
  }
}

export default About;
