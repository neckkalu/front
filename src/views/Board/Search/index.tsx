import React, { useState } from "react";
import './style.css';
import Pagination from "components/Pagination";
import { BOARD_PATH, COUNT_BY_PAGE } from "constant";
import { usePagination } from "hooks";
import BoardListResponseDto from "interface/response/board/BoardListItemResponseDto";
import { useNavigate } from "react-router-dom";


//     component: 게시물 컴포넌트      //
export default function Board() {

  // description: 페이지네이션과 관련된 상태 및 함수 //
  const { totalPage, currentPage, currentSection, onPageClickHandler, onNextClickHandler, onPreviousClickHandler, changeSection } = usePagination();
  // description: 게시물 수를 저장하는 상태 //
  const [boardCount, setBoardCount] = useState<number>(0);
  
  const [pageBoardList, setPageBoardList] = useState<BoardListResponseDto[]>([]);

  // description: 페이지 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();

  const onBoardButtonClickHandler = () => {
    navigator(BOARD_PATH());
  }

  
  const getPageBoardList = (boardList: BoardListResponseDto[]) => {
    const lastIndex = 
      boardList.length > COUNT_BY_PAGE * currentPage ? 
      COUNT_BY_PAGE * currentPage : boardList.length;
    const startIndex = COUNT_BY_PAGE * (currentPage - 1);
    const pageBoardList = boardList.slice(startIndex, lastIndex);

    setPageBoardList(pageBoardList);
  }

//     render: 게시물컴포넌트 랜더링      //  
  return (
    <div>
      <div className="MainPage-background-image"></div>
      <div className="searchMain">
        <div className="user-box">대충 유저 정보</div>
        <div className="margin20"></div>
        <div className="choice-box">
          <div className="myChattingRoom">내 채팅방</div>
          <div className="boardList" onClick={onBoardButtonClickHandler}>비대면 게시물</div>
        </div>
        <div className="board-list-item">
          <div className="margin-leftside"></div>
          <div className="board-name">제목</div>
          <div className="user-nickname">닉네임</div>
          <div className="date">날짜</div>
          <div className="people">인원수</div>
        </div>
        <div className="board-list"></div>
        <div className="vertical-divider-light-gray"></div>
        <div className="board-list"></div>
        <div className="vertical-divider-light-gray"></div>
        <div className="board-list"></div>
        <div className="vertical-divider-light-gray"></div>
        <div className="board-list"></div>
        <div className="vertical-divider-light-gray"></div>
        <div className="board-list"></div>
        <div className="vertical-divider-light-gray"></div>
        <div className="board-list"></div>
        <div className="vertical-divider-light-gray"></div>
        <div className="board-list"></div>
        <div className="vertical-divider-light-gray"></div>
        <div className="board-list"></div>
        <div className="vertical-divider-light-gray"></div>
        <div className="board-list"></div>
        <div className="vertical-divider-light-gray"></div>
        <div className="board-list"></div>
      </div>
      {boardCount !== 0 && (
        <Pagination 
          totalPage={totalPage} 
          currentPage={currentPage} 
          onPageClickHandler={onPageClickHandler} 
          onNextClickHandler={onNextClickHandler} 
          onPreviousClickHandler={onPreviousClickHandler} 
        />
      )}
    </div>
  )
}