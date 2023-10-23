import ResponseDto from "../Response.dto";

export default interface GetCommentListResponseDto extends ResponseDto {
  commentList: CommentListResponseDto[];
}

export interface CommentListResponseDto {
  profileImageUrl: string;
  nickname: string;
  contents: string;
  writeDatetime: string;
}