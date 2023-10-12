import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, forwardRef, useState } from 'react';
import './style.css';

//           interface: Input Box 컴포넌트           //
interface Props {
  label: string;
  type: 'text' | 'password'
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>
  error: boolean;

  icon?: string;
  onButtonClick?: () => void;

  message?: string;

  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}


// description: inputBox 컴포넌트 //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {


// event handler: 아이콘 클릭 이벤트 처리 함수 //
const [onClick, offClick] = useState();

const handlerNow =()=>{
  
}

//          state:properties          //
const {value, error, icon, message } = props;
const { setValue, onButtonClick, onKeyDown } = props;

//         event handler: input값 변경 이벤트 처리 함수          //
const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  setValue(value);
}

// event handler 키 다운 이벤트 //
const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
  if(!onKeyDown) return;
  onKeyDown(event);
}



//         render: Input Box 컴포넌트           //
  return (
    <div className='inputbox'>
        <div className="login-background-image">
          <div className='login-page'>
            <h2 className='membership'>{'회원가입'}</h2>
            <div>
              <div className='inputbox-label'>{'이메일 주소*'}</div>
              <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input ref={ref} type="email" className='input' placeholder={"이메일을 입력해주세요"}/>
                {onButtonClick !== undefined}
              </div>
              {message !== undefined && (<div className='inputbox-message'>{"이메일 주소 포맷이 맞지않습니다. / 중복되는 이메일 주소 입니다."}</div>)}
            </div>
            <div>
              <div className='inputbox-label'>{'비밀번호*'}</div>
              <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input ref={ref} className='input' type="password" placeholder={"비밀번호를 입력해주세요"} />
                <div className='icon-button'>
                  <div className='eye-light-off-icon'></div>
                </div>
              </div>
              {message !== undefined && (<div className='inputbox-message'>{"비밀번호는 8자 이상 입력해주세요."}</div>)}
            </div>
            <div>
              <div className='inputbox-label'>{'비밀번호 확인*'}</div>
              <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input ref={ref} className='input' type= "password" placeholder="비밀번호를 입력해주세요"/>
                <div className='icon-button'>
                  <div className='eye-light-off-icon'></div>
                </div>
              </div>
              {message !== undefined && (<div className='inputbox-message'>{"비밀번호가 일치하지 않습니다."}</div>)}
            </div>
            <div className='button-box'>
              <div className='nextpage'>
                {'다음 단계'}
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )

})

export default InputBox;

