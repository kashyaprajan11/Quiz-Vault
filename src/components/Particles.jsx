import React, { useState, useEffect } from "react";

const Particles = () => {
  const [particles, setParticles] = useState([]);

  function createParticle() {
    const particle = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 100,
      color: "#f00",
    };

    setParticles([...particles, particle]);
  }

  console.log("particles", particles);

  function updateParticles() {
    for (let i = 0; i < particles.length; i++) {
      particles[i].x += Math.random() * 10;
      particles[i].y += Math.random() * 10;

      if (particles[i].x < 0 || particles[i].x > window.innerWidth) {
        particles[i].x = Math.random() * window.innerWidth;
      }

      if (particles[i].y < 0 || particles[i].y > window.innerHeight) {
        particles[i].y = Math.random() * window.innerHeight;
      }
    }
  }

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      createParticle();
    }
    setInterval(updateParticles, 100);
  }, []);

  return (
    <div>
      {particles.map((particle) => (
        <div
          key={particle.x}
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.color,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
