import React, { useState } from 'react'
import { Dispatch, SetStateAction, forwardRef } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { AUTH_PATH, MAIN_PATH } from 'constant';

//          component          //
// description: Header 레이아웃 //
export default function Header() {

    //          state          //

    //          function          //
    // description: 페이지 이동을 위한 네비게이트 함수 //
    const navigator = useNavigate();


    // 다른 곳에 참고 or 복사해서 써먹기 //
    // event handler: 로고 클릭 이벤트 처리 함수 //
    const onLogoClickHandler = () => {
      navigator(MAIN_PATH());
    }

    // event handler: 로그인 클릭 이벤트 처리 함수 //
    const onLoginClickHandler = () => {
      navigator(AUTH_PATH());
    }
    
    // // event handler: 검색 아이콘 클릭 이벤트 처리 함수 //
    // const onSearchButtonClickHander = () {
    //   if(!status) {
    //     setStatus(!status);
    //     return;
    //   }
    // }

    // // state: 검색 버튼 상태 //
    // const [status, setStatus] = useState<Boolean>(false);

    // if (!status)
    // // render: 검색 버튼 컴포넌트 렌더링 (클릭 false)  //
    // return (
    // <div className='icon-button'>
    //   <div className='icon search-light-icon'></div>
    // </div>
    // );


    // // render: 검색 버튼 컴포넌트 렌더링 (클릭 true)  //
    // return (
    // <div className='header-search-input-box'> 
    //   <input className='header-search-input' type='text' placeholder='검색어를 입력해주세요.' />
    //   <div className='icon-button'>
    //     <div className='icon search-light-icon'><div/>
    //   </div>
    // </div>
    // );



    // // compoent: 검색 버튼 컴포넌트  //
    // const SearchButton = () => {
    //   //  render: 검색 버튼 컴포넌트 렌더링  //
    //   return (
    //     <div className='icon-button'>
    //       <div className='search-light-icon'></div>
    //     </div>
    //   );
    // }

    
  return (
    <div id="header">
      <div className='header-container'>
        <div className="header-left" onClick={onLogoClickHandler}>
          <div className="header-left-logo-icon"></div>
          <div className="header-left-logo-text">우리 동네 운동 친구</div>
        </div>
        <div className="header-right">
          <div className="header-right-login-button" onClick={onLoginClickHandler}>로그인</div>
        </div>
      </div>
    </div>
    
  )
}
