import React, { useEffect, useState } from "react";
import './style.css';
import Pagination from "components/Pagination";
import { BOARD_PATH, COUNT_BY_PAGE, MAIN_PATH } from "constant";
import { usePagination } from "hooks";
import BoardListResponseDto from "interface/response/board/BoardListItemResponseDto";
import { useNavigate, useParams } from "react-router-dom";
import BoardListItem from "components/BoardListItem";


//     component: 게시물 컴포넌트      //
export default function Board() {

  //          state          //
  // description: 검색어 path parameter 상태 //
  const { searchWord } = useParams();
  // description: 페이지네이션과 관련된 상태 및 함수 //
  const { totalPage, currentPage, currentSection, onPageClickHandler, onNextClickHandler, onPreviousClickHandler, changeSection } = usePagination();
  // description: 게시물 수를 저장하는 상태 //
  const [boardCount, setBoardCount] = useState<number>(0);
  // description: 전체 게시물 리스트 상태 //
  const [searchList, setSearchList] = useState<BoardListResponseDto[]>([]);
  // description: 현재 페이지에서 보여줄 게시물 리스트 상태 //
  const [pageBoardList, setPageBoardList] = useState<BoardListResponseDto[]>([]);
  // description: 연관 검색어 리스트 상태 //
  const [relationList, setRelationList] = useState<string[]>([]);
  // description: 이전 검색어 상태 //
  const [relationWord, setRelationWord] = useState<string | undefined>(undefined);


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

  //          effect          //
  // description: 검색어 상태가 바뀔때 마다 해당 검색어의 검색 결과 불러오기 //
  // useEffect(() => {
  //   if (!searchWord) {
  //     alert('검색어가 올바르지 않습니다.');
  //     navigator(MAIN_PATH());
  //     return;
  //   }

  //   getSearchBoardListRequest(searchWord, relationWord).then(getSearchBoardListResponseHandler);
  //   getRelationListRequest(searchWord).then(getRelationListResponseHandler);
  //   setRelationWord(searchWord);
  // }, [searchWord]);s


  // description: 현재 색션이 바뀔때 마다 페이지 리스트 변경 //
  useEffect(() => {
    if (boardCount) changeSection(boardCount, COUNT_BY_PAGE);
  }, [currentSection]);

  // description: 현재 페이지가 바뀔때 마다 검색 게시물 분류하기 //
  useEffect(() => {
    getPageBoardList(searchList);
  }, [currentPage]);

//     render: 게시물컴포넌트 랜더링      //  
  return (
    <div>
      <div className="MainPage-background-image"></div>
      <div className="searchMain">
        <div className="user-box">
          대충 유저 정보
        </div>
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
        <div className='search-board-list'>
            {pageBoardList.map((item) => (<BoardListItem item={item} />))}
        </div>
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