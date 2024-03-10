export enum Status {
  EXIST = "exist",
  SUCCESS = "success",
  MISSING = "missing",
  ERROR = "error",
}

export type RegisterTypes = {
  userName: string;
  displayName: string;
  email: string;
  password: string;
};

export type LoginTypes = {
  email: string;
  password: string;
};

export type CredentialsReturnType = {
  userId: string;
  email: string;
  photoUrl: string;
  userName: string;
};

export type isExistStateType = {
  message: string;
};
