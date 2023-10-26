import ResponseDto from "../Response.dto";

export default interface GetLoginUserResponseDto extends ResponseDto {
  emailId: string;
  nickname: string;
  profileImageUrl: string;
}