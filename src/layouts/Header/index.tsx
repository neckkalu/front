import React, { useEffect, useState } from 'react'
import { Dispatch, SetStateAction, forwardRef } from 'react';
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { AUTH_PATH, MAIN_PATH } from 'constant';
import { useCookies } from 'react-cookie';
import { useUserStore } from 'stores';

//          component          //
// description: Header 레이아웃 //
export default function Header() {

    //          state          //

    //          function          //
    // description: 페이지 이동을 위한 네비게이트 함수 //
    const navigator = useNavigate();

    // description: Cookie 상태 //
    const [cookies, setCookie] = useCookies();

    // description: url 경로 상태 //
    const { pathname } = useLocation();

      // description: 로그인 상태 //
    const [login, setLogin] = useState<boolean>(false);

    
    // description: 로그인 유저 정보 상태 //
    const { user, setUser } = useUserStore();

    // description: 현재 페이지가 인증 화면인지 여부 //
    const isAuth = pathname === AUTH_PATH();

    
    // 다른 곳에 참고 or 복사해서 써먹기 //
    // event handler: 로고 클릭 이벤트 처리 함수 //
    const onLogoClickHandler = () => {
      navigator(MAIN_PATH());
    }

    // event handler: 로그인 클릭 이벤트 처리 함수 //
    const onLoginClickHandler = () => {
      navigator(AUTH_PATH());
    }
    
    // description: 로그아웃 버튼 클릭 이벤트 //
  const onSignOutButtonClickHandler = () => {
    setCookie('accessToken', '', { expires: new Date(), path: MAIN_PATH() });
    setLogin(false);
    setUser(null);
    navigator(MAIN_PATH());
  }

    //          effect          //
  // description: 로그인 유저 정보가 바뀔 때마다 실행 //
  useEffect(() => {
    setLogin(user !== null);
  }, [user]);


  return (
    <div id="header">
      <div className='header-container'>
        <div className="header-left" onClick={onLogoClickHandler}>
          <div className="header-left-logo-icon"></div>
          <div className="header-left-logo-text">우리 동네 운동 친구</div>
        </div>
        <div className="header-right">
        {!isAuth && (
          login ? (<div className='header-right-login-button' onClick={onSignOutButtonClickHandler}>로그아웃</div>) :
                  (<div className='header-right-login-button' onClick={onLoginClickHandler}>로그인</div>)
        )}
        </div>
      </div>
    </div>
    
  )
}
