import { Dispatch, SetStateAction, forwardRef } from 'react';
import './style.css';

export default function MainPage() {

  //          render          //
  // description: Board List Item 컴포넌트 렌더링 //
  return (
    <div>
      <div className='MainPage-background-image'></div>
      <div className='SelectBox'>
        <div className='FTFBoard'>
          <div className='FTFBoardName'>대면</div>
        </div>
        <div className='Board'>
          <div className='BoardName'>비대면</div>
        </div>
      </div>
    </div>
  )
}