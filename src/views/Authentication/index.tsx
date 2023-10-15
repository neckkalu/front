import React, { useState } from "react";
import './style.css';
import { useCookies } from 'react-cookie';
import InputBox from "components/InputBox";
import ResponseDto from "apis/response/Response.dto";
import { useNavigate } from "react-router-dom";
import { MAIN_PATH } from "constant";
import SignInResponseDto from "interface/response/SignInResponseDto";
import SignInRequestDto from "interface/request/SignInRequestDto";
import { signInMock, userMock } from "mocks";
import { signInRequest } from "apis";
import { useUserStore } from "stores";

//     component: 인증화면 컴포넌트      //
export default function Authentication() {


    //          state          //
  // description: Cookie 상태 //
  const [cookies, setCookie] = useCookies();

  // description: 로그인 혹은 회원가입 뷰 상태 //
  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

  //          function          //
  // description: 페이지 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();


  const SignInCard = () => {


    
    //          state          //
    // description: 로그인 유저 정보 상태 //
    const { setUser } = useUserStore();

    // description: 비밀번호 인풋 타입 상태 //
    const [showPassword, setShowPassword] = useState<boolean>(false);
    // description: 로그인 에러 상태 //
    const [error, setError] = useState<boolean>(false);
    // description: 이메일 입력 값 상태 //
    const [email, setEmail] = useState<string>(signInMock.email);
    // description: 비밀번호 입력 값 상태 //
    const [password, setPassword] = useState<string>(signInMock.password);

    //          function          //
    const signInResponseHandler = (result: SignInResponseDto | ResponseDto) => {
      const { code } = result;
      // if (code === 'DM') setError(true);
      if (code === 'DE') alert('데이터베이스 에러입니다.');
      if (code !== 'SU') return;

      const { token, expiredTime } = result as SignInResponseDto;

      const now = new Date().getTime();
      const expires = new Date(now + expiredTime * 1000);

      setCookie('accessToken', token, { expires, path: MAIN_PATH() });
      navigator(MAIN_PATH());
    }
    //          event handler          //
    // description: 비밀번호 타입 변경 버튼 클릭 이벤트 //
    const onPasswordIconClickHandler = () => {
      setShowPassword(!showPassword);
    }
    // description: 회원가입 이동 클릭 이벤트 //
    const onSignUpClickHandler = () => {
      setView('sign-up');
    }
    // description: 로그인 버튼 클릭 이벤트 //
    const onSignInButtonClickHandler = async () => {

      const data: SignInRequestDto = {
        email,
        password
      }
      
      signInRequest(data).then(signInResponseHandler);
    }

    //          component          //

    //          effect          //

    //          render          //
    return (
      <div className='inputbox'>
        <div className="login-background-image">
          <div className="login-page">
            <h2 className='membership'>{'로그인'}</h2>
            <div>
              <div className='inputbox-label'>{'이메일 주소*'}</div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }



//   const SignUpCard = () => {
// //     render: 인증화면 컴포넌트 랜더링      //
//     return (
//       <div className='inputbox'>
//           <div className="login-background-image">
//             <div className='login-page'>
//               <h2 className='membership'>{'회원가입'}</h2>
//               <div>
//                 <div className='inputbox-label'>{'이메일 주소*'}</div>
//                 <div className={emailError ? 'inputbox-container-error' : 'inputbox-container'}>
//                   <input ref={emailRef} type="email" className='input' placeholder={"이메일을 입력해주세요"} value={email} onChange={onEmailChangeHandler} />
//                 </div>
//                 {emailError && (<div className='inputbox-message'>{"이메일 주소 포맷이 맞지않습니다. / 중복되는 이메일 주소 입니다."}</div>)}
//               </div>
//               <div>
//                 <div className='inputbox-label'>{'비밀번호*'}</div>
//                 <div className={passwordError ? 'inputbox-container-error' : 'inputbox-container'}>
//                   <input ref={passwordRef} className='input' type="password" placeholder={"비밀번호를 입력해주세요"} />
//                   <div className='icon-button'>
//                     <div className='eye-light-off-icon'></div>
//                   </div>
//                 </div>
//                 {passwordError && (<div className='inputbox-message'>{"비밀번호는 8자 이상 입력해주세요."}</div>)}
//               </div>
//               <div>
//                 <div className='inputbox-label'>{'비밀번호 확인*'}</div>
//                 <div className={passwordCheckError ? 'inputbox-container-error' : 'inputbox-container'}>
//                   <input ref={passwordCheckRef} className='input' type= "password" placeholder="비밀번호를 입력해주세요"/>
//                   <div className='icon-button'>
//                     <div className='eye-light-off-icon'></div>
//                   </div>
//                 </div>
//                 {passwordCheckError && (<div className='inputbox-message'>{"비밀번호가 일치하지 않습니다."}</div>)}
//               </div>
//               <div className='button-box'>
//                 <div className='nextpage'>
//                   {'다음 단계'}
//                 </div>
//               </div>
//             </div>
//           </div>
        
//       </div>
//     )
//   }
// }

  return (
    <SignInCard />
  )
}