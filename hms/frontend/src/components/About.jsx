import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Magna tempus class purus taciti maximus. Commodo neque mollis molestie dis vestibulum ipsum. Netus turpis mollis penatibus metus viverra sapien purus bibendum. Elit commodo rhoncus ultrices nec pulvinar ultrices.
          </p>
          <Link to="/menu">
            Explore Menu
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
