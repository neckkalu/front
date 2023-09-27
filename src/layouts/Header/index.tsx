import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

//          component          //
// description: Header 레이아웃 //
export default function Header() {

    //          state          //

    //          function          //
    // description: 페이지 이동을 위한 네비게이트 함수 //
    //const navigator = useNavigate();

    
  return (
    <div id="header">
      <div className="header-left">
      <div className="header-left-logo-icon"></div>
      <div className="header-left-logo-text">우리 동네 운동 친구</div>
      </div>
      <div className="header-right">

      </div>
    </div>
    
  )
}
