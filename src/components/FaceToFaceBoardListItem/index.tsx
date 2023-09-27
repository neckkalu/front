import React from 'react';
import './style.css';

//          component         //
// description: Board List Item 컴포넌트 //git add .
export default function FaceToFaceBoardListItem() {

  //          render          //
  // description: Board List Item 컴포넌트 렌더링 //
  return (
    <div className='board-list-item-top'>
      <div className='board-list-item-top-image'></div>

      <div></div>
      <div></div>

      <div className='board-list'>
        <div className='board-list-item'>
          <div className='board-list-item-main-box'>
            <div className='board-list-item-profile-image-box'>
              <div className='board-list-item-profile-image'></div>
            </div>
            <div className='board-list-item-title-box'>
              <div className='board-list-item-title'>{'같이 상체 운동하실 분!'}</div>
            </div>
            <div className='board-list-item-nickname-box'>
              <div className='board-list-item-nickname'>{'바벨'}</div>
            </div>
            <div className='board-list-item-write-datetime-box'>
              <div className='board-list-item-write-datetime'>{'12:00'}</div>
            </div>
            <div className='board-list-item-counts-box'>
              <div className='board-list-item-counts'>{'2/3'}</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
