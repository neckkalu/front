export default interface SignUpRequestDto {
    email: string;
    password: string;
    nickname: string;
    telNumber: string;
    address: Int16Array;
    addressDetail: string | null;
}
