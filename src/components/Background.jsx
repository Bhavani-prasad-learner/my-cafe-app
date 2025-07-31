import React from 'react';
import Particles from '../reactbits/particles';
import bgVideo from '../assets/vecteezy_cute-coffee-icon-logo-animation-with-liquid-particles-on_18977006.mp4';

const Background = () => (
  <div className="background-absolute">
    <video
      className="background-video"
      src={bgVideo}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      style={{
        position: 'absolute',
        top: '4',
        left: '1',
        
        width: '100%',
        height: '100%',
        objectFit:"cover",
        
        pointerEvents: 'none',
      }}
    />
    <Particles
      particleColors={['#ffffff', '#ffffff']}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={false}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>
);

export default Background;