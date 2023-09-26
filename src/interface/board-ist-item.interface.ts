export default interface BoardListItem {
    boardNumber: number;
    tite: string;
    content: string;
    boardTitleImage: string | null;
    commentCount: number;
    viewCount: number;
    writeDatetime: string;
    writerNickname: string;
    writerProfileImage: string | null;
}