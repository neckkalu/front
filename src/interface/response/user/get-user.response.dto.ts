import ResponseDto from "interface/response/Response.dto";

export default interface GetUserResponseDto extends ResponseDto {
  email: string;
  nickname: string;
  profileImageUrl: string;
}