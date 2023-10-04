import React, { useState } from 'react';
import './App.css';
import Header from 'layouts/Header';
import InputBox from 'components/InputBox';
import membershipInputBox from 'components/membershipInputBox';
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


<<<<<<< HEAD


//             compoent: Application 컴포넌트             //
=======
>>>>>>> d344f62a02861ca86a5513223002952465e7711c
function App() {

  const [value, setValue] = useState<string>('');
  
  // render: Appliction 컴포넌트 렌더링 //
  // descrioption: 메인화면 : '/' -Main //
  // descrioption: 로그인 + 회원가입 화면:  '/auth' -Authentication //
  // descrioption: 필터링 화면:  '/Filter - Filter //
  // descrioption: 대면 게시판 : '/FaceTofaceboard' - FaceTofaceboard //
  // descrioption: 대면 게시판 상세보기 : '/FaceTofaceboard/detail:BoardNumber' - FTFBoardDetail //
  // descrioption: 대면 게시판 작성하기: '/FaceTofaceboard/write' - FTFBoardWrite //
  // descrioption: 대면 게시판 수정하기: '/FaceTofaceboard/update/:BoardNumber' - FTFBoardUpdate //
  // descrioption: 비대면 게시판 : '/board' - board //
  // descrioption: 비대면 게시판 상세보기 : '/board/detail:BoardNumber' - BoardDetail //
  // descrioption: 비대면 게시판 작성하기: '/board/write' - BoardWrite //
  // descrioption: 비대면 게시판 수정하기: '/board/update/:BoardNumber' - BoardUpdate //
  // descrioption: 마이 페이지: '/user/:userEmail' - User //
  
  
  return (
<<<<<<< HEAD
    <Routes>
      <Route element={<Container />}>
      <Route path={MAIN_PATH()} element={<Main />} />
      <Route path={AUTH_PATH()} element={<Authentication />} />
      <Route path={FILTER_PATH()} element={<Filter />} />
      <Route path={USER_PATH(':userEmail')} element={<User />} />
      <Route path={FTFBOARD_PATH()}>
        <Route path={FTFBOARD_WRITE_PATH()} element={<FTFBoardWrite />} />
        <Route path={FTFBOARD_DETAIL_PATH(':BoardNumber')} element={<FTFBoardDetail />} />
        <Route path={FTFBOARD_UPDATE_PATH(':BoardNumber')} element={<FTFBoardUpdate />} />
      </Route>
      <Route path={BOARD_PATH()}>
        <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />} />
        <Route path={BOARD_DETAIL_PATH(':BoardNumber')} element={<BoardDetail />} />
        <Route path={BOARD_UPDATE_PATH(':BoardNumber')} element={<BoardUpdate />} />
      </Route>
      <Route path='*' element={<h1>404 Not Found</h1>} />
      </Route>
      
    </Routes>
    // <>
    //   <Header />
    //   <InputBox label={''} type={'text'} placeholder={''} value={''} setValue={function (value: React.SetStateAction<string>): void {
    //     throw new Error('Function not implemented.');
    //   } } error={false} />
    //   <Footer />
    // </>
=======
    <>
      <InputBox label={''} type={'text'} placeholder={''} value={''} setValue={function (value: React.SetStateAction<string>): void {
        throw new Error('Function not implemented.');
      } } error={false} />
    </>
>>>>>>> d344f62a02861ca86a5513223002952465e7711c
  );
}

export default App;
