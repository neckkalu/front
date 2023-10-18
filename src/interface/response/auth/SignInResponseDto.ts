import ResponseDto from "interface/response/Response.dto";


export default interface SignInResponseDto extends ResponseDto {
  token: string;
  expiredTime: number;
}