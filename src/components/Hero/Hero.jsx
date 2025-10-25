import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile1.jpg';

// Import social icons from react-icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const titles = ["Frontend Developer", "Editor", "Competitive Programmer"];

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === titles.length) return;

    if (subIndex === titles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    setText(titles[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="profile" />

      {/* Name */}
      <h1>I'm <span className="hero-name">SRIRAM S</span></h1>

      {/* Typing animation text */}
      <h2 className="hero-title">
        {text}
        <span className="cursor">|</span>
      </h2>
      {/* Social Media Icons */}
      <div className="hero-socials">
        <a
          href="https://www.linkedin.com/in/sriram-s-a7382a329/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon linkedin" />
        </a>

        <a
          href="https://github.com/Sriram7755"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-icon github" />
        </a>

        <a
          href="https://www.instagram.com/__.sriii._202?igsh=MWZ2eXQ4MGxmdTBmaA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon instagram" />
        </a>
      </div>

      {/* Resume Button */}
      <div className="hero-action">
        <div className="hero-resume">
        <a href="https://drive.google.com/drive/folders/1XJbHzJlP9rC2C3cH0yQykbCMNrMiKYdN">My Resume </a> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
