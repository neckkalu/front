import { Dispatch, SetStateAction, forwardRef } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { FILTER_PATH } from 'constant';

export default function MainPage() {

  const navigator = useNavigate();
  
  // event handler: 찾기버튼 클릭 이벤트 처리 함수 //
  const onFTFHandler = () => {
    navigator(FILTER_PATH());
  }

  //          render          //
  // description: Board List Item 컴포넌트 렌더링 //
  return (
    <div>
      <div className='MainPage-background-image'></div>
      <div className='SelectBox'>
        <div className='FTFBoard' onClick={onFTFHandler}>
          <div className='FTFBoardName'>대면</div>
        </div>
        <div className='Board'>
          <div className='BoardName'>비대면</div>
        </div>
      </div>
    </div>
  )
}