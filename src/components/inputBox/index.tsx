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


// description: inputBox 컴포넌트 //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

//          state:properties          //
const { label, type, placeholder, value, error } = props;

//         event handler: input값 변경 이벤트 처리 함수          //


//         render: Input Box 컴포넌트           //
  return (
    <div className='inputbox'>
      <div className='inputbox-label'>{'비밀번호*'}</div>
      <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
        <input className='input' placeholder={placeholder} value={value}/>
        <div className='icon-button'>
          <div className='eye-light-off-icon'></div>
        </div>
      </div>
      <div className='inputbox-message'>{'비밀번호는 8자 이상 입력해주세요.'}</div>
      <div></div>
    </div>
  )

})

export default InputBox;

