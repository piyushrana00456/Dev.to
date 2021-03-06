import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { userContext } from "../../App";

export const NavBar = () => {
  const [hover, setHover] = useState(false);
  const { state, setState } = useContext(userContext);
  return (
    <NavBar>
      <div className="navbar">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="left-container">
          <Link to="/">
            <div className="devlogo">
              <svg width="50" height="40" viewBox="0 0 50 40" fill="red">
                <rect
                  width="50"
                  height="40"
                  rx="3"
                  style={{ fill: "black" }}
                ></rect>
                <path
                  d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
                  style={{ fill: "white" }}
                ></path>
              </svg>
            </div>
          </Link>
          <div className="search">
            <input type="text" placeholder="Search..." />
            <div>
              <FiSearch />
            </div>
          </div>
        </div>
        <div className="right-container">
          {!state?.status && (
            <div className="login">
              <Link>
                <div className="login-btn">Login in</div>
              </Link>
              <Link>
                <div className="signUp">Create account</div>
              </Link>
              <div className="chat">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="ajs1aeda7ekzuy6349fdorv7amp95o4p"
                  class="crayons-icon"
                >
                  <title id="ajs1aeda7ekzuy6349fdorv7amp95o4p">Connect</title>
                  <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 012 12zm4.828 8H12a8 8 0 10-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 11-8 0z"></path>
                </svg>
              </div>
              <div className="notification">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="a8bd2wi77fusod2nxejp07vqha0qcfz2"
                  class="crayons-icon"
                >
                  <title id="a8bd2wi77fusod2nxejp07vqha0qcfz2">
                    Notifications
                  </title>
                  <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                </svg>
              </div>
              <div className="avatar">
                <img src="" alt="" />
                {hover && (
                  <div className="control">
                    <div className="profile">
                      <div>
                        <p></p>
                        <span></span>
                      </div>
                    </div>
                    <div className="dashboard">
                      <Link></Link>
                      <Link></Link>
                      <Link></Link>
                    </div>
                    <div className="signOut">
                      <span>Sign Out</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </NavBar>
  );
};
