import ResponseDto from "../Response.dto";

export default interface GetUserResponseDto extends ResponseDto {
  emailId: string;
  nickname: string;
  profileImageUrl: string;
}