import React from 'react';


import "./about.css";
const AboutPage = () => {
  return (
    <div className="about-page">
       {/* <h1>My Blog</h1> */}
      <div className="about-content">
        <div className="about-header">
          <h1>About Us</h1>
          <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp" alt="About Us" />
       
       
       
       
        </div>
        <div className="about-description">
          <p>
            Welcome to our blog! We strive to deliver high-quality content on various topics
            including technology, lifestyle, and more.
          </p>
          <p>
            Our mission is to inform, inspire, and engage our readers. Whether you're looking for
            informative articles or entertaining reads, you'll find it here!
          </p>
          <p>
            Explore our blog to discover a world of insightful content. Join our community and
            let's embark on this journey together.
          </p>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} My Blog</p>
    </div>
  );
};

export default AboutPage;
