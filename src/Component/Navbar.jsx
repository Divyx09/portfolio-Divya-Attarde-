import React from "react";

const Navbar = () => {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center navbar'>
        <div className='nav-logo'>Divya Attarde</div>
        <div className='d-flex align-items-center justif-content-center'>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact Me</a>
            </li>
            <li>
              <a href='#'>Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
