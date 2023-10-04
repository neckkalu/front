import React from "react";
import './style.css';
import InputBox from "components/InputBox";

//     component: 인증화면 컴포넌트      //
export default function Authentication() {

//     render: 인증화면 컴포넌트 랜더링      //
  return (
    <InputBox label={''} type={'text'} placeholder={''} value={''} setValue={function (value: React.SetStateAction<string>): void {
      throw new Error('Function not implemented.');
    } } error={false} />
  )
}