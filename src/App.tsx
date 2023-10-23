import React, { useState } from 'react';
import './App.css';
import Header from 'layouts/Header';
import InputBox from 'components/InputBox';
import FaceToFaceBoardListItem from 'components/FaceToFaceBoardListItem';
import Footer from 'layouts/Footer';
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import Authentication from 'views/Authentication';
import Filter from 'views/Filter';
import User from 'views/User';
import Container from 'layouts/Container';
import BoardDetail from 'views/Board/Detail';
import BoardUpdate from 'views/Board/Update';
import BoardWrite from 'views/Board/Write';
import FTFBoardDetail from 'views/FaceTofaceboard/Detail';
import FTFBoardUpdate from 'views/FaceTofaceboard/Update';
import FTFBoardWrite from 'views/FaceTofaceboard/Write';
import { MAIN_PATH, AUTH_PATH, FILTER_PATH, USER_PATH, FTFBOARD_PATH, FTFBOARD_WRITE_PATH, FTFBOARD_DETAIL_PATH, FTFBOARD_UPDATE_PATH, BOARD_WRITE_PATH, BOARD_DETAIL_PATH, BOARD_UPDATE_PATH, BOARD_PATH  } from 'constant';
import FTFBoard from 'views/FaceTofaceboard/Search';
import Board from 'views/Board/Search';


function App() {

  const [value, setValue] = useState<string>('');
  
  // render: Appliction 컴포넌트 렌더링 //
  // description: 메인화면 : '/' -Main //
  // description: 로그인 + 회원가입 화면:  '/auth' -Authentication //
  // description: 필터링 화면:  '/Filter - Filter //
  // description: 대면 게시판 : '/FaceTofaceboard' - FaceTofaceboard //
  // description: 대면 게시판 상세보기 : '/FaceTofaceboard/detail:BoardNumber' - FTFBoardDetail //
  // description: 대면 게시판 작성하기: '/FaceTofaceboard/write' - FTFBoardWrite //
  // description: 대면 게시판 수정하기: '/FaceTofaceboard/update/:BoardNumber' - FTFBoardUpdate //
  // description: 비대면 게시판 : '/board' - board //
  // description: 비대면 게시판 상세보기 : '/board/detail:BoardNumber' - BoardDetail //
  // description: 비대면 게시판 작성하기: '/board/write' - BoardWrite //
  // description: 비대면 게시판 수정하기: '/board/update/:BoardNumber' - BoardUpdate //
  // description: 마이 페이지: '/user/:userEmail' - User //
  
  
  return (
    <Routes>
      <Route element={<Container />}>
      <Route path={MAIN_PATH()} element={<Main />} />
      <Route path={AUTH_PATH()} element={<Authentication />} />
      <Route path={FILTER_PATH()} element={<Filter />} />
      <Route path={FTFBOARD_PATH()} element={<Board />}>
        <Route path={FTFBOARD_WRITE_PATH()} element={<FTFBoardWrite />} />
        <Route path={FTFBOARD_DETAIL_PATH(':BoardNumber')} element={<FTFBoardDetail />} />
        <Route path={FTFBOARD_UPDATE_PATH(':BoardNumber')} element={<FTFBoardUpdate />} />
      </Route>
      <Route path={BOARD_PATH()} element={<FTFBoard />}>
        <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />} />
        <Route path={BOARD_DETAIL_PATH(':BoardNumber')} element={<BoardDetail />} />
        <Route path={BOARD_UPDATE_PATH(':BoardNumber')} element={<BoardUpdate />} />
      </Route>
      <Route path='*' element={<h1>404 Not Found</h1>} />
      </Route>
      
    </Routes>
  );
}

export default App;
