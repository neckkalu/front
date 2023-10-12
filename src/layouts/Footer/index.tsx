import React from 'react'
import './style.css';
export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-top">
      <div className="footer-logo-icon"></div>
    <div className="footer-logo-text">우리 동네 운동 친구</div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
        <div className="footer-email">dlfledsp@naver.com</div>
      </div> 
        <div className="footer-bottom-right">

          <div className="footer-icon-button">
            <div className="footer-mysql-icon"></div>
          </div>
          <div className="footer-icon-button">
            <div className="footer-github-icon"></div>
          </div>
          <div className="footer-icon-button">
            <div className="footer-notion-icon"></div>
          </div>
    </div>  
  </div>
  </div>
  )
}
