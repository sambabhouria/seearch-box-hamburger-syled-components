import React from "react";
import { NavLink} from 'react-router-dom'
import styled from 'styled-components';
import { MediaQuery } from './breakpoints';
import 'font-awesome/css/font-awesome.min.css';


import './nav.css';


const Nav = styled.nav`
  display: flex;
  width: 100%;
  background: #0a5071;
  position: relative;
  justify-content: space-between;
  text-align: center;
  padding: 15px 30px;

  .icon {
    font-size: 35px;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
  }

  .active {
    color: white;
    background: #069370;
  }

  ol {
    display: flex;
    list-style: none;
    margin: auto 0;
  }

  ol li {
    margin: 0 2px;
  }

  ol li a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 5px 10px;
  }

  ol li:hover a {
    background: #fff;
    color: #0a5071;
  }

  .search_box {
    display: flex;
    margin: auto 0;
    height: 35px;
    line-height: 35px;
  }

  .search_box input {
    border: none;
    outline: none;
    background: #fff;
    height: 100%;
    padding: 0 10px;
    font-size: 20px;
    width: 350px;
  }

  .search_box span {
    color: #0a5071;
    font-size: 20px;
    background: #fff;
    height: 100%;
    padding: 8px;
    position: relative;
    cursor: pointer;
    z-index: 1;
  }

  .search_box span:hover {
    color: #fff;
  }

  .search_box span::after {
    height: 100%;
    width: 0%;
    content: "";
    background: #ff003c;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    transition: 0.3s;
  }

  .search_box span:hover::after {
    width: 100%;
  }

  .bar {
    position: relative;
    margin: auto;
    display: none;
  }

  .bar span {
    position: absolute;
    color: #fff;
    font-size: 35px;
  }

  @media ${MediaQuery.mobileOrTablet} {

    display: block;
    padding: 0;

    .icon {
      display: inline-block;
      padding: 15px 30px;
    }

    .search_box {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      margin-bottom: 15px;
    }

    .search_box input {
      width: 90%;
    }

    ol {
      display: flex;
      flex-direction: column;
      background: #fff;
      height: 0;
      visibility: hidden;
      transition: 0.3s;
    }

    ol li {
      text-align: center;
      transition: 0.3s 0.1s all;
      opacity: 0;
    }

    ol li a {
      color: #000;
      font-size: 28px;
      padding: 25px;
      display: block;
    }

    ol li:nth-child(1) {
      transform: translateX(-150px);
    }

    ol li:nth-child(2) {
      transform: translateX(-200px);
    }
    ol li:nth-child(3) {
      transform: translateX(-250px);
    }

    ol li:nth-child(4) {
      transform: translateX(-300px);
    }

    ol li:nth-child(5) {
      transform: translateX(-350px);
    }

    .bar {
      display: block;
      position: absolute;
      top: 20px;
      right: 80px;
      cursor: pointer;
    }

    .bar #times {
      display: none;
    }

    #check:checked ~  .bar #times {
      display: block;
    }

    #check:checked ~ .bar #bars {
      display: none;
    }

    #check:checked ~  ol {
      visibility: visible;
      height: 465px;
    }
    #check:checked ~  ol li:nth-child(1),
    #check:checked ~  ol li:nth-child(2),
    #check:checked ~  ol li:nth-child(3),
    #check:checked ~  ol li:nth-child(4),
    #check:checked ~  ol li:nth-child(5) {
      transform: translateX(0);
      opacity: 1;
    }
  }

`;

const B = styled.b`
  color: red;
`;

const Section = styled.section`
  background: rgb(241, 242, 246);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  background-position: center;
  background-size: cover;
  filter: brightness(90%);
`;

export const Navbar = () => {

  const inputRef = React.useRef(null)

  const toogleHamburgerMenu = () => {
    if(inputRef.current.checked)
    inputRef.current.checked = false;

  };

  return (
   <>
    <input type='checkbox' id='check' ref={inputRef} />
    <Nav>
      <div className='icon'><B>P</B>ro Design</div>
      <div className='search_box'>
        <input type='search' placeholder= 'Search here' />
        <span className='fa fa-search'></span>
      </div>
      <ol onClick={toogleHamburgerMenu}>
        <li><NavLink exact activeClassName="active" to='/'>home</NavLink></li>
        <li><NavLink exact activeClassName="active" to='/contact'>contacts</NavLink></li>
        <li><NavLink exact activeClassName="active" to='/services'>services</NavLink></li>
        <li><NavLink exact activeClassName="active" to='/about'>about</NavLink></li>
        <li><NavLink exact activeClassName="active"to='/login'>login here</NavLink></li>
      </ol>
      <label htmlFor='check' className='bar'>
        <span className='fa fa-bars' id='bars'></span>
        <span className='fa fa-times' id='times'></span>

      </label>
    </Nav>
    <Section></Section>
   </>
  )
}
