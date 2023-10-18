import ResponseDto from "interface/response/Response.dto";

export default interface GetLoginUserResponseDto extends ResponseDto {
  email: string;
  nickname: string;
  profileImageUrl: string;
}