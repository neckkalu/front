import ResponseDto from "../Response.dto";

export default interface SignInResponseDto extends ResponseDto {
  token: string;
  expiredTime: number;
}