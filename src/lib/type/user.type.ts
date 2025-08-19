export type LoginUserRequest = {
  username: string;
  password: string;
};

export type LoginUserResponse = {
  token: string;
};

export type RegisterUserRequest = {
  kode: string;
  username: string;
  password: string;
  nama: string;
  jabatan: string;
  role: "ADMIN" | "OPERASIONAL" | "LAPANGAN" | "PILOT";
};

export type RegisterUserResponse = {
  kode: string;
};

export type CurrentUserResponse = {
  kode: string;
  username: string;
  nama: string;
  jabatan: string;
  role: "ADMIN" | "OPERASIONAL" | "LAPANGAN" | "PILOT";
};

export type TokenPayload = {
  kode: string;
  username: string;
};

export interface DecodedJwtPayload {
  kode: string;
  username: string;
  iat: number;
  exp: number;
}
