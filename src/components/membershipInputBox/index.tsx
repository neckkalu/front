import { Dispatch, SetStateAction, forwardRef } from 'react';
import './style.css';

//           interface: Input Box 컴포넌트           //
interface Props {
  label: string;
  type: 'text' | 'password'
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>
  error: boolean;
}


// description: membershipinputBox 컴포넌트 //
const membershipInputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

//          state:properties          //
const { label, type, placeholder, value, error } = props;

//         event handler: input값 변경 이벤트 처리 함수          //


//         render: Input Box 컴포넌트           //
  return (
    <div className='inputbox'>
      <head></head>
        <div className="login-background-image">
          <div className='login-page'>
            <h2 className='membership'>{'회원가입'}</h2>
            <div>
              <div className='inputbox-label'>{'이메일 주소*'}</div>
              <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input className='input' type= "email" placeholder="이메일 주소를 입력해주세요"/>
                {/* 비밀번호 */}
              </div>
            <div className='inputbox-message'>{'이메일 주소 포맷이 맞지않습니다. / 중복되는 이메일 주소 입니다.'}</div>
            </div>
            <div>
              <div className='inputbox-label'>{'비밀번호 확인*'}</div>
              <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input className='input' type= "password" placeholder="비밀번호를 입력해주세요"/>
                <div className='icon-button'>
                  <div className='eye-light-off-icon'></div>
                </div> {/* 비밀번호 */}
              </div>
              <div className='inputbox-message'>{'비밀번호는 8자 이상 입력해주세요.'}</div>
            </div>
            <div>
              <div className='inputbox-label'>{'비밀번호 확인*'}</div>
              <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input className='input' type= "password" placeholder="비밀번호를 입력해주세요"/>
                <div className='icon-button'>
                  <div className='eye-light-off-icon'></div>
                </div> {/* 비밀번호 */}
              </div>
              <div className='inputbox-message'>{'비밀번호는 8자 이상 입력해주세요.'}</div>
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

export default membershipInputBox;

