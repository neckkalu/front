import React from 'react';

//          component         //
// description: Board List Item 컴포넌트 //
export default function FaceToFaceBoardListItem() {

  //          render          //
  // description: Board List Item 컴포넌트 렌더링 //
  return (
    <div className='board-list-item'>
      <div className='board-list-item-main-box'>
        <div className='board-list-item-profile-image'></div>
        <div className='board-list-item-title'></div>
        <div className='board-list-item-nickname'></div>
        <div className='board-list-item-write-datetime'></div>
        <div className='board-list-item-counts'></div>
      </div>
    </div>
  )
}
