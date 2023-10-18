import { Dispatch, SetStateAction, forwardRef, useState } from 'react';
import './style.css';
import { BOARD_PATH, FILTER_PATH } from 'constant';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {

  const navigator = useNavigate();

  // description: FTFboard마우스 호버 이벤트 //
  const [FTFhover, FTFsetHover] = useState(false);

   // description: board마우스 호버 이벤트 //
   const [hover, setHover] = useState(false);



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
        <div className='FTFBoard' onMouseEnter={() => FTFsetHover(true)} onMouseLeave={() => FTFsetHover(false)} onClick={onFTFBoardButtonClickHandler}>
          {
            FTFhover ?  <div className='FTFBoardName-Explanation'>대면 서비스는 동네 사람들과 직접 대면하여 운동을 즐길 수 있는 서비스 입니다.</div> : 
                        <div className='FTFBoardName'>대면</div>
          }
        </div>
        <div className='Board' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onBoardButtonClickHandler}>
          {
            hover ? <div className='BoardName-Explanation'>비대면 서비스는 온라인으로 커뮤니티에서 운동에 관한 정보를 얻을 수 있는 서비스 입니다.</div> : 
                    <div className='BoardName'>비대면</div>
          }
        </div>
      </div>
    </div>
  )
}