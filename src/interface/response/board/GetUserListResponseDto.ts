import ResponseDto from "../Response.dto";
import BoardListResponseDto from "./BoardListItemResponseDto";

export default interface GetUserListResponseDto extends ResponseDto {
  boardList: BoardListResponseDto[];
}