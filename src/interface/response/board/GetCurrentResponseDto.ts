import ResponseDto from "../Response.dto";
import BoardListResponseDto from "./BoardListItemResponseDto";

export default interface GetCurrentResponseDto extends ResponseDto {
  boardList: BoardListResponseDto[];
}