import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { BOARD_DETAIL_PATH } from 'constant';
import BoardListResponseDto from 'interface/response/board/BoardListItemResponseDto';
import { dateFormat } from 'utils';

interface Props {
  item: BoardListResponseDto;
}

//          component         //
// description: Board List Item 컴포넌트 //git add .
export default function BoardListItem({ item }: Props) {

    //          state          //
  // description: 속성으로 받아오는 게시물 관련 상태 //
  const { boardNumber, title, contents, imageUrl } = item;
  const { writerProfileImage, writerNickname, writeDatetime } = item;
  const { favoriteCount, commentCount, viewCount } = item;


  // description: 페이지 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();

  // description: 컴포넌트 클릭 이벤트 //
  const onClickHandler = () => {
    navigator(BOARD_DETAIL_PATH(boardNumber));
  }

  //          render          //
  // description: Board List Item 컴포넌트 렌더링 //
  return (
    <div>
      <div className="board-list">
        <div className="margin-leftside"></div>
        <div className="board-name">{ title }</div>
        <div className="user-nickname">{ writerNickname }</div>
        <div className="date">{ dateFormat(writeDatetime) }</div>
        <div className="people">인원수</div>
      </div>
    </div>
  )
}
