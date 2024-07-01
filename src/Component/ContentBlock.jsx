import React from "react";
import logo from "../assets/Images/divy.png";

const ContentBlock = () => {
  return (
    <>
      <div className='content-block-bg-img'></div>
      <div className='content-block'>
        <div className='content-title'>
          <span>Frontend Developer</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet fugit
            dolorum dignissimos! Ipsa possimus, animi ipsam consectetur fugit
            officia quas necessitatibus accusantium dolorem molestias blanditiis
            nostrum. Ipsam cum assumenda quidem. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aperiam magnam in quam quidem vero!
            Earum optio minima quas laborum ut? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. mnis vero. Esse dignissimos mollitia
            quod quae.
          </p>
        </div>
        <img src={logo} alt='' />
      </div>
    </>
  );
};

export default ContentBlock;
