import { Dispatch, SetStateAction, forwardRef, useState } from 'react';
import './style.css';
import { BOARD_PATH, FILTER_PATH } from 'constant';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {

  const navigator = useNavigate();

  // description: 마우스 호버 이벤트 //
  const [hover, setHover] = useState<string>('');



  // event handler: 찾기버튼 클릭 이벤트 처리 함수 //
  const onFTFBoardButtonClickHandler = () => {
    navigator(FILTER_PATH());
  }

  const onBoardButtonClickHandler = () => {
    navigator(BOARD_PATH());
  }

  //          render          //
  // description: Board List Item 컴포넌트 렌더링 //
  return (
    <div>
      <div className='MainPage-background-image'></div>
      <div className='SelectBox'>
        <div className='FTFBoard' onClick={onFTFBoardButtonClickHandler}>
          <div className={hover ? 'FTFBoardName' : 'FTFBoardExplanation'} onMouseEnter={() => setHover('key')} onMouseLeave={() => setHover('')}>
              {/* {
                icon === INPUT_ICON.ON ? (<div className='eye-light-on-icon'></div>) :
                icon === INPUT_ICON.OFF ? (<div className='eye-light-off-icon'></div>) :
                icon === INPUT_ICON.ARROW ? (<div className='input-rigth-arrow-icon'></div>) : 
                (<></>)
              } */}
          </div>
        </div>
        <div className='Board' onClick={onBoardButtonClickHandler}>
          <div className='BoardName'>비대면</div>
        </div>
      </div>
    </div>
  )
}