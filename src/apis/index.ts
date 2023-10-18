import axios from 'axios';
import { SignInRequestDto, SignUpRequestDto } from "interface/request/auth";
import SignInResponseDto from "interface/response/auth/SignInResponseDto";
import SignUpResponseDto from 'interface/response/auth/SignUpResponseDto';
import ResponseDto from "../interface/response/Response.dto";

const API_DOMAIN = 'http://localhost:3000/';

const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;
const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;

export const signUpRequest = async (data: SignUpRequestDto) => {
  const result = 
    await axios.post(SIGN_UP_URL(), data)
    .then((response) => {
      const responseBody: SignUpResponseDto = response.data;
      const { code } = responseBody;
      return code;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      const { code } = responseBody;
      return code;
    });
  return result;
}


export const signInRequest = async (data: SignInRequestDto) => {
  const result = 
    await axios.post(SIGN_IN_URL(), data)
    .then((response) => {
      const responseBody: SignInResponseDto = response.data;
      return responseBody;
    })
    .catch((error) => {
      const responseBody: ResponseDto = error.response.data;
      return responseBody;
    });
  return result;
}

